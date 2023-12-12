import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { NavigationModule } from './navigation/navigation.module';

const publicRoutes: Routes = [
  { path: 'public' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    NavigationModule
  ]
})
export class PublicModule { }
