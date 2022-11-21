import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TestppComponent } from './testpp/testpp.component';

const routes: Routes = [
  {
    path:"",
    loadChildren:() =>
    import('./Admin/admin.module').then((m)=>m.AdminModule),
  },
  {
    path:'test',
    component:TestppComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
