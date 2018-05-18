
import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { ProductService } from './services/product.service';
import Product from './models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
}