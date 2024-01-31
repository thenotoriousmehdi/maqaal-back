from fastapi import FastAPI, Response, status, HTTPException, Depends, APIRouter
from fastapi.responses import JSONResponse
from database import Session,engine

from models import Article
""" from schemas import SignUpModel """

from sqlalchemy.orm import Session
from typing import List, Optional

from werkzeug.security import generate_password_hash , check_password_hash


router = APIRouter(prefix="/article", tags=["articles"])
session=Session(bind=engine)
 
@router.get("/")
async def main():
    
    return {"message":"hi from articles"}