import * as MenuActions from '../actions/app.actions';
import { Menu } from '../../models/menu.model';
import { MenuState, MenuListState,initializeMenuState } from '../states/menu.state';

export type Action = MenuActions.All;

const defaultMenuStates: MenuState[] = [
  {
      ...Menu.generateMockMenu(),
      ...initializeMenuState()
  }
]

const defaultState: MenuListState = {
  menu: defaultMenuStates,
  loading: false,
  pending: 0
}

export function MenuReducer(state = defaultState, action: Action) {
  console.log(state, action);

  switch (action.type) {
    case MenuActions.FETCH_MENU_REQUEST:
    return { 
      ...state, 
      loaded: false, 
      loading: true 
    };

    case MenuActions.FETCH_MENU_SUCCESS:
      return{
        ...state,
        menu: [
          ...action.payload,
          defaultMenuStates[0]
        ],
        loading: false
      };
  }
}
