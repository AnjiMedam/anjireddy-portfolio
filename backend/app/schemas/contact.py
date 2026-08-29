from pydantic import BaseModel, EmailStr, Field


class ContactMessageCreate(BaseModel):
    name: str = Field(
        ...,
        min_length=2,
        max_length=100
    )

    email: EmailStr

    mobile: str = Field(
        ...,
        pattern=r"^[6-9][0-9]{9}$"
    )

    message: str = Field(
        ...,
        min_length=5,
        max_length=2000
    )


class ContactMessageResponse(BaseModel):
    message: str