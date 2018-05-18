import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { TrendyComponent } from './trendy/trendy.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'trendy', component: TrendyComponent },
  { path: 'newproduct', component: NewproductComponent },
  { path: 'productdetail/:id', component: ProductdetailComponent },
  { path: 'editproduct/:id', component: EditproductComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
