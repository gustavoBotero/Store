import { Menu } from '../../models/menu.model';

export interface MenuState extends Menu{
    loading:boolean;

    refreshing:boolean;

    error: boolean;
}

export  const initializeMenuState  = function() {
    return {
        loading: false,
 
        refreshing:false,
        
        error: false,
    }
}

export interface MenuListState{
    menu: MenuState[];
    loading: boolean;
    pending: number;
}

export const  intializeMenuListState = function(){
    return {
        loading: false,
        pending: 0,
    }
}