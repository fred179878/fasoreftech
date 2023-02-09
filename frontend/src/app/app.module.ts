import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';

import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { CarrouselComponent } from './components/partials/carrousel/carrousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CarrouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

    // RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
