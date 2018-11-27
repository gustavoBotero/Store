import { Menu } from "./../../models/menu.model";

export enum MenuActionTypes {

    FetchMenuRequest = '[Menu] Load Menu request',
    FetchMenuSuccess = '[Menu] Load Menu success',
    FetchMenuFailure = '[Menu] Load Menu failure',

}

export class FetchMenuRequest implements Request {
    readonly type = MenuActionTypes.FetchMenuRequest;
}

export class FetchMenuSuccess implements Success {
    readonly type = MenuActionTypes.FetchMenuSuccess;
    constructor(public payload: PaginatedResponse) { }
}

export class FetchMenuFailure implements Failure {
    readonly type = MenuActionTypes.FetchMenuFailure;
    constructor(public payload: string) { }
}