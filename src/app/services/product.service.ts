import Product from '../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { from } from 'rxjs';

@Injectable()
export class ProductService {

  api_url = 'http://localhost:3000';
  productUrl = `${this.api_url}/products`;

  constructor(
    private http: HttpClient
  ) { }

  createProduct(formData: FormData): Observable<any>{
    //returns the observable of http post request 
    return Observable.create(observer => {
      var request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3000/products");
    
    request.onload = function () {
      if (request.readyState == 4 && request.status == 200) {
        observer.next(JSON.parse(request.responseText));
        observer.complete();
      } else {
        observer.error(JSON.parse(request.responseText));
      }
    }

    request.send(formData);
    });
  }
  

  getProducts() {
    return this.http.get<Product[]>(`${this.api_url}/products`)
      .pipe(map(res => res));
  }

  getProductById(id: string){
    return this.http.get<Product>(`${this.productUrl}/${id}`);
  }

  editProduct(product :Product): Observable<any>{
    let editUrl = `${this.productUrl}/${product._id}`;
    //returns the observable of http put request 
    return this.http.put(editUrl, product);
  }

  voteProduct(product: Product){
    let editUrl = `${this.productUrl}/upvote/${product._id}`;
    return this.http.put(editUrl, product);
  }

  deleteProduct(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.productUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }))
  }

  //getProducts(): Observable<Product[]>{
  //  return this.http.get(this.productUrl)
  //  .pipe(map(res  => {
      //Maps the response object sent from the server
        
  //    return res["data"].docs as Product[];
  //  }))
  //}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}