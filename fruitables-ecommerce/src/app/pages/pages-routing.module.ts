import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ProductsListingComponent } from './products-listing/products-listing.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // {
      //   path: '',
      //   component: HomeComponent
      // },
      // {
      //   path: '',
      //   component: ProductsListingComponent
      // },
      // {
      //   path: '',
      //   component: ProductDetailComponent
      // }
      //  {
      //   path: '',
      //   component:ContactUsComponent
      // },
      // {
      //   path: '',
      //   component:CheckoutComponent
      // }
      {
        path: '',
        component:CartComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
