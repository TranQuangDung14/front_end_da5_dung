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
  category_product: any;
  constructor(private admin : AdminService) { }
  product_fromCreate: FormGroup = new FormGroup({
    category_id: new FormControl(),
    name: new FormControl(),
    default_price: new FormControl(),
    price: new FormControl(),
    image: new FormControl(),
    description: new FormControl(),
    amount: new FormControl(),
    // product_supplier_id: new FormControl()
});

  ngOnInit(): void {
    this.get_all_product();
  }

  get_all_product(){
    this.subcription = this.admin.get_all_product()
    .subscribe((data:any)=>{
      console.log(data.product);
      console.log(data.category_product);
      // CKEDITOR.instances.editor1.document.getBody().getText();
      // console.log('supplier',data.supplier);
      this.product=data.product;
      this.category_product= data.category_product;
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
