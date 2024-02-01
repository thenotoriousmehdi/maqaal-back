from fastapi import FastAPI, Response, status, HTTPException, Depends, APIRouter
from fastapi.responses import JSONResponse
from database import Session,engine

from models import User
from schemas import SignUpModel

from sqlalchemy.orm import Session
from typing import List, Optional

from werkzeug.security import generate_password_hash , check_password_hash


router = APIRouter(prefix="/user", tags=["users"])
session=Session(bind=engine)

@router.get("/")
async def main():
    
    return {"message":""}

@router.post("/signup", status_code=status.HTTP_201_CREATED)
async def signup(user:SignUpModel):
    
    db_email=session.query(User).filter(User.email==user.email).first()

    if db_email is not None:
        print("email error ")
        return HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
            detail="User with the email already exists"
        )
    
    db_username=session.query(User).filter(User.username==user.username).first()

    if db_username is not None:
        print("user name error ")
        return HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
            detail="User with the username already exists"
        )
    
    new_user=User(
        fullname=user.fullname,
        username=user.username,
        email=user.email,
        password=generate_password_hash(user.password),
        date_of_birth=user.date_of_birth
    )

    session.add(new_user)
    session.commit()
    
    return new_user 


@router.get("/user")
async def getUser():
    try:
        db_user=session.query(User).filter(User.username=="riad").first()
    except Exception as e:
        db_user="probleme"
        print(e)

    return {"message":db_user}