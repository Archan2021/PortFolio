from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "sqlite:///./portfolio.db"

# creates database engine that will be used to connect to the database. The connect_args={"check_same_thread": False} is required for SQLite to allow multiple threads to access the database.
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

# Every request gets its own DB session.
SessionLocal = sessionmaker(bind=engine)

# Base class for models. Every table class inherits from Base. SQLAlchemy uses this to track metadata.
Base = declarative_base()