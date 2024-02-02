from .database import Base
from sqlalchemy import Boolean,Column, ForeignKey,Integer,String,Text,ARRAY, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql.sqltypes import TIMESTAMP
from sqlalchemy.sql.expression import text


class User(Base):  # extend base
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, nullable=False)
    email = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)
    username = Column(String, nullable=False)
    role = Column(String, nullable=False)  # user - moderateur - admin
    dateNaissance = Column(String)
    gender = Column(String)
    created_at = Column(
        TIMESTAMP(timezone=True), nullable=False, server_default=text("now()")
    )


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
    created_at = Column(
        TIMESTAMP(timezone=True), nullable=False, server_default=text("now()")
    )
    # user_id = Column(Integer, ForeignKey("users.id"))
    # user = relationship("User", back_populates="articles_favoris")  # Updated relationship name

    def __repr__(self):
        return f"<Article {self.id}>"


# class Favoris(Base):
#     __tablename__ = "favoris"
#     user_id = Column(
#         Integer, ForeignKey("users.id", ondelete="CASCADE"), primary_key=True
#     )
#     article_id = Column(
#         Integer, ForeignKey("articles.id", ondelete="CASCADE"), primary_key=True
#     )

# class Post(Base):
#     __tablename__ = "posts"
#     id = Column(Integer, primary_key=True, nullable=False)
#     title = Column(String, nullable=False)
#     content = Column(String, nullable=False)
#     published = Column(Boolean, server_default="TRUE", nullable=False)
#     created_at = Column(
#         TIMESTAMP(timezone=True), nullable=False, server_default=text("now()")
#     )
#     owner_id = Column(
#         Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False
#     )
#     owner = relationship("User")
