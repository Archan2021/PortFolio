from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app import models, schemas, auth
from fastapi import HTTPException
from fastapi.security import OAuth2PasswordBearer
from fastapi.security import OAuth2PasswordRequestForm

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")



def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/signup")
def signup(user: schemas.UserCreate, db: Session = Depends(get_db)):
    hashed_password = auth.hash_password(user.password)

    db_user = models.User(
        first_name=user.first_name,
        last_name=user.last_name,
        phone=user.phone,
        job_role=user.job_role,
        company_name=user.company_name,
        email=user.email,
        password=hashed_password
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return {"message": "User created"}
@router.post("/login")
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    db_user = db.query(models.User).filter(
        models.User.email == form_data.username.lower()
    ).first()

    if not db_user:
        raise HTTPException(status_code=400, detail="Invalid credentials")

    if not auth.verify_password(form_data.password, db_user.password):
        raise HTTPException(status_code=400, detail="Invalid credentials")

    access_token = auth.create_access_token(
        data={"sub": db_user.email}
    )

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }
    
def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
):
    email = auth.verify_access_token(token)

    user = db.query(models.User).filter(
        models.User.email == email
    ).first()

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found"
        )

    return user

@router.get("/profile")
def get_profile(current_user: models.User = Depends(get_current_user)):
    return {
        "first_name": current_user.first_name,
        "last_name": current_user.last_name,
        "email": current_user.email,
        "phone": current_user.phone,
        "job_role": current_user.job_role,
        "company_name": current_user.company_name
    }