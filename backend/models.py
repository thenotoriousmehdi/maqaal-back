from database import Base
from sqlalchemy import Column,Integer,Boolean,Text,String,ForeignKey,DateTime,ARRAY
from sqlalchemy.orm import relationship
from sqlalchemy_utils.types import ChoiceType
from sqlalchemy.sql import func
 
from datetime import datetime

 
class User(Base):
    USER_ROLE = (
        ('REGULAR', 'regular'),
        ('ADMIN', 'admin'),
    )

    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    fullname = Column(String(25))
    gender = Column(Boolean)
    date_of_birth = Column(DateTime)
    email = Column(String(80), unique=True)
    username = Column(String(25))
    password = Column(String)   
    role = Column(ChoiceType(choices=USER_ROLE), default="regular")
    created_at = Column(DateTime, default=func.now())
    articles = relationship("Article", back_populates="user")  # Updated relationship name

    def __repr__(self):
        return f"<User {self.username}>"


class Article(Base):
    __tablename__ = "articles"

    id = Column(Integer, primary_key=True)
    title = Column(String(255))
    summary = Column(String(500))
    authors = Column(ARRAY(String(255)))
    institutions = Column(ARRAY(String(255)))
    keywords = Column(String(255))
    full_text_content = Column(Text)
    pdf_url = Column(String(255))
    bibliography_reference = Column(String(500))
    created_at = Column(DateTime, default=func.now())
    user_id = Column(Integer, ForeignKey("users.id"))
    user = relationship("User", back_populates="articles")  # Updated relationship name

    def __repr__(self):
        return f"<Article {self.id}>"
    



    """ class User(Base):
    __tablename__='user'
    id=Column(Integer,primary_key=True)
    username=Column(String(25),unique=True)
    email=Column(String(80),unique=True)
    password=Column(Text,nullable=True)
    is_staff=Column(Boolean,default=False)
    is_active=Column(Boolean,default=False)
     

    def __repr__(self):
        return f"<User {self.username}"
 """


""" class Article(Base):
    __tablename__ = "articles"

    _id = Column(Integer, primary_key=True)
    title = Column(String(255))
    summary = Column(String(500))
    authors = Column(ARRAY(String(255)))
    institutions = Column(ARRAY(String(255)))
    keywords = Column(String(255))
    full_text_content = Column(Text)
    pdf_url = Column(String(255))
    bibliography_reference = Column(String(500))
    created_at = Column(DateTime, default=func.now())
    user_id = Column(Integer, ForeignKey("users._id"))
    
    def __repr__(self):
        return f"<Article {self._id}>" """