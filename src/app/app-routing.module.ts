import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './Components/faq/faq.component';
import { HomeComponent } from './Components/home/home.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { TestimonialsComponent } from './Components/testimonials/testimonials.component';
import { CopyComponent } from './Components/copy/copy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'whatIsTheRealWorld', component: CopyComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'privacy', component: PrivacyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
