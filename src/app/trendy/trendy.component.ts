import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { ProductService } from './../services/product.service';
import Product from './../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trendy',
  templateUrl: './trendy.component.html',
  styleUrls: ['./trendy.component.css']
})
export class TrendyComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private http: Http
  ) { }

  selectedProduct: Product;

  onSelect(product: Product): void {
    this.selectedProduct = product;
    console.log(product._id);
  }

  public newProduct: Product = new Product()
  productsList: Product[];

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(products => {
        //assign the todolist property to the proper http response
        this.productsList = products;
        this.productsList.sort((a, b) => a.votes < b.votes ? 1 : a.votes === b.votes ? 0 : -1);
        console.log(products);
      });
  }

  voteThisProduct(product: Product){
    this.productService.voteProduct(product)
    .subscribe(products => {
      for (var i in this.productsList) {
        if (this.productsList[i]._id == product._id) {
           Object.assign(this.productsList[i],products);
           this.productsList.sort((a, b) => a.votes < b.votes ? 1 : a.votes === b.votes ? 0 : -1);
           break; //Stop this loop, we found it!
        }
      }
    });
  }

}
