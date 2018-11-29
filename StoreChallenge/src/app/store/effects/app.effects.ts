import { MenuState } from '../states/menu.state';
import { environment } from '../../../environments/environment';

import { map, mergeMap, catchError } from 'rxjs/operators';

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
  FetchMenuRequest$: Observable<Action> = this.actions$.
    ofType<MenuActions.FetchMenuRequest>(MenuActions.FETCH_MENU_REQUEST)
    .pipe(action =>
      this.http.get('assets/categories.json'),
        map((data: Response) => {

          console.log(data);
          return new MenuActions.FetchMenuSuccess(data["categories"] as MenuState[]);
        }),
        catchError(() => of(new MenuActions.FetchMenuFailure()))
    );
  
}