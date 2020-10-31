from flask import Flask, request, jsonify
import pymongo
import hashlib
from datetime import datetime
import pytz

app = Flask("router")

client = pymongo.MongoClient(
    "mongodb+srv://gabriel:7oCSy0X0yWVsvqom@cluster0.9lkr6.mongodb.net/<dbname>?retryWrites=true&w=majority")

users_db = client["meu_possante"].users
cars_db = client["meu_possante"].cars

HTTP_STATUS_CODE_SUCESS = 200
HTTP_STATUS_CODE_SUCESS_CREATED = 201
HTTP_STATUS_CODE_NOT_FOUND = 404
HTTP_STATUS_CODE_UNAUTHORIZED = 401


@app.route("/users", methods=["GET"])
def users():
    document = {}
    if request.method == "POST":

        document["password"] = hashlib.md5(
            request.header.get("password").encode())

        document["email"] = request.json["email"]
        document["name"] = request.json["name"]
        document["phone"] = request.json["phone"]

        timezone_london = pytz.timezone("Etc/Greenwich")
        london_time = datetime.now(timezone_london)
        document["creation_time"] = london_time.strftime(
            "%Y-%m-%dT%H:%M:%S-00:00")

        document_id = users_db.insert_one(document).inserted_id

        return (
            jsonify({"content": document_id}),
            HTTP_STATUS_CODE_SUCESS_CREATED,
        )

    elif request.method == "GET":
        user_id = request.args.get("id")
        user_document = users_db.find_one({"_id": user_id})

        if user_document == None:
            return (
                "", HTTP_STATUS_CODE_NOT_FOUND,
            )
        else:
            return (
                jsonify({"content": user_document}),
                HTTP_STATUS_CODE_SUCESS,
            )


    elif request.method == "DELETE":
        user_id = request.args.get("id")
        user_password = hashlib.md5(
            request.header.get("password").encode())

        user_document = users_db.find_one({"_id": user_id})

        if user_document == None:
            return (
                "", HTTP_STATUS_CODE_NOT_FOUND,
            )
        elif (user_document["password"] != user_password):
            return (
                "",
                HTTP_STATUS_CODE_UNAUTHORIZED,
            )
        else:
            users_db.delete_one({"_id": user_id})
            return (
                jsonify({"content": user_document}),
                HTTP_STATUS_CODE_SUCESS,
            )


@app.route("/cars")
def cars():
    if request.method == "POST":
        pass
    elif request.method == "GET":
        pass
    elif request.method == "PUT":
        pass
    elif request.method == "DELETE":
        pass
