import { schema } from 'normalizr';
import { Sublevel } from './sublevels.model';

export class Menu {
    id: number;
    name: string;
    sublevels: [Menu];


    constructor(
    ) {
        this.id = 0
        this.name = ""
        this.sublevels = [null]
    }

    static generateMockMenu(): Menu {
        return {
            _id: 0,
            name: "",
            sublevels: []
        }
    }
}