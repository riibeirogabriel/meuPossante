from flask import Flask, request, jsonify
import pymongo
import hashlib
from datetime import datetime
import pytz
import os
from dotenv import load_dotenv
from bson.objectid import ObjectId
from bson.json_util import dumps
import json

HTTP_STATUS_CODE_SUCCESS = 200
HTTP_STATUS_CODE_SUCCESS_CREATED = 201
HTTP_STATUS_CODE_NOT_FOUND = 404
HTTP_STATUS_CODE_UNAUTHORIZED = 401
HTTP_STATUS_CODE_CONFLICT = 409
HTTP_STATUS_CODE_NOT_ACCEPTABLE = 406

DOCUMENT_ID_FIELD = "_id"
REQUEST_RESPONSE_FIELD_NAME = "result"
USER_NOT_FOUND_REPONSE = "User not found"
CAR_NOT_FOUND_REPONSE = "Car not found"
TIME_FORMAT = "%Y-%m-%dT%H:%M:%S-00:00"
MONGO_DATABASE_NAME = "meu_possante"
PAGINATION_LIMIT = 20

project_folder = os.path.expanduser('./')
load_dotenv(os.path.join(project_folder, '.env'))

app = Flask(__name__)

client = pymongo.MongoClient(os.getenv("MONGO_URL"))

users_db = client[MONGO_DATABASE_NAME].users
cars_db = client[MONGO_DATABASE_NAME].cars


@app.route("/users", methods=["POST"])
def create_user():
    user_document = users_db.find_one(
        {DOCUMENT_ID_FIELD: request.json["phone"]})
    if user_document is not None:
        return (
            jsonify({REQUEST_RESPONSE_FIELD_NAME: "User already registered"}),
            HTTP_STATUS_CODE_CONFLICT,
        )

    password = hashlib.md5(
        request.headers.get("password").encode()).hexdigest()
    timezone_london = pytz.timezone("Etc/Greenwich")
    london_time = datetime.now(timezone_london)
    creation_time = london_time.strftime(
        TIME_FORMAT)

    document = {
        "password": password,
        "email": request.json["email"],
        "name": request.json["name"],
        "phone": request.json["phone"],
        "creation_time": creation_time,
        DOCUMENT_ID_FIELD: request.json["phone"]}

    document_id = users_db.insert_one(document).inserted_id

    return (
        jsonify({REQUEST_RESPONSE_FIELD_NAME: "/users/" + str(document_id)}),
        HTTP_STATUS_CODE_SUCCESS_CREATED,
    )


@app.route("/users/<int:user_id>", methods=["GET"])
def read_user(user_id):
    user_document = users_db.find_one({DOCUMENT_ID_FIELD: int(user_id)})

    if user_document is None:
        return (
            jsonify({REQUEST_RESPONSE_FIELD_NAME: USER_NOT_FOUND_REPONSE}),
            HTTP_STATUS_CODE_NOT_FOUND,
        )
    else:
        return (
            jsonify({REQUEST_RESPONSE_FIELD_NAME: user_document}),
            HTTP_STATUS_CODE_SUCCESS,
        )


@app.route("/users/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    user_password = hashlib.md5(
        request.headers.get("password").encode()).hexdigest()

    user_document = users_db.find_one({DOCUMENT_ID_FIELD: user_id})

    if user_document is None:
        return (
            jsonify({REQUEST_RESPONSE_FIELD_NAME: USER_NOT_FOUND_REPONSE}),
            HTTP_STATUS_CODE_NOT_FOUND,
        )
    elif user_document["password"] != user_password:
        return (
            jsonify(
                {REQUEST_RESPONSE_FIELD_NAME: "Wrong password"}),
            HTTP_STATUS_CODE_UNAUTHORIZED,
        )
    else:
        users_db.delete_one({DOCUMENT_ID_FIELD: user_id})
        return (
            jsonify({REQUEST_RESPONSE_FIELD_NAME: user_document}),
            HTTP_STATUS_CODE_SUCCESS,
        )


@app.route("/cars", methods=["POST"])
def create_car():
    user_id = request.headers.get("user_id")
    user_document = users_db.find_one(
        {DOCUMENT_ID_FIELD: int(user_id)})
    if user_document is None:
        return (
            jsonify({REQUEST_RESPONSE_FIELD_NAME: USER_NOT_FOUND_REPONSE}),
            HTTP_STATUS_CODE_NOT_ACCEPTABLE,
        )

    timezone_london = pytz.timezone("Etc/Greenwich")
    london_time = datetime.now(timezone_london)
    creation_time = london_time.strftime(
        TIME_FORMAT)

    car_document = {
        "user_id": user_id,
        "value": request.json["value"],
        "fuel": request.json["fuel"],
        "year": request.json["year"],
        "brand": request.json["brand"],
        "model": request.json["model"],
        "image": request.json["image"],
        "mileage": request.json["mileage"],
        "description": request.json["description"],
        "creation_time": creation_time,
        DOCUMENT_ID_FIELD: str(ObjectId())}

    car_document_id = cars_db.insert_one(car_document).inserted_id

    return (
        jsonify({REQUEST_RESPONSE_FIELD_NAME: "/cars/" + car_document_id}),
        HTTP_STATUS_CODE_SUCCESS_CREATED,
    )


@app.route("/cars/<string:car_id>", methods=["GET"])
def read_car(car_id):
    car_document = cars_db.find_one({DOCUMENT_ID_FIELD: car_id})

    if car_document is None:
        return (
            jsonify({REQUEST_RESPONSE_FIELD_NAME: CAR_NOT_FOUND_REPONSE}),
            HTTP_STATUS_CODE_NOT_FOUND,
        )
    else:
        return (
            jsonify({REQUEST_RESPONSE_FIELD_NAME: car_document}),
            HTTP_STATUS_CODE_SUCCESS,
        )


@app.route("/cars/", methods=["GET"])
def search_car():
    car_query = {}
    limit, skip = None, None

    for key in request.args.keys():
        if key == "limit":
            limit = int(request.args.get(key))
            continue
        if key == "skip":
            skip = int(request.args.get(key))
            continue

        car_query[key] = request.args.get(key)

    if limit > PAGINATION_LIMIT:
        limit = PAGINATION_LIMIT

    cars_document = cars_db.find(car_query).skip(skip).limit(limit)

    cars_result = []
    for car_document in cars_document:
        cars_result.append(json.loads(dumps(car_document)))

    if cars_document is None:
        return (
            jsonify({REQUEST_RESPONSE_FIELD_NAME: CAR_NOT_FOUND_REPONSE}),
            HTTP_STATUS_CODE_NOT_FOUND,
        )
    else:
        return (
            jsonify({REQUEST_RESPONSE_FIELD_NAME: cars_result}),
            HTTP_STATUS_CODE_SUCCESS,
        )


@app.route("/cars/<string:car_id>", methods=["PUT"])
def update_car(car_id):
    car_update_document = {"$set": request.json}

    car_search_query = {
        DOCUMENT_ID_FIELD: car_id
    }

    try:
        response = cars_db.update_one(car_search_query,
                                      car_update_document).modified_count
        print(response, flush=True)
    except Exception:
        return (
            jsonify({REQUEST_RESPONSE_FIELD_NAME: "Wrong fields in requests"}),
            HTTP_STATUS_CODE_NOT_ACCEPTABLE,
        )

    return (
        jsonify({REQUEST_RESPONSE_FIELD_NAME: "/cars/" + car_id}),
        HTTP_STATUS_CODE_SUCCESS,
    )


@app.route("/cars/<string:car_id>", methods=["DELETE"])
def delete_car(car_id):
    car_document = cars_db.find_one({DOCUMENT_ID_FIELD: car_id})

    if car_document is None:
        return (
            jsonify({REQUEST_RESPONSE_FIELD_NAME: CAR_NOT_FOUND_REPONSE}),
            HTTP_STATUS_CODE_NOT_FOUND,
        )
    else:
        cars_db.delete_one({DOCUMENT_ID_FIELD: car_id})
        return (
            jsonify({REQUEST_RESPONSE_FIELD_NAME: car_document}),
            HTTP_STATUS_CODE_SUCCESS,
        )
