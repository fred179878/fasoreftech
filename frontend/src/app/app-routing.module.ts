import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';

const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'search/:searchTerm', component : HomeComponent},
  {path:'tag/:tag', component: HomeComponent},
  {path:'product/:id', component: ProductPageComponent},
  {path:'cart-page', component: CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
