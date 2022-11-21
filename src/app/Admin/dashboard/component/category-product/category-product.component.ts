import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { category_product } from 'src/app/models/admin';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {

  private subcription : Subscription;
  category_product: category_product[] =[];
  constructor() { }

  ngOnInit(): void {
  }

}
