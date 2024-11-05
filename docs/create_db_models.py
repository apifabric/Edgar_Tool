# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

Base = declarative_base()

class FormType(Base):
    """description: This table stores different form types that can be queried from the EDGAR database."""
    __tablename__ = 'form_type'
    id = Column(Integer, primary_key=True, autoincrement=True)
    form_code = Column(String, nullable=False, unique=True)  # e.g., '10-K', '8-K'
    description = Column(String, nullable=True)

class Filing(Base):
    """description: Represents a single filing record as returned from the EDGAR API."""
    __tablename__ = 'filing'
    id = Column(Integer, primary_key=True, autoincrement=True)
    accession_number = Column(String, nullable=False, unique=True)  # Unique identifier from EDGAR
    form_type_id = Column(Integer, ForeignKey('form_type.id'), nullable=False)
    company_id = Column(Integer, ForeignKey('company.id'), nullable=False)
    date_filed = Column(DateTime, nullable=False, default=datetime.datetime.utcnow)

class Company(Base):
    """description: Stores information about companies whose filings are tracked."""
    __tablename__ = 'company'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    cik = Column(String, nullable=False, unique=True)  # Central Index Key

class FilingItem(Base):
    """description: This table holds individual items within a filing, often part of detailed disclosures."""
    __tablename__ = 'filing_item'
    id = Column(Integer, primary_key=True, autoincrement=True)
    filing_id = Column(Integer, ForeignKey('filing.id'), nullable=False)
    item_sequence = Column(Integer, nullable=False)
    content = Column(Text, nullable=True)

class FilingDocument(Base):
    """description: Represents documents associated with a filing, such as attachments or exhibits."""
    __tablename__ = 'filing_document'
    id = Column(Integer, primary_key=True, autoincrement=True)
    filing_id = Column(Integer, ForeignKey('filing.id'), nullable=False)
    document_title = Column(String, nullable=False)
    document_url = Column(String, nullable=False)

class User(Base):
    """description: Table to store users who interact with the system, potentially querying filings."""
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    password_hash = Column(String, nullable=False)

class UserQuery(Base):
    """description: Logs queries made by users, storing their preferences for easy reuse."""
    __tablename__ = 'user_query'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    form_type_id = Column(Integer, ForeignKey('form_type.id'))
    date_created = Column(DateTime, nullable=False, default=datetime.datetime.utcnow)

class CompanySector(Base):
    """description: Defines sectors to which companies belong, providing industry categorization."""
    __tablename__ = 'company_sector'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False, unique=True)

class CompanySectorLink(Base):
    """description: Links companies to their respective sectors."""
    __tablename__ = 'company_sector_link'
    id = Column(Integer, primary_key=True, autoincrement=True)
    company_id = Column(Integer, ForeignKey('company.id'), nullable=False)
    sector_id = Column(Integer, ForeignKey('company_sector.id'), nullable=False)

class FilingDateLog(Base):
    """description: Stores logs of filing retrieval dates, useful for tracking updates."""
    __tablename__ = 'filing_date_log'
    id = Column(Integer, primary_key=True, autoincrement=True)
    filing_id = Column(Integer, ForeignKey('filing.id'), nullable=False)
    retrieval_date = Column(DateTime, nullable=False, default=datetime.datetime.utcnow)

class UserBookmark(Base):
    """description: Allows users to bookmark specific filings for quick access later."""
    __tablename__ = 'user_bookmark'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    filing_id = Column(Integer, ForeignKey('filing.id'), nullable=False)

class NotificationLog(Base):
    """description: Keeps track of notifications sent to users, particularly concerning new filings or changes."""
    __tablename__ = 'notification_log'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    filing_id = Column(Integer, ForeignKey('filing.id'))
    notification_date = Column(DateTime, nullable=False, default=datetime.datetime.utcnow)
    message = Column(Text, nullable=True)

# Create an SQLite database and initialize the schema
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Create a new session
Session = sessionmaker(bind=engine)
session = Session()

# Insert sample data
form_types = [
    FormType(form_code='10-K', description='Annual report'),
    FormType(form_code='8-K', description='Current report')
]

filings = [
    Filing(accession_number='0001067983-13-000010', form_type_id=1, company_id=1, date_filed=datetime.datetime(2023, 10, 6)),
    Filing(accession_number='0001067996-20-000012', form_type_id=2, company_id=2, date_filed=datetime.datetime(2023, 9, 25))
]

companies = [
    Company(name='ABC Corp', cik='0001067983'),
    Company(name='XYZ Inc', cik='0001067996')
]

filing_items = [
    FilingItem(filing_id=1, item_sequence=1, content='Quarterly Results...'),
    FilingItem(filing_id=2, item_sequence=2, content='Annual Growth...')
]

filing_documents = [
    FilingDocument(filing_id=1, document_title='2023 Annual Report', document_url='http://example.com/10k2023.pdf'),
    FilingDocument(filing_id=2, document_title='Press Release', document_url='http://example.com/8k2023.pdf')
]

users = [
    User(username='user1', email='user1@example.com', password_hash='hash1'),
    User(username='user2', email='user2@example.com', password_hash='hash2')
]

user_queries = [
    UserQuery(user_id=1, form_type_id=1),
    UserQuery(user_id=2, form_type_id=2)
]

company_sectors = [
    CompanySector(name='Financials'),
    CompanySector(name='Healthcare')
]

company_sector_links = [
    CompanySectorLink(company_id=1, sector_id=1),
    CompanySectorLink(company_id=2, sector_id=2)
]

filing_date_logs = [
    FilingDateLog(filing_id=1, retrieval_date=datetime.datetime(2023, 10, 10)),
    FilingDateLog(filing_id=2, retrieval_date=datetime.datetime(2023, 9, 30))
]

user_bookmarks = [
    UserBookmark(user_id=1, filing_id=1),
    UserBookmark(user_id=2, filing_id=2)
]

notification_logs = [
    NotificationLog(user_id=1, filing_id=1, notification_date=datetime.datetime(2023, 10, 12), message='New filing available for ABC Corp.'),
    NotificationLog(user_id=2, filing_id=2, notification_date=datetime.datetime(2023, 9, 28), message='XYZ Inc. filed a new 8-K report.')
]

# Add and commit the data
all_data = form_types + filings + companies + filing_items + filing_documents + users + user_queries + \
           company_sectors + company_sector_links + filing_date_logs + user_bookmarks + notification_logs

session.add_all(all_data)
session.commit()
session.close()
