import { schema } from 'normalizr';
import { Sublevel } from './sublevels.model';

export class Menu {
    id: number;
    name: string;
    sublevels: [Sublevel];
}

export const menuSchema = new schema.Entity('menu');