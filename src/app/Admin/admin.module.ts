import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { TestapiComponent } from './dashboard/testapi/testapi.component';
import { CategoryProductComponent } from './dashboard/component/category-product/category-product.component';
import { IsAuthenticatedGuard } from '../is-authenticated.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { TestapiEditComponent } from './dashboard/testapi/testapi-edit/testapi-edit.component';



const routes: Routes = [
  {
    path:"admin",
    component: DashboardComponent,
    children:[
      {
        path:"testapi",
        component:TestapiComponent,
        canActivate: [IsAuthenticatedGuard],
      },
      {
        path:"testapi-edit/:id",
        component:TestapiEditComponent,
        canActivate: [IsAuthenticatedGuard],
      }, 
      {
        path:"category-product",
        component:CategoryProductComponent,
        canActivate: [IsAuthenticatedGuard],
      }  
    ]
    },
];

@NgModule({
  declarations: [
    DashboardComponent,
    TestapiComponent,
    TestapiEditComponent,
    CategoryProductComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
