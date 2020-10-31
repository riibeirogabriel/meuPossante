import unittest
import json

from backend.server import app

app.testing = True
test_client = app.test_client()


class TestUser(unittest.TestCase):
    def setUp(self):
        self.user_id_url = None
        self.user_password = "124578"

    def test_create_an_user(self):
        response = test_client.post("/users",
                                    json={"email": "teste@gmail.com",
                                          "name": "juliano",
                                          "phone": "31985596496"},
                                    headers=[("password", self.user_password)])

        self.user_id_url = json.loads(response.data)["content"]
        self.assertEqual(201, response.status_code)

    def test_read_an_user(self):
        response = test_client.get(self.user_id_url)

        self.assertEqual(200, response.status_code)

    def test_search_an_user(self):
        response = test_client.get(self.user_id_url,
                                   query_string={"skip": 0, "limit": 10,
                                                 "model": 0, "brand:": 0,
                                                 "year": 0})

        self.assertEqual(200, response.status_code)

    def test_update_an_user(self):
        response = test_client.put(self.user_id_url,
                                   json={"phone": "31987459658"},
                                   headers=[("password", self.user_password)])

        self.assertEqual(200, response.status_code)

    def test_delete_an_user(self):
        response = test_client.delete(self.user_id_url, headers=[
            ("password", self.user_password)])

        self.assertEqual(200, response.status_code)


class TestCar(unittest.TestCase):
    def setUp(self):
        self.user_id = None
        self.user_password = "784595"
        self.car_id_url = None

    def test_create_an_user(self):
        response = test_client.post("/users",
                                    json={"email": "olaestoue@gmail.com",
                                          "name": "juanilson",
                                          "phone": "3178459685"},
                                    headers=[("password", self.user_password)])

        user_id_url = json.loads(response.data)["content"]
        user_id_index = user_id_url.find("/", 1)
        self.user_id = user_id_url[user_id_index:]

        self.assertEqual(201, response.status_code)

    def test_create_a_car(self):
        response = test_client.post("/users",
                                    json={
                                        "value": "45000",
                                        "fuel": "gasolina",
                                        "year": "2008",
                                        "brand": "honda",
                                        "model": "civic",
                                        "image": "",
                                        "mileage": "78000"},
                                    headers=[("user_id", self.user_id)])

        self.car_id_url = json.loads(response.data)["content"]
        self.assertEqual(201, response.status_code)

    def test_read_a_car(self):
        response = test_client.get(self.car_id_url)

        self.assertEqual(200, response.status_code)

    def test_update_a_car(self):
        response = test_client.put(self.car_id_url,
                                   json={"value": "43000"})

        self.assertEqual(200, response.status_code)

    def test_delete_a_car(self):
        response = test_client.delete(self.car_id_url)

        self.assertEqual(200, response.status_code)
