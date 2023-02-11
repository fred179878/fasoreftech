import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  product!: Product;

  constructor(private productService:ProductService, activatedRoute: ActivatedRoute, private cartService:CartService, private router: Router){
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      this.products = this.productService.getAllProductsBySearchTerm(params.searchTerm);
      else if(params.tag)
      this.products = this.productService.getAllProductsByTag(params.tag);
      else if(params.id)
      this.product = productService.getProductById(params.Id);
      else
      this.products = productService.getAll();

    })

  }

  ngOnInit(): void{

  }

  addToCart(){
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart-page');
  }

}
