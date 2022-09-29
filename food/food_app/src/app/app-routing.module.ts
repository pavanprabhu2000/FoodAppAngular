import { AddFoodProductComponent } from './FoodProduct/add-food-product/add-food-product.component';
import { ViewFoodProductComponent } from './FoodProduct/view-food-product/view-food-product.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'foodproducts', component:ViewFoodProductComponent},
  {path: 'foodproducts/add', component:AddFoodProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
