import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { CopyrightComponent } from './common/components/copyright/copyright.component';
import { FormsModule } from '@angular/forms';
import { TestimonialComponent } from './common/components/testimonial/testimonial.component';
import { FactComponent } from './common/components/fact/fact.component';
import { SpecialProductsComponent } from './common/components/special-products/special-products.component';
import { BannerComponent } from './common/components/banner/banner.component';
import { OrganicVegetablesComponent } from './common/components/organic-vegetables/organic-vegetables.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CopyrightComponent,
    TestimonialComponent,
    FactComponent,
    SpecialProductsComponent,
    BannerComponent,
    OrganicVegetablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
