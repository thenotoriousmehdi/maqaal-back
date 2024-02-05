from datetime import datetime
from typing import Optional
from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    email: EmailStr
    password: str
    username: str
    role: str
    dateNaissance: str
    gender: str


class UserOut(BaseModel):
    id: int
    email: EmailStr
    username: str
    role: str
    dateNaissance: str
    gender: str
    created_at: datetime

    class Config:
        orm_mode = True


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    id: Optional[str] = None


class UserUpdate(BaseModel):
    email: Optional[EmailStr]
    username: Optional[str]
    password: Optional[str]


# Response model hbb

"""
class PostBase(BaseModel):
    title: str
    content: str
    published: bool = True


class PostCreate(PostBase):
    pass



class Post(PostBase):
    id: int
    created_at: datetime
    owner_id: int
    owner: UserOut

    class Config:
        orm_mode = True
"""
