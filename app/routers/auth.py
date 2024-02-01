from fastapi import APIRouter, Depends, status, HTTPException, Response
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from .. import database, oauth2, schemas, models, utils

router = APIRouter(tags=["Authentification"])
# router = APIRouter(prefix="/users", tags=["Users"])


@router.get("/users/me", response_model=schemas.UserOut)
async def get_user(
    db: Session = Depends(database.get_db),
    current_user: int = Depends(oauth2.get_current_user),
):
    return current_user


@router.post("/login", response_model=schemas.Token)
def login(
    user_credentials: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(database.get_db),
):
    user = (
        db.query(models.User)
        .filter(models.User.email == user_credentials.username)
        .first()
    )
    if not user:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail=f"Invalid Credentials"
        )

    if not utils.verify(user_credentials.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail=f"Invalid Credentials"
        )

    access_token = oauth2.create_access_token(data={"user_id": user.id})
    return {"access_token": access_token, "token_type": "bearer"}


@router.post(
    "/signup", status_code=status.HTTP_201_CREATED, response_model=schemas.Token
)
def create_user(user: schemas.UserCreate, db: Session = Depends(database.get_db)):
    # hash the password - user.password
    print(user)
    hashed_password = utils.hash(user.password)
    user.password = hashed_password

    new_user = models.User(**user.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    access_token = oauth2.create_access_token(data={"user_id": new_user.id})
    return {"access_token": access_token, "token_type": "bearer"}


# @router.get("/{id}", response_model=schemas.UserOut)
# def getUser(id: int, db: Session = Depends(database.get_db)):
#     user = db.query(models.User).filter(models.User.id == id).first()

#     if not user:
#         raise HTTPException(
#             status_code=status.HTTP_404_NOT_FOUND,
#             detail=f"User with id {id} does not exist",
#         )
#     return user
