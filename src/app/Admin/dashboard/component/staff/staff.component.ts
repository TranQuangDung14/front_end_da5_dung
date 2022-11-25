import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  private subcription : Subscription;
  staff: any;
  constructor(private admin : AdminService) { }
  staff_fromCreate: FormGroup = new FormGroup({
    name: new FormControl(),
    date_of_birth: new FormControl(),
    sex: new FormControl(),
    number_phone: new FormControl(),
    email: new FormControl(),
    adress: new FormControl(),
    possion: new FormControl(),
    department: new FormControl(),
});

  ngOnInit(): void {
    this.get_all_staff();
  }

  get_all_staff(){
    this.subcription = this.admin.get_all_staff()
    .subscribe((data:any)=>{
      console.log(data);
      this.staff=data;
    },error =>{
      console.log(error);

    }
    )
  }
  onCreate(){
    this.admin.create_staff(this.staff_fromCreate.value).subscribe(data=>{ 
      this.staff_fromCreate.reset();
      console.log(data);
       this.get_all_staff();
    })
  }
  onDelete(id: number){ 
       if(confirm("bạn có chắc chắn xóa không ?")){
        this.admin.delete_staff(id).subscribe((data)=>{
          this.get_all_staff();
        })
       }
  }

}
