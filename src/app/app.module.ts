import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import {Angular2PromiseButtonModule} from 'angular2-promise-buttons/dist';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './/app-routing.module';
import { TrendyComponent } from './trendy/trendy.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    TrendyComponent,
    ProductdetailComponent,
    NewproductComponent,
    EditproductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    Angular2PromiseButtonModule.forRoot(),
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
