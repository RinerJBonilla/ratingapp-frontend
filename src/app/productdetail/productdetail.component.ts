import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from './../services/product.service';
import Product from './../models/product.model';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  @Input() product: Product;
  massage: String;


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id)
    .subscribe(product => this.product = product);
  }

  voteThisProduct(product: Product){
    this.productService.voteProduct(product)
    .subscribe(products => {
      Object.assign(this.product,products);
    });
  }

  deleteThisProduct(id: string){
    this.productService.deleteProduct(id)
    .subscribe( response => {
      this.massage = response.message;
      window.location.href=`/products`;
    },
    error => {
      console.error(error);
    });
  }

}
