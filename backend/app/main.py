from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.connection import Base, engine
from app.models import contact
from app.routers.contact import router as contact_router


app = FastAPI(
    title="Anji Reddy Portfolio API",
    description="Backend API for the portfolio website",
    version="1.0.0"
)


# Create database tables
Base.metadata.create_all(bind=engine)


# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://anjireddytech.netlify.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register contact router
app.include_router(contact_router)


@app.get("/")
def root():
    return {
        "message": "Portfolio API is running"
    }