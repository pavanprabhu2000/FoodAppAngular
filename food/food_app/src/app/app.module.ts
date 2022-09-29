import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule } from '@angular/router';
import { ViewFoodProductComponent } from './FoodProduct/view-food-product/view-food-product.component';
import { AddFoodProductComponent } from './FoodProduct/add-food-product/add-food-product.component';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AddFoodProductComponent,
    ViewFoodProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
