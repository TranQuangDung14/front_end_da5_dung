import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  private subcription : Subscription;
  order: any;
  constructor(private admin : AdminService) { }
  order_fromCreate: FormGroup = new FormGroup({
    // id: new FormControl(),
    product_id: new FormControl(),
    customer_id: new FormControl(),
    warehouse_id: new FormControl(),
    // status: new FormControl()

});

  ngOnInit(): void {
    this.getall_order();
  }

  getall_order(){
    this.subcription = this.admin.get_all_order()
    .subscribe((data:any)=>{
      console.log(data);
      this.order=data;
    },error =>{
      console.log(error);

    }
    )
  }
  onCreate(){
    this.admin.create_order(this.order_fromCreate.value).subscribe(data=>{ 
      this.order_fromCreate.reset();
      console.log(data);
       this.getall_order();
    })
  }
  onDelete(id: number){ 
       if(confirm("bạn có chắc chắn xóa không ?")){
        this.admin.delete_order(id).subscribe((data)=>{
          this.getall_order();
        })
       }
  }
}
