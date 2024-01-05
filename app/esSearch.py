from elasticsearch import Elasticsearch

def perform_search():
    es = Elasticsearch("http://localhost:9200")

    # Your search query
    search_query = {
        "bool": {
            "must": {
                "match_phrase": {
                    "title": "iPhone 9",
                }
            },

            "filter": {
                "bool": {
                    "must_not": {
                        "match_phrase": {
                            "id": 8
                        }
                    }
                }
            },
        },
    }

    # Perform the search
    resp = es.search(index="products", query=search_query)
    return resp