import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { ProductService } from './../services/product.service';
import Product from './../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private http: Http
  ) { }

  public newProduct: Product = new Product()

  //An Empty list for the visible Product list
  productsList: Product[];
  formData = new FormData();
  selectedProduct: Product;


  onSelect(product: Product): void {
    this.selectedProduct = product;
    console.log(product._id);
  }
  
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(products => {
        //assign the todolist property to the proper http response
        this.productsList = products;
        this.shuffle(this.productsList);
        console.log(products);
      });
  }

  voteThisProduct(product: Product){
    this.productService.voteProduct(product)
    .subscribe(products => {
      for (var i in this.productsList) {
        if (this.productsList[i]._id == product._id) {
           Object.assign(this.productsList[i],products);
           break; //Stop this loop, we found it!
        }
      }
    });
  }

}
