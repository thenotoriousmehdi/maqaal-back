#***************
#Esastic search 
#***************
import json

""" map = {
    "mappings": {
        "properties": {
            "institutions": {"type": "text"},
            "auteurs": {"type": "text"},
            "abstract": {"type": "text"},
            "title": {"type": "text"},
            "sections": {
                "type": "nested",
                "properties": {
                    "title": {"type": "text"},
                    "paragraphs": {"type": "text"}
                }
            }
        }
    }
}
 """
map = {
    "mappings": {
        "properties": {
            "Article_ID": {"type": "text"},
            "DocumentTitle": {"type": "text"},
            "Auteurs": {"type": "text"},
            "Institutions": {"type": "text"},
            "Abstract": {"type": "text"},
            "Sections": {
                "type": "nested",
                "properties": {
                    "title": {"type": "text"},
                    "paragraphs": {"type": "text"}
                }
            },
            "references": {"type": "text"}
        }
    }
}


 

async def ElasticSearch_indexation():

    #This will connect to your local cluster.
    from elasticsearch import Elasticsearch
    es = Elasticsearch("http://localhost:9200")
    index_name = "data"

    if not es.indices.exists(index=index_name):
      print("INDEX CREATION :")
      es.indices.create(index=index_name, body=map)
    
    es.info().body


    with open(f"./routers/articles_To_index.json", 'r') as file:
        data = json.load(file)

     
    """ dataA=data["data"][0].replace("\\n","") """
    dataIndex={
        'data':[]
    }

    for item in data["data"]:
        DataUnit=item.replace("\\n","")
        dataIndex["data"].append(DataUnit)

    data_with_list = {
    'data': list(dataIndex['data'])
    }

    dataIndexString = json.dumps(data_with_list)

    import pandas as pd
    df = ( #May problem
        pd.read_json(dataIndexString)
        .dropna()
        .reset_index()
    )
    print("======= DATA FRAME START =======")
    print(df)
    print("======= DATA FRAME END =======")
    import logging

    try:
        logging.basicConfig(level=logging.INFO)
        for i, row in df.iterrows():
            logging.info(f"Indexing row {i}")
            print("=============================")
            doc=row['data']

            print(es.indices.exists(index="data"))
            if not es.indices.exists(index="data"):
                es.indices.create(index="data",mappings=map) 

            es.index(index="data", id=i, document=doc)
    except Exception as e:
        print("error message")
        print(e)
        return {"message":"bad"}
        

    es.indices.refresh(index="data")
    es.cat.count(index="data", format="json")