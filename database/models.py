# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 05, 2024 21:26:21
# Database: sqlite:////tmp/tmp.CDCQo6PVVG/Edgar_Tool/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Company(SAFRSBaseX, Base):
    """
    description: Stores information about companies whose filings are tracked.
    """
    __tablename__ = 'company'
    _s_collection_name = 'Company'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    cik = Column(String, nullable=False, unique=True)

    # parent relationships (access parent)

    # child relationships (access children)
    CompanySectorLinkList : Mapped[List["CompanySectorLink"]] = relationship(back_populates="company")
    FilingList : Mapped[List["Filing"]] = relationship(back_populates="company")



class CompanySector(SAFRSBaseX, Base):
    """
    description: Defines sectors to which companies belong, providing industry categorization.
    """
    __tablename__ = 'company_sector'
    _s_collection_name = 'CompanySector'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False, unique=True)

    # parent relationships (access parent)

    # child relationships (access children)
    CompanySectorLinkList : Mapped[List["CompanySectorLink"]] = relationship(back_populates="sector")



class FormType(SAFRSBaseX, Base):
    """
    description: This table stores different form types that can be queried from the EDGAR database.
    """
    __tablename__ = 'form_type'
    _s_collection_name = 'FormType'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    form_code = Column(String, nullable=False, unique=True)
    description = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    FilingList : Mapped[List["Filing"]] = relationship(back_populates="form_type")
    UserQueryList : Mapped[List["UserQuery"]] = relationship(back_populates="form_type")



class User(SAFRSBaseX, Base):
    """
    description: Table to store users who interact with the system, potentially querying filings.
    """
    __tablename__ = 'user'
    _s_collection_name = 'User'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    password_hash = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    UserQueryList : Mapped[List["UserQuery"]] = relationship(back_populates="user")
    NotificationLogList : Mapped[List["NotificationLog"]] = relationship(back_populates="user")
    UserBookmarkList : Mapped[List["UserBookmark"]] = relationship(back_populates="user")



class CompanySectorLink(SAFRSBaseX, Base):
    """
    description: Links companies to their respective sectors.
    """
    __tablename__ = 'company_sector_link'
    _s_collection_name = 'CompanySectorLink'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    company_id = Column(ForeignKey('company.id'), nullable=False)
    sector_id = Column(ForeignKey('company_sector.id'), nullable=False)

    # parent relationships (access parent)
    company : Mapped["Company"] = relationship(back_populates=("CompanySectorLinkList"))
    sector : Mapped["CompanySector"] = relationship(back_populates=("CompanySectorLinkList"))

    # child relationships (access children)



class Filing(SAFRSBaseX, Base):
    """
    description: Represents a single filing record as returned from the EDGAR API.
    """
    __tablename__ = 'filing'
    _s_collection_name = 'Filing'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    accession_number = Column(String, nullable=False, unique=True)
    form_type_id = Column(ForeignKey('form_type.id'), nullable=False)
    company_id = Column(ForeignKey('company.id'), nullable=False)
    date_filed = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    company : Mapped["Company"] = relationship(back_populates=("FilingList"))
    form_type : Mapped["FormType"] = relationship(back_populates=("FilingList"))

    # child relationships (access children)
    FilingDateLogList : Mapped[List["FilingDateLog"]] = relationship(back_populates="filing")
    FilingDocumentList : Mapped[List["FilingDocument"]] = relationship(back_populates="filing")
    FilingItemList : Mapped[List["FilingItem"]] = relationship(back_populates="filing")
    NotificationLogList : Mapped[List["NotificationLog"]] = relationship(back_populates="filing")
    UserBookmarkList : Mapped[List["UserBookmark"]] = relationship(back_populates="filing")



class UserQuery(SAFRSBaseX, Base):
    """
    description: Logs queries made by users, storing their preferences for easy reuse.
    """
    __tablename__ = 'user_query'
    _s_collection_name = 'UserQuery'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    form_type_id = Column(ForeignKey('form_type.id'))
    date_created = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    form_type : Mapped["FormType"] = relationship(back_populates=("UserQueryList"))
    user : Mapped["User"] = relationship(back_populates=("UserQueryList"))

    # child relationships (access children)



class FilingDateLog(SAFRSBaseX, Base):
    """
    description: Stores logs of filing retrieval dates, useful for tracking updates.
    """
    __tablename__ = 'filing_date_log'
    _s_collection_name = 'FilingDateLog'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    filing_id = Column(ForeignKey('filing.id'), nullable=False)
    retrieval_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    filing : Mapped["Filing"] = relationship(back_populates=("FilingDateLogList"))

    # child relationships (access children)



class FilingDocument(SAFRSBaseX, Base):
    """
    description: Represents documents associated with a filing, such as attachments or exhibits.
    """
    __tablename__ = 'filing_document'
    _s_collection_name = 'FilingDocument'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    filing_id = Column(ForeignKey('filing.id'), nullable=False)
    document_title = Column(String, nullable=False)
    document_url = Column(String, nullable=False)

    # parent relationships (access parent)
    filing : Mapped["Filing"] = relationship(back_populates=("FilingDocumentList"))

    # child relationships (access children)



class FilingItem(SAFRSBaseX, Base):
    """
    description: This table holds individual items within a filing, often part of detailed disclosures.
    """
    __tablename__ = 'filing_item'
    _s_collection_name = 'FilingItem'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    filing_id = Column(ForeignKey('filing.id'), nullable=False)
    item_sequence = Column(Integer, nullable=False)
    content = Column(Text)

    # parent relationships (access parent)
    filing : Mapped["Filing"] = relationship(back_populates=("FilingItemList"))

    # child relationships (access children)



class NotificationLog(SAFRSBaseX, Base):
    """
    description: Keeps track of notifications sent to users, particularly concerning new filings or changes.
    """
    __tablename__ = 'notification_log'
    _s_collection_name = 'NotificationLog'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    filing_id = Column(ForeignKey('filing.id'))
    notification_date = Column(DateTime, nullable=False)
    message = Column(Text)

    # parent relationships (access parent)
    filing : Mapped["Filing"] = relationship(back_populates=("NotificationLogList"))
    user : Mapped["User"] = relationship(back_populates=("NotificationLogList"))

    # child relationships (access children)



class UserBookmark(SAFRSBaseX, Base):
    """
    description: Allows users to bookmark specific filings for quick access later.
    """
    __tablename__ = 'user_bookmark'
    _s_collection_name = 'UserBookmark'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    filing_id = Column(ForeignKey('filing.id'), nullable=False)

    # parent relationships (access parent)
    filing : Mapped["Filing"] = relationship(back_populates=("UserBookmarkList"))
    user : Mapped["User"] = relationship(back_populates=("UserBookmarkList"))

    # child relationships (access children)
