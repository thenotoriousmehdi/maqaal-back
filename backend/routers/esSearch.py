from elasticsearch import Elasticsearch

def perform_search(searchString):
    es = Elasticsearch("http://localhost:9200")

    my_string = "id:12345"
    if my_string.startswith("id:"):
        flagID=True
    else:
        flagID=False



        #  Your search query
    if searchString == "all4":
        search_query_prim = {
            "query": {
                "match_all": {}
            },
            "size": 4
        }


    elif searchString == "all": 
        search_query_prim = {
            "query": {
                "match_all": {}
            }
        }
    
    elif flagID == True:
         search_query_prim = {
            "query": {
                "bool": {
                "must": [
                    {
                    "term": {
                        "Article_ID": {
                        "value": searchString.split(":").pop()
                        }
                     }
                    }
                ],
                "filter": [],
                "should": [],
                "must_not": []
                }
            }
            }

    else:
        search_query_prim = {
            "query": {
                "bool": {
                    "must": [{
                        "match": {
                            "DocumentTitle": searchString
                        }
                    }],
                    "filter": [],
                    "should": [],
                    "must_not": []
                }
            }
        }


    # Perform the search
    resp = es.search(index="data", body=search_query_prim)
    print(resp)
    return resp