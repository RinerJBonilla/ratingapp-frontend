import { Component, OnInit } from '@angular/core';
import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { ProductService } from './../services/product.service';
import Product from './../models/product.model';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private http: Http
  ) { }

  public newProduct: Product = new Product();
  formData = new FormData();
  promiseSetBySomeAction

  ngOnInit() {
    this.newProduct = new Product();
  }

  uploadFile(event){
    let elem = event.target;
    if(elem.files.length>0){
      this.promiseSetBySomeAction = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
      });
      console.log(elem.files[0]);
      this.formData.append('Imager',elem.files[0]);
    }
  }

  create(){
    this.formData.append('name',this.newProduct.name);
    this.formData.append('description',this.newProduct.description);
    this.formData.append('votes','0');

    console.log(this.formData.get('Imager'));
    console.log(this.formData.get('name'));
    console.log(this.formData.get('description'));
    console.log(this.formData.get('votes'));

    this.productService.createProduct(this.formData).subscribe(
      response =>{
        console.table(response);
        console.log(response._id);
        window.location.href=`/productdetail/${response._id}`;
      },
      error => {
        console.error(error);
      }  
    );
  }

}