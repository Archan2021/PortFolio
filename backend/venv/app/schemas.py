from pydantic import BaseModel, EmailStr, constr

class UserCreate(BaseModel):
    first_name: str
    last_name: str
    phone: constr(min_length=10, max_length=15)
    job_role: str
    company_name: str
    email: EmailStr
    password: constr(min_length=6)

class UserLogin(BaseModel):
    email: EmailStr
    password: str