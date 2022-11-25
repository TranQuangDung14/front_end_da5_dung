import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private subcription : Subscription;
  product: any;
  constructor(private admin : AdminService) { }
  product_fromCreate: FormGroup = new FormGroup({
    category_id: new FormControl(),
    name: new FormControl(),
    default_price: new FormControl(),
    price: new FormControl(),
    image: new FormControl(),
    description: new FormControl()
});

  ngOnInit(): void {
    this.get_all_product();
  }

  get_all_product(){
    this.subcription = this.admin.get_all_product()
    .subscribe((data:any)=>{
      console.log(data);
      this.product=data;
    },error =>{
      console.log(error);

    }
    )
  }
  onCreate(){
    this.admin.create_product(this.product_fromCreate.value).subscribe(data=>{ 
      this.product_fromCreate.reset();
      console.log(data);
       this.get_all_product();
    })
  }
  onDelete(id: number){ 
       if(confirm("bạn có chắc chắn xóa không ?")){
        this.admin.delete_product(id).subscribe((data)=>{
          this.get_all_product();
        })
       }
  }

}
