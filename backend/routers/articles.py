from fastapi import FastAPI, Response, status, HTTPException, Depends, APIRouter,UploadFile,File
from fastapi.responses import JSONResponse
from database import Session,engine

from models import Article
from schemas import LunchParam
 
""" from schemas import FileUploadSchema """

from sqlalchemy.orm import Session
from werkzeug.security import generate_password_hash , check_password_hash
from typing import List, Optional

import os
import secrets
import subprocess
import json

from routers.esSearch import perform_search
from routers.elasticSearchLogic import ElasticSearch_indexation


router = APIRouter(prefix="/article", tags=["articles"])
session=Session(bind=engine)

 
@router.get("/")
async def main():
    return {"message":"hi from articles"}
@router.post('/doExist')
async def doExist(data: dict):
    received_data = data.get("data")
    print("Received data:", received_data)

    try:
        with open(f"./routers/doExist.json", 'r') as file:
            doExist_json = json.load(file)

        flag = doExist_json.get(received_data, False) 
         
    except FileNotFoundError:
        flag = False
        print("File does not exist")

    print(flag)

    if not flag:
        newData = {received_data: True}
        doExist_json.update(newData)

        try:
            with open(f"./routers/doExist.json", 'w') as file:
                json.dump(doExist_json, file, indent=2)
            return {"info": False}
        except Exception as e:
            print(f"Error updating file: {e}")
            return {"info": "err"}
    else:
        return {"info": True}


@router.post('/upload')
async def upload(file:UploadFile=File(...)):  #create File instance 
    print("hey")
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

 
@router.post('/Perform_search')
async def searchInEs(data:dict):
    print(data.get("data"))
    serach_result=perform_search(data.get("data")) 
    print(serach_result)
    return {"data":serach_result }


@router.get('/Perform_search')
async def searchInEs():
    print("getting articles")
    serach_result=perform_search("all4") 
    return {"data":serach_result}


@router.get("/Perform_search/{id}")
async def getArticleById(id: str):

    serach_result=perform_search(f"id:{id}") 
    
    return serach_result


@router.post('/filter')
async def filter(lunch_param: LunchParam):

    print(lunch_param.Auteurs)    

    return {"data":"message"}