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
import pandas_read_xml as pdx

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

async def run_cermine_extraction():
    command = [
        'java',
        '-cp', './cermine-impl-1.13-jar-with-dependencies.jar',
        'pl.edu.icm.cermine.ContentExtractor',
        '-path', 'pdfFiles'
    ]

    result = subprocess.run(command, capture_output=True, text=True, check=True)
    print(result.stdout) 
     

#temp postion (should be in router)
@app.get('/article/extract/{fileName}')
async def extract(fileName:str):  

    print(fileName)

    try:
       await run_cermine_extraction()
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
        print(f"Output: {e.output}")

    #time to send response 

    fileNameExtbar = fileName.split(".")[0]
    print(fileNameExtbar)
    
    with open(f"./pdfFiles/{fileNameExtbar}.cermxml", 'r', encoding='utf-8') as file:
        xml_content = file.read()

    #detetion of extra files
        
    file_path1 = "fileName.cermxml"
    file_path2 = "fileName.images"

    #xml data to json 
    dataframe=pdx.read_xml(xml_content)
    return({"data":dataframe})

  
@app.get("/")
async def main():
    return {"message":"hello from main"}




