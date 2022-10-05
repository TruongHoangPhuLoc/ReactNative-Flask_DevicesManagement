import pymongo

def fetchData(database,collection):
    connect = pymongo.MongoClient("mongodb://admin:admin@localhost:27017/")
    db = connect[database]
    col = db[collection]
    data = col.find()
    result = []
    for x in data:
        result.append(x)
    return result


data = fetchData('Test','users')
print(type(data[0]['_id']))
