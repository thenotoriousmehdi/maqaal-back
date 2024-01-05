from fastapi import FastAPI, UploadFile, File
from . import models
from .database import engine
import subprocess
from dotenv import load_dotenv
from .routers import post, auth



load_dotenv()
models.Base.metadata.create_all(bind=engine)

app = FastAPI()



app.include_router(post.router)
app.include_router(auth.router)

@app.get("/")
async def root():
    return {"message": "Hello from backend"}
