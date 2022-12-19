import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { IndexComponent } from './home/component/index/index.component';
import { DetailComponent } from './home/component/detail/detail.component';
import { VideoComponent } from './home/component/video/video.component';
import { BlogComponent } from './home/component/blog/blog.component';
import { ProductComponent } from './home/component/product/product.component';
import { CartComponent } from './home/component/cart/cart.component';
import { CheckoutComponent } from './home/component/checkout/checkout.component';
import { ContactComponent } from './home/component/contact/contact.component';
import { BlogDetailComponent } from './home/component/blog/blog-detail/blog-detail.component';
import { AboutComponent } from './home/component/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';

const router_home:Routes=[
  {
  path:"",
  component: HomeComponent,
  children:[
    {
      path:"",
      component: IndexComponent,
    },
    {
      path:"san-pham/:id",
      component:DetailComponent,
    },
    {
      path:"video",
      component:VideoComponent,
    },
    {
      path:"blog",
      component:BlogComponent,
    },
    {
      path:"chi-tiet-bai-viet/:id",
      component:BlogDetailComponent,
    },
    {
      path:"san-pham",
      component:ProductComponent,
    },
    {
      path:"gio-hang",
      component:CartComponent,
    },
    {
      path:"thanh-toan",
      component:CheckoutComponent,
    },
    {
      path:"lien-he",
      component:ContactComponent,
    },
    {
      path:"gioi-thieu",
      component:AboutComponent,
    },
  ]
}
]

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    AboutComponent,
    ContactComponent,
    CheckoutComponent,
    CartComponent,
    ProductComponent,
    BlogDetailComponent,
    BlogComponent,
    VideoComponent,
    DetailComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forChild(router_home)
  ]
})
export class UserModule { }
