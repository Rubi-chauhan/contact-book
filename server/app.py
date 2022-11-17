from flask import Flask, request, jsonify
from pymongo import MongoClient

from bson.objectid import ObjectId
from flask_cors import CORS

app = Flask(__name__)

client  = MongoClient('mongodb+srv://Rubi_db:T2P9R5d5lWl7SRAF@cluster0.tvyoi.mongodb.net/')
db = client['contact_handbook']

CORS(app)

@app.route('/contacts', methods=['POST','GET'])
def data():

    if request.method == 'POST':

        result = db['contacts'].insert_one({
            "name": request.json['name'],
            "phone_number": request.json['phone_number'],
            "email": request.json['email'],
            "note": request.json['note']
        })

        return jsonify({
            'status':'contact created sucessfully',
            "data": result

        })



    # GET all data from database
    if request.method == 'GET':
        allData = db['contacts'].find()
        dataJson = []
        for data in allData:

            dataJson.append({
                '_id':str(ObjectId(data['_id'])),
                'name' : data['name'],
                'phone_number' : data['phone_number'],
                'email' : data['email'],
                'note' : data['note']
                }),
                    
        
        return jsonify(dataJson)


@app.route('/contacts/<id>', methods=['GET','PUT','DELETE'])
def oneDAta(id):

    if request.method == 'GET':
        data= db['contacts'].find_one({'_id':ObjectId(id)})

        dataDict = {
            '_id':str(ObjectId(data['_id'])),
            'name': data['name'],
            'phone_number':data['phone_number'],
            'email':data['email'],
            'note':data['note']
            }
        return jsonify(dataDict)

    if request.method == 'DELETE':
        data= db['contacts'].delete_one({'_id':ObjectId(id)})
        return jsonify({
            "status":"Contact id:" + id + "is deleted"
        })

    if request.method == 'PUT':

        db['contacts'].update_one({
            '_id':ObjectId(id)},
            {
                "$set":{
                   "name": request.json['name'],
                   "phone_number": request.json['phone_number'],
                   "email": request.json['email'],
                   "note": request.json['note']
                }
            }
            )

        return jsonify({
            "status":"Contact id:" + id + "is updated successfully"
        })




if __name__ == '__main__':
    app.debug: True
    app.run()

