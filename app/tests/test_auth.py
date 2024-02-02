from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_get_user():
    # Test avec utilisateur non authentifié (devrait renvoyer 401)
    response = client.get("/users/me")
    assert response.status_code == 401


def test_login():
    # Test avec utilisateur inexistant
    response = client.post(
        "/login",
        data={"username": "email@esi.dz", "password": "passwordddddd"},
    )
    assert response.status_code == 403

    # Test avec un utilisateur existant
    valid_credentials = {"username": "email@esi.dz", "password": "password"}
    response = client.post("/login", data=valid_credentials)
    assert response.status_code == 200
    assert "access_token" in response.json()
    assert response.json()["token_type"] == "bearer"


def test_get_mods():

    response = client.get("/moderateurs")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
