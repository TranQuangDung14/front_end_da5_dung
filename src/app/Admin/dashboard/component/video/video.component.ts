import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  private subcription : Subscription;
  video: any;
  constructor(private admin : AdminService) { }
  video_fromCreate: FormGroup = new FormGroup({
    title: new FormControl(),
    type_video_id: new FormControl(),
    video: new FormControl(),
    description: new FormControl(),

});

  ngOnInit(): void {
    this.get_all_video();
  }

  get_all_video(){
    this.subcription = this.admin.get_all_video()
    .subscribe((data:any)=>{
      console.log(data);
      this.video=data;
    },error =>{
      console.log(error);

    }
    )
  }
  onCreate(){
    this.admin.create_video(this.video_fromCreate.value).subscribe(data=>{ 
      this.video_fromCreate.reset();
      console.log(data);
       this.get_all_video();
    })
  }
  onDelete(id: number){ 
       if(confirm("bạn có chắc chắn xóa không ?")){
        this.admin.delete_video(id).subscribe((data)=>{
          this.get_all_video();
        })
       }
  }

}
