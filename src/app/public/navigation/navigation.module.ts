import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavSmartComponent } from './nav-smart/nav-smart.component';
import { SearchSmartComponent } from './search-smart/search-smart.component';



@NgModule({
  declarations: [
    NavSmartComponent,
    SearchSmartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NavigationModule { }
