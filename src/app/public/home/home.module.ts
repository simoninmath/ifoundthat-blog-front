import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HeroDumbComponent } from './hero-dumb/hero-dumb.component';
import { BodySmartComponent } from './body-smart/body-smart.component';
import { NewsSmartComponent } from './body-smart/news-smart/news-smart.component';
import { NewsletterSmartComponent } from './body-smart/newsletter-smart/newsletter-smart.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeContainerComponent,
    HeroDumbComponent,
    BodySmartComponent,
    NewsSmartComponent,
    NewsletterSmartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
