from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class SignUpModel(BaseModel):

    id:Optional[int]
    fullname:str
    username:str
    gender:Optional[bool]
    date_of_birth:Optional[datetime]
    email:str
    password:str
    role:Optional[str]
     

    class Config:
        orm_mode=True
        schema_extra={
            'example':{
                "fullname":"newUser_fullname",
                "username":"newUser",
		        "email":"nexUser@gmail.com",
		        "password":"passNEwUSER",
            }
        }

        
""" 
class FileUploadSchema(BaseModel):
    file_url:str

  """
   
 