from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base,sessionmaker

#database name is sensitive to blank space
engine=create_engine('postgresql://postgres:<...>@localhost/<...>',
    echo=True
)

Base=declarative_base()
Session=sessionmaker()



