import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../common/components/navbar/navbar.component';
import { FooterComponent } from '../common/components/footer/footer.component';
import { CopyrightComponent } from '../common/components/copyright/copyright.component';
import { FactComponent } from '../common/components/fact/fact.component';
import { TestimonialComponent } from '../common/components/testimonial/testimonial.component';
import { SpecialProductsComponent } from '../common/components/special-products/special-products.component';
import { BannerComponent } from '../common/components/banner/banner.component';
import { OrganicVegetablesComponent } from '../common/components/organic-vegetables/organic-vegetables.component';
import { FeaturesDiscountComponent } from '../common/components/features-discount/features-discount.component';
import { OurOrganicProductsComponent } from '../common/components/our-organic-products/our-organic-products.component';
import { FeaturesPolicyComponent } from '../common/components/features-policy/features-policy.component';
import { MainSilderComponent } from '../common/components/main-silder/main-silder.component';
import { TopbarComponent } from '../common/components/topbar/topbar.component';
import { RelatedProductsComponent } from '../common/components/related-products/related-products.component';



@NgModule({
  declarations: [  FooterComponent,
    CopyrightComponent,
    TestimonialComponent,
    FactComponent,
    SpecialProductsComponent,
    BannerComponent,
    OrganicVegetablesComponent,
    FeaturesDiscountComponent,
    OurOrganicProductsComponent,
    FeaturesPolicyComponent,
    MainSilderComponent,
    TopbarComponent,
    NavbarComponent,
    RelatedProductsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [  FooterComponent,
    CopyrightComponent,
    TestimonialComponent,
    FactComponent,
    SpecialProductsComponent,
    BannerComponent,
    OrganicVegetablesComponent,
    FeaturesDiscountComponent,
    OurOrganicProductsComponent,
    FeaturesPolicyComponent,
    MainSilderComponent,
    TopbarComponent,
    NavbarComponent,
    RelatedProductsComponent
  ]
})
export class SharedModule { }
