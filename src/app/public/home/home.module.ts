import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HeroDumbComponent } from './hero-dumb/hero-dumb.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeContainerComponent,
    HeroDumbComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
