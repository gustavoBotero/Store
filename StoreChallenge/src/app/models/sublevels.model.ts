import { schema } from 'normalizr';
import { Menu, menuSchema } from './menu.model';

export class Sublevel {
    id: number;
    name: string;
    sublevels: [Sublevel];
}

export const sublevelSchema = new schema.Entity(
  'sublevelSchema',
  {
    agent: menuSchema,
  },
  { idAttribute: 'menu_id' }
);