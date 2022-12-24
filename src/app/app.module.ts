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
import { NewsletterComponent } from './Components/newsletter/newsletter.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    HomeComponent,
    CopyComponent,
    TestimonialsComponent,
    FaqComponent,
    NewsletterComponent,
    PrivacyComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
