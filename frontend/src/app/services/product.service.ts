import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_products, sample_tags } from '../data';
import { Product } from '../shared/models/Product';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAll():Product[]{
    return sample_products;
  }


  getAllProductsBySearchTerm(searchTerm: string) {
    return this.getAll().filter(product => product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

  getAllTags(): Tag[]{
    return sample_tags;
  }

  getAllProductsByTag(tag: string):Product[] {
    return tag == "All"?
    this.getAll():
    this.getAll().filter(product => product.tags?.includes(tag));
  }

  // getFoodById(productId:string):Observable<Product>{
  //   return this.http.get<Product>(FOOD_BY_ID_URL + foodId);
  // }
}
