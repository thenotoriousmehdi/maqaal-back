from fastapi import FastAPI,status,Depends
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

from database import Session,engine
from schemas import SignUpModel
from models import User

from routers import users,articles

from fastapi.exceptions import HTTPException
from werkzeug.security import generate_password_hash , check_password_hash
from fastapi.encoders import jsonable_encoder

import os
import secrets
import subprocess

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router)
app.include_router(articles.router)

  
@app.get("/")
async def main():
    return {"message":"hello from main"}




