import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductDevelopmentComponent } from './product-development/product-development.component';
import { MobileAutomationComponent } from './mobile-automation/mobile-automation.component';
import { SoftwareSupportComponent } from './software-support/software-support.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'product-development', component: ProductDevelopmentComponent},
  { path: 'mobile-automation', component: MobileAutomationComponent},
  { path: 'software-support', component: SoftwareSupportComponent},
];

export const routing = RouterModule.forRoot(routes);
