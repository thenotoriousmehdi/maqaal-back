from pydantic import BaseModel
from typing import Optional

class SignUpModel(BaseModel):
    id:Optional[int]
    username:str
    email:str
    password:str
    is_staff:Optional[bool]
    is_active:Optional[bool]

    class Config:
        orm_mode=True
        schema_extra={
            'example':{
                "username":"newUser",
		        "email":"nexUser@gmail.com",
		        "password":"passNEwUSER",
		        "is_staff":True,
		        "is_active":False
            }
        }

class Settings(BaseModel):
    authjwt_secret_key:str='b4bb9013c1c03b29b9311ec0df07f3b0d8fd13edd02d5c45b2fa7b86341fa405'


class LoginModel(BaseModel):
    username:str
    password:str

class VerifyTokenModel(BaseModel):
    currentToken:str
     
   
 