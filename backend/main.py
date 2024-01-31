from fastapi import FastAPI,status,Depends
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

from database import Session,engine
from models import User

from fastapi.exceptions import HTTPException
from werkzeug.security import generate_password_hash , check_password_hash
from fastapi.encoders import jsonable_encoder

import os
import secrets
import subprocess

app = FastAPI()

session=Session(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def main():
    return {"message":"hello from main"}

@app.get("/user")
async def getUser():
    try:
        db_user=session.query(User).filter(User.username=="riad").first()
    except Exception as e:
        db_user="probleme"
        print(e)

    return {"message":db_user}

