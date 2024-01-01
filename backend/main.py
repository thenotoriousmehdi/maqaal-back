from fastapi import  FastAPI, status,Depends,UploadFile,File
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi_jwt_auth import AuthJWT
from schemas import Settings

from database import Session,engine
from models import User
from schemas import SignUpModel,LoginModel,VerifyTokenModel
from fastapi.exceptions import HTTPException
from werkzeug.security import generate_password_hash , check_password_hash
from fastapi.encoders import jsonable_encoder

from esSearch import perform_search
from elasticSearchLogic import ElasticSearch_indexation

import os
import secrets
import subprocess

app = FastAPI()

session=Session(bind=engine)

@AuthJWT.load_config
def get_config():
    return Settings()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
async def hello():
   
    data={"message":"hello from backend"}
    return JSONResponse(content=data)


@app.post('/upload')
async def upload(file:UploadFile=File(...)):  #create File instance 

    file_ext=file.filename.split(".").pop()    
    file_name=secrets.token_hex(10)   #gives it unique name 
    file_path=f"{file_name}.{file_ext}"
    with open(file_path,"wb") as f:
        content = await file.read()
        f.write(content)

   
    
    return {"success":True, "file_path":file_path}

async def run_cermine_extraction():
    command = [
        'java',
        '-cp', './cermine-impl-1.13-jar-with-dependencies.jar',
        'pl.edu.icm.cermine.ContentExtractor',
        '-path', 'pdfFiles'
    ]

    result = subprocess.run(command, capture_output=True, text=True, check=True)
    print(result.stdout) 
     


@app.get('/extract/{fileName}')
async def extract(fileName:str):  

    print(fileName)

    try:
       await run_cermine_extraction()
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
        print(f"Output: {e.output}")

    #time to send response 
    

    with open(f"./pdfFiles/{fileName}.cermxml", 'r', encoding='utf-8') as file:
        xml_content = file.read()

    #detetion of extra files
        
    file_path1 = "fileName.cermxml"
    file_path2 = "fileName.images"
     
    return({"data":xml_content})



    
@app.get('/Perform_search')
async def hello():
    serach_result=perform_search()
    print(serach_result)
    data={"message":"hello from backend"}
    return JSONResponse(content=data)



@app.get('/index')
async def EsIndexing():
    try:
        await ElasticSearch_indexation("./jsonsample.json");
        return {"message":"indexing wnet well "}
    except Exception as e:
        print(e)

@app.get('/articles')
async def hello(Authorize:AuthJWT=Depends()):

    try:
        Authorize.jwt_required() 
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid Token"
        )
    return {"message":"Articles page"}

@app.post('/login',status_code=200)
async def login(user:LoginModel,Authorize:AuthJWT=Depends()):
 
    db_user=session.query(User).filter(User.username==user.username).first()
    
    if db_user and check_password_hash(db_user.password, user.password):
        access_token=Authorize.create_access_token(subject=db_user.username,expires_time=10)
        refresh_token=Authorize.create_refresh_token(subject=db_user.username)


        return jsonable_encoder({"access_token":access_token})

    raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
        detail="Invalid Username Or Password"
    )


@app.post("/validateToken", status_code=200)
async def verifyToken(Authorize: AuthJWT = Depends()):
    try:
        # Verify the token
        Authorize.jwt_required()  # this adds a layer of security, I guess
        current_user = Authorize.get_jwt_subject()

        # Return the JSONResponse object
        response = {"valid": "valid", "user": current_user}
        return jsonable_encoder(response)
       

    except Exception as e:
        # Handle JWT verification exceptions
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=str(e))

