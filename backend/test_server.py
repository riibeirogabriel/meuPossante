import unittest
import json

from backend.server import app

app.testing = True
test_client = app.test_client()


class TestUser(unittest.TestCase):

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_a_create_an_user(self):
        user_password = "347232"
        response = test_client.post(
            "/users",
            json={"email": "teste@gmail.com",
                  "name": "juliartrtno",
                  "phone": "54nmnmgffj"},
            headers=[("password", user_password)])
        user_uri = json.loads(response.data)["result"]

        self.assertEqual(201, response.status_code)

        response = test_client.delete(
            user_uri, headers=[
                ("password", user_password)])

        print("delting user in create method " + str(response.status_code),
              flush=True)

    def test_b_read_an_user(self):
        user_password = "347232"
        response = test_client.post(
            "/users",
            json={"email": "teste@gmail.com",
                  "name": "juliartrtno",
                  "phone": "197676767jkj9653"},
            headers=[("password", user_password)])
        user_uri = json.loads(response.data)["result"]

        print("read an user " + user_uri, flush=True)
        response = test_client.get(user_uri)

        self.assertEqual(200, response.status_code)

        test_client.delete(
            user_uri, headers=[
                ("password", user_password)])

    def test_d_delete_an_user(self):
        user_password = "347232"
        response = test_client.post(
            "/users",
            json={"email": "teste@gmail.com",
                  "name": "juliartrtno",
                  "phone": "196lkçhj69653"},
            headers=[("password", user_password)])
        user_uri = json.loads(response.data)["result"]

        response = test_client.delete(
            user_uri, headers=[
                ("password", user_password)])

        self.assertEqual(200, response.status_code)


class TestCar(unittest.TestCase):
    def setUp(self):
        self.user_id = None
        self.user_password = "784595"
        self.car_id_url = None

    def test_a_create_an_user(self):
        response = test_client.post(
            "/users",
            json={"email": "olaestoue@gmail.com",
                  "name": "juanilson",
                  "phone": "317845968578"},
            headers=[("password", self.user_password)])

        user_id_url = json.loads(response.data)["result"]
        user_id_index = user_id_url.find("/", 1)
        self.user_id = user_id_url[user_id_index:]

        self.assertEqual(201, response.status_code)

    def test_b_create_a_car(self):
        response = test_client.post(
            "/users",
            json={
                "value": "45000",
                "fuel": "gasolina",
                "year": "2008",
                "brand": "honda",
                "model": "civic",
                "image": "",
                "mileage": "78000"},
            headers=[("user_id", self.user_id)])

        self.car_id_url = json.loads(response.data)["result"]
        self.assertEqual(201, response.status_code)

    def test_c_read_a_car(self):
        response = test_client.get(self.car_id_url)

        self.assertEqual(200, response.status_code)

    def test_c_search_a_car(self):
        response = test_client.get(
            self.car_id_url,
            query_string={"skip": 0, "limit": 10,
                          "model": 0, "brand:": 0,
                          "year": 0})

        self.assertEqual(200, response.status_code)

    def test_d_update_a_car(self):
        response = test_client.put(
            self.car_id_url,
            json={"value": "43000"})

        self.assertEqual(200, response.status_code)

    def test_e_delete_a_car(self):
        response = test_client.delete(self.car_id_url)

        self.assertEqual(200, response.status_code)


if __name__ == '__main__':
    unittest.main()
