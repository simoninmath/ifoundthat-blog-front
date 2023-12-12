import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ProfilModule } from './profil/profil.module';

const protectedRoutes: Routes = [
  { path: 'protected'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfilModule
  ]
})

export class ProtectedModule { }
