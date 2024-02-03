from fastapi import FastAPI, Response, status, HTTPException, Depends, APIRouter,UploadFile,File
from fastapi.responses import JSONResponse
from database import Session,engine

from models import Article
""" from schemas import SignUpModel """
""" from schemas import FileUploadSchema """

from sqlalchemy.orm import Session
from werkzeug.security import generate_password_hash , check_password_hash
from typing import List, Optional

import os
import secrets
import subprocess

from routers.esSearch import perform_search
from routers.elasticSearchLogic import ElasticSearch_indexation


router = APIRouter(prefix="/article", tags=["articles"])
session=Session(bind=engine)
 
@router.get("/")
async def main():
    
    return {"message":"hi from articles"}

@router.post('/upload')
async def upload(file:UploadFile=File(...)):  #create File instance 

    file_ext=file.filename.split(".").pop()    
    file_name=secrets.token_hex(10)   #gives it unique name
     
    file_path=f"./pdfFiles/{file_name}.{file_ext}"
    print(file_path)
    with open(file_path,"wb") as f:
        content = await file.read()
        f.write(content)
 
    return {"success":True, "file_path":file_path}

@router.get('/index')
async def EsIndexing():
    try:
        
        await ElasticSearch_indexation();

        return {"message":"indexing went well "}
    except Exception as e: 
        print("indexing failed")
        print(e)
        return {"message":"indexing went wrong "}
        
@router.get('/Perform_search')
async def serachInEs():

    serach_result=perform_search()
    """ print(serach_result) """

    return {"message":serach_result}
     
 
 

 







    

