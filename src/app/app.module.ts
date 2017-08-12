import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductDevelopmentComponent } from './product-development/product-development.component';
import { MobileAutomationComponent } from './mobile-automation/mobile-automation.component';
import { SoftwareSupportComponent } from './software-support/software-support.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    LandingPageComponent,
    ProductDevelopmentComponent,
    MobileAutomationComponent,
    SoftwareSupportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
