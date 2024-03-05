import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsListingComponent } from './products-listing/products-listing.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    ProductsListingComponent,
    ProductDetailComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    InfiniteScrollModule
  ]
})
export class PagesModule { }
