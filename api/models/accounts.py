from pydantic import BaseModel
from jwtdown_fastapi.authentication import Token
from bson.objectid import ObjectId


class PydanticObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate


@classmethod
def validate(cls, value: ObjectId | str) -> ObjectId:
    if value:
        try:
            ObjectId(value)
        except ValueError:
            raise ValueError(f"Not a valid object id: {value}")
    return value


class DuplicateAccountError(ValueError):
    pass


class AccountIn(BaseModel):
    username: str
    password: str


class AccountForm(BaseModel):
    username: str
    password: str


class AccountOut(BaseModel):
    id: str
    username: str


class Account(AccountOut):
    hashed_password: str


class AccountToken(Token):
    account: AccountOut


class HttpError(BaseModel):
    detail: str
