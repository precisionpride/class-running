from fastapi import APIRouter, Depends, Response, HTTPException
from queries.grains_queries import (GrainItemIn,
                                    ItemRepository,
                                    GrainItemOut, Error)
from typing import Union, Optional, List
from authenticator import authenticator

router = APIRouter(tags=["Grains"], prefix="/api/grains")


@router.post("/grains", response_model=Union[GrainItemOut, Error])
def add_grain(item: GrainItemIn,  response: Response, account_data: dict =
              Depends(authenticator.get_current_account_data),
              repo: ItemRepository = Depends()):
    return repo.add_grain(item, account_id=account_data['id'])


@router.get("/grains/mine", response_model=Union[List[GrainItemOut], Error])
def get_all_grains(account_data: dict =
                   Depends(authenticator.get_current_account_data),
                   repo: ItemRepository = Depends()):
    return repo.get_all_grains(account_id=account_data['id'])


@router.put("/grains/{item_id}", response_model=Union[GrainItemOut, Error])
def update_grain(item_id: str, item: GrainItemIn, account_data: dict =
                 Depends(authenticator.get_current_account_data), repo:
                 ItemRepository = Depends()) -> Union[Error, GrainItemOut]:
    grain = repo.update_grain(item_id, account_data['id'], item)
    if grain is None:
        raise HTTPException(status_code=404, detail="beverage not found")
    return grain


@router.delete("/grains/{item_id}", response_model=bool)
def delete_grain(item_id: str, account_data: dict =
                 Depends(authenticator.get_current_account_data),
                 repo: ItemRepository = Depends()) -> bool:
    return repo.delete_grain(item_id, account_id=account_data['id'])


@router.get("/grains/{item_id}", response_model=Optional[GrainItemOut])
def get_grain(item_id: str, response: Response, account_data: dict =
              Depends(authenticator.get_current_account_data),
              repo: ItemRepository = Depends()) -> GrainItemOut:
    item = repo.get_grain(item_id, account_id=account_data['id'])
    if item is None:
        response.status_code = 404
    return item
