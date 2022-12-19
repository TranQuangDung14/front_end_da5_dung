import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  categories_section_begin:any;
  category :any;
  all_product:any;
  category_limit:any;
  // test:'haha';
  constructor(private admin: AdminService) { }
  private subscription: Subscription;

  ngOnInit() {
    this.getall_categories_section_begin();
  }
  getall_categories_section_begin(){
    this.subscription = this.admin.get_index_product().subscribe((data:any)=>{
      console.log(data);
      console.log(data.product);
      this.categories_section_begin=data.product;
      this.category=data.category;
      this.category_limit=data.category_limit;
      // this.show_by_cate_product=data.show_by_cate_product;
      this.all_product=data.all_product;
    },error =>{
      console.log(error);
    }
    )

}

}
