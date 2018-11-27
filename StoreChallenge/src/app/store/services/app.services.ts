import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

@Injectable({
    providedIn: 'root',
})
export class MenuService {

    constructor(private store: Store<State>) {
    }
  
    loadMenu() {
        this.store.dispatch(new FetchMenuRequest());
    }
}