import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

const protectedRoutes: Routes = [
  { path: 'protected'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class ProtectedModule { }
