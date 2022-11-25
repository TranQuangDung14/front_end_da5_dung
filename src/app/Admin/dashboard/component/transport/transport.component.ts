import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {
  private subcription : Subscription;
  transport: any;
  constructor(private admin : AdminService) { }
  transport_fromCreate: FormGroup = new FormGroup({
    staff_id: new FormControl(),
    status_oder: new FormControl(),
    intend_time: new FormControl(),
});

  ngOnInit(): void {
    this.get_all_transport();
  }

  get_all_transport(){
    this.subcription = this.admin.get_all_transport()
    .subscribe((data:any)=>{
      console.log(data);
      this.transport=data;
    },error =>{
      console.log(error);

    }
    )
  }
  onCreate(){
    this.admin.create_transport(this.transport_fromCreate.value).subscribe(data=>{ 
      this.transport_fromCreate.reset();
      console.log(data);
       this.get_all_transport();
    })
  }
  onDelete(id: number){ 
       if(confirm("bạn có chắc chắn xóa không ?")){
        this.admin.delete_transport(id).subscribe((data)=>{
          this.get_all_transport();
        })
       }
  }

}
