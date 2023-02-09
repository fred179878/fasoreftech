import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_products } from '../data';
import { Product } from '../shared/models/product';

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

  // getAllTags(): Observable<Tag[]> {
  //   return this.http.get<Tag[]>(FOODS_TAGS_URL);
  // }

  // getAllFoodsByTag(tag: string): Observable<Product[]> {
  //   return tag === "All" ?
  //     this.getAll() :
  //     this.http.get<Product[]>(FOODS_BY_TAG_URL + tag);
  // }

  // getFoodById(productId:string):Observable<Product>{
  //   return this.http.get<Product>(FOOD_BY_ID_URL + foodId);
  // }
}
