import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-category-product-edit',
  templateUrl: './category-product-edit.component.html',
  styleUrls: ['./category-product-edit.component.css']
})
export class CategoryProductEditComponent implements OnInit {
  id: number = 0;
  constructor(private admin : AdminService ,private _router: ActivatedRoute , private router :Router) { }
  category_product_fromEdit: FormGroup = new FormGroup({
    name: new FormControl(),
    product_supplier_id: new FormControl(),
    warehouse_id: new FormControl()
  })
  ngOnInit() {
    this.id = this._router.snapshot.params['id'];
    // console.log(this._router.snapshot.params['id'])
    this.admin.get_category(this.id).subscribe(data => {
      console.log(data)
      this.category_product_fromEdit = new FormGroup({
        name: new FormControl(data.name),
        product_supplier_id: new FormControl(data.product_supplier_id),
        warehouse_id: new FormControl(data.warehouse_id),
      });
    })
  }
  onEdit() {
    // alert('aa');
    this.admin.update_category(this.id, this.category_product_fromEdit.value).subscribe(data => {
      // console.log(data);
      // this.testapi.getalltestapi();
      this.router.navigate(['admin/category-product']);
      
    });
  }
}
