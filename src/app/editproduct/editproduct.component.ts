import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from './../services/product.service';
import Product from './../models/product.model';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  @Input() product: Product;

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

  editThis(){
    this.productService.editProduct(this.product).subscribe(
      response =>
        {
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
