import { MenuState } from '../states/menu.state';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { map, mergeMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of } from 'rxjs';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as MenuActions from '../actions/app.actions';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenuEffects {

  constructor(
    private http: HttpClient,
    private actions$: Actions
  ) { }

  @Effect()
  GetTodos$: Observable<Action> = this.actions$.
    ofType<MenuActions.FetchMenuRequest>(MenuActions.FETCH_MENU_REQUEST)
    .mergeMap(action =>
      this.http.get('')
        .map((data: Response) => {

          console.log(data);
          return new MenuActions.FetchMenuSuccess(data["data"]["docs"] as MenuState[]);
        })
        .catch(() => of(new MenuActions.FetchMenuFailure()))
    );
  
}