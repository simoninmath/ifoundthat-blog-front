import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { NavigationModule } from './navigation/navigation.module';
import { ArticlesModule } from './articles/articles.module';
import { AboutModule } from './about/about.module';

const publicRoutes: Routes = [
  { path: 'public' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    NavigationModule,
    ArticlesModule,
    AboutModule
  ]
})
export class PublicModule { }
