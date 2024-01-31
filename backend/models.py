from database import Base
from sqlalchemy import Column,Integer,Boolean,Text,String,ForeignKey,DateTime,ARRAY
from sqlalchemy.orm import relationship
from sqlalchemy_utils.types import ChoiceType
from sqlalchemy.sql import func
 
from datetime import datetime

 
class User(Base):
    USER_ROLE = (
        ('REGULAR', 'regular'),
        ('MODO', 'modo'),
        ('ADMIN', 'admin'),
    )

    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    fullname = Column(String(25))
    gender = Column(Boolean,default=True)
    date_of_birth = Column(DateTime)
    email = Column(String(80), unique=True)
    username = Column(String(25),unique=True)
    password = Column(Text,nullable=True)   
    role = Column(ChoiceType(choices=USER_ROLE), default="REGULAR")
    created_at = Column(DateTime, default=func.now())
    articles_favoris = relationship("Article", back_populates="user")   

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
    user = relationship("User", back_populates="articles_favoris")  # Updated relationship name

    def __repr__(self):
        return f"<Article {self.id}>"
    