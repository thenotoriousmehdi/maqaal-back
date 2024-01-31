from database import engine,Base
from models import User,Article


Base.metadata.create_all(bind=engine)
