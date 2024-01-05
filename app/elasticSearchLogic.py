#***************
#Esastic search 
#***************
async def ElasticSearch_indexation(JsonStringPath):

    #This will connect to your local cluster.
    from elasticsearch import Elasticsearch

    es = Elasticsearch("http://localhost:9200")
    es.info().body

    import pandas as pd

    df = ( #May problem
        pd.read_json(JsonStringPath)
        .dropna()
        .sample(20, random_state=42)
        .reset_index()
    )

    print(df)
      
    import logging
    logging.basicConfig(level=logging.INFO)

    for i, row in df.iterrows():
        logging.info(f"Indexing row {i}")

        doc=row['products']
        es.index(index="products", id=i, document=doc)

    es.indices.refresh(index="products")
    es.cat.count(index="products", format="json")