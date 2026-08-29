import os
import smtplib
from email.message import EmailMessage

from dotenv import load_dotenv


load_dotenv()


SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587

MAIL_USERNAME = os.getenv("MAIL_USERNAME")
MAIL_PASSWORD = os.getenv("MAIL_PASSWORD")
MAIL_FROM = os.getenv("MAIL_FROM")
MAIL_TO = os.getenv("MAIL_TO")


def send_contact_email(
    name: str,
    email: str,
    mobile: str,
    message: str,
):
    try:
        email_message = EmailMessage()

        email_message["Subject"] = (
            f"New Portfolio Contact Message from {name}"
        )

        email_message["From"] = MAIL_FROM
        email_message["To"] = MAIL_TO
        email_message["Reply-To"] = email

        email_message.set_content(
            f"""
You received a new message from your portfolio website.

Name:
{name}

Email:
{email}

Mobile:
{mobile}

Message:
{message}

-----------------------------------
Portfolio Contact Form
"""
        )

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()

            server.login(
                MAIL_USERNAME,
                MAIL_PASSWORD,
            )

            server.send_message(email_message)

        print("Contact email sent successfully.")

    except Exception as error:
        print(f"Failed to send contact email: {error}")