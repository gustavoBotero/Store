import { Menu } from "./../../models/menu.model";
import { Action } from "@ngrx/store";
import { MenuState } from "../states/menu.state";
import { map, mergeMap } from 'rxjs/operators';

export const FETCH_MENU_REQUEST = '[Menu] Load Menu request';
export const FETCH_MENU_SUCCESS = '[Menu] Load Menu success';
export const FETCH_MENU_FAILURE = '[Menu] Load Menu failure';


export class FetchMenuRequest implements Action {
    readonly type = FETCH_MENU_REQUEST;
}

export class FetchMenuSuccess implements Action {
    readonly type = FETCH_MENU_SUCCESS;
    constructor(public payload: MenuState[]) { }
}

export class FetchMenuFailure implements Action {
    readonly type = FETCH_MENU_FAILURE;
}

export type All =
  FetchMenuRequest |
  FetchMenuSuccess |
  FetchMenuFailure;