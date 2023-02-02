import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './Components/home/home.component';
import { CopyComponent } from './Components/copy/copy.component';
import { TestimonialsComponent } from './Components/testimonials/testimonials.component';
import { FaqComponent } from './Components/faq/faq.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { FooterComponent } from './footer/footer.component';
import { PlanComponent } from './Components/plan/plan.component';
import { TeachComponent } from './Components/teach/teach.component';
import { PhilosophyComponent } from './Components/philosophy/philosophy.component';
import { Copy2Component } from './Components/copy2/copy2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    HomeComponent,
    CopyComponent,
    TestimonialsComponent,
    FaqComponent,
    PrivacyComponent,
    FooterComponent,
    PlanComponent,
    TeachComponent,
    PhilosophyComponent,
    Copy2Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
