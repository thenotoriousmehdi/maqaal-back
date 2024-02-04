from elasticsearch import Elasticsearch

def perform_search(searchString):
    es = Elasticsearch("http://localhost:9200")

    # Your search query
    search_query_prim = {
        "bool": {
            "must":[{
                "match":{
                    "DocumentTitle":searchString
                }
            }],
            "filter":[],
            "should":[],
            "must_not":[]

        },
    }

    # Perform the search
    resp = es.search(index="data", query=search_query_prim)
    print(resp)
    return resp