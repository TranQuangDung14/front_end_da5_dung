import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  private subscription: Subscription;
  customer :any;
  constructor(private admin: AdminService ) { }
  customer_fromCreate: FormGroup = new FormGroup({
    name : new FormControl(),
    id_user: new FormControl(),
    date_of_birth: new FormControl(),
    sex: new FormControl(),
    email: new FormControl(),
    adress: new FormControl(),
    number_phone: new FormControl()
  });

  ngOnInit() {
    this.getall_customer();
  }
  getall_customer(){
    this.subscription = this.admin.get_all_customer().subscribe((data:any)=>{
      console.log(data);
      this.customer=data;
    },error =>{
      console.log(error);
    }
    )
}
  onDelete(id: number){
    if(confirm("bạn có chắc chắn xóa không ?")){
    this.subscription = this.admin.delete_customer(id).subscribe((data)=>{
      this.getall_customer();
    })
  }
  }
  onCreate(){
    this.subscription = this.admin.create_customer(this.customer_fromCreate.value).subscribe((data)=>{
      console.log(data);
      this.getall_customer();
    })
  }
}
