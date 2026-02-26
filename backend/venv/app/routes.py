from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app import models, schemas, auth
from fastapi import HTTPException

router = APIRouter()

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
def login(user: schemas.UserLogin, db: Session = Depends(get_db)):
    # Find user in database
    db_user = db.query(models.User).filter(models.User.email == user.email).first()

    # Check if user exists
    if not db_user:
        raise HTTPException(status_code=400, detail="Invalid email or password")

    # Verify password
    if not auth.verify_password(user.password, db_user.password):
        raise HTTPException(status_code=400, detail="Invalid email or password")

    # Create JWT token
    access_token = auth.create_access_token(
        data={"sub": db_user.email}
    )

    # Return token
    return {
        "access_token": access_token,
        "token_type": "bearer"
    }