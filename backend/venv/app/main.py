from fastapi import FastAPI
from app.database import engine
from app import models
from app.routes import router

models.Base.metadata.create_all(bind=engine)

# creates application instance receives requests, sends responses and handles routes.
app = FastAPI() 

#includes the router from routes.py to the main application instance. Without this no endpoints will work.
app.include_router(router)