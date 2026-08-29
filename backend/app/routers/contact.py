from fastapi import APIRouter, BackgroundTasks, Depends
from sqlalchemy.orm import Session

from app.database.connection import get_db
from app.models.contact import ContactMessage
from app.schemas.contact import (
    ContactMessageCreate,
    ContactMessageResponse,
)
from app.services.email_service import send_contact_email


router = APIRouter(
    prefix="/api/contact",
    tags=["Contact"],
)


@router.post(
    "",
    response_model=ContactMessageResponse,
)
def create_contact_message(
    contact: ContactMessageCreate,
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db),
):
    # Save message to MySQL
    new_message = ContactMessage(
        name=contact.name,
        email=contact.email,
        mobile=contact.mobile,
        message=contact.message,
    )

    db.add(new_message)
    db.commit()
    db.refresh(new_message)

    # Send email notification in background
    background_tasks.add_task(
        send_contact_email,
        contact.name,
        contact.email,
        contact.mobile,
        contact.message,
    )

    return {
        "message": "Message sent successfully",
    }