import { Component, OnInit } from '@angular/core';
import { MenuListState, MenuState } from '../../store/states/menu.state';
import * as MenuAction from '../../store/actions/app.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

export interface AppState {

  menu: MenuListState;

}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private store: Store<MenuListState>) { }

  menuListState$: Observable<MenuState[]>;

  ngOnInit() {
    this.menuListState$ = this.store.select(state => state.menu);
    
    this.store.dispatch(new MenuAction.FetchMenuRequest());
  }

  openMap = {
    sub1: true,
    sub2: false,
    sub3: false
  };

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[ key ] = false;
      }
    }
  }

}
