import { Product } from "./app/shared/models/Product";
import { Tag } from "./app/shared/models/Tag";

export const sample_products: Product[] = [
  {
    id:'1',
    name: 'Ecouteurs JBL',
    price: 1000,
    favorite: false,
    stars: 4.5,
    imageUrl: 'assets/ecouteursjbl.jpg',
    tags: ['Accessoire', 'Téléphone']
  },
  {
    id:'2',
    name: 'Boom player',
    price: 200000,
    favorite: true,
    stars: 4.7,
    imageUrl: 'assets/boom.jpg',
    tags: ['Enceinte', 'Musique']
  }

]

export const sample_tags:Tag[] = [
  { name: 'All', count: 6 },
  { name: 'Enceinte', count: 4 },
  { name: 'Accessoire', count: 2 }

]
