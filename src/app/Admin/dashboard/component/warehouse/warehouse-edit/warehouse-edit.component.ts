import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-warehouse-edit',
  templateUrl: './warehouse-edit.component.html',
  styleUrls: ['./warehouse-edit.component.css']
})
export class WarehouseEditComponent implements OnInit {
  id: number = 0;
  constructor(private admin : AdminService ,private _router: ActivatedRoute , private router :Router) { }
  warehouse_fromEdit: FormGroup = new FormGroup({
    product_supplier_id: new FormControl(),
    product_id: new FormControl(),
    amount: new FormControl()
  })
  ngOnInit() {
    this.id = this._router.snapshot.params['id'];
    this.admin.get_warehouse(this.id).subscribe(data => {
      console.log(data)
      this.warehouse_fromEdit = new FormGroup({
        product_supplier_id: new FormControl(data.product_supplier_id),
        product_id: new FormControl(data.product_id),
        amount: new FormControl(data.amount),

      });
    })
  }
  onEdit() {
    this.admin.update_warehouse(this.id, this.warehouse_fromEdit.value).subscribe(data => {
      this.router.navigate(['admin/warehouse']);
      
    });
  }
}
