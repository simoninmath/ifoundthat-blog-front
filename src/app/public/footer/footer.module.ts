import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterDumbComponent } from './footer-dumb/footer-dumb.component';
import { LegalDumbComponent } from './footer-dumb/legal-dumb/legal-dumb.component';
import { CookieDumbComponent } from './footer-dumb/cookie-dumb/cookie-dumb.component';
import { PolicyDumbComponent } from './footer-dumb/policy-dumb/policy-dumb.component';
import { TermsDumbComponent } from './footer-dumb/terms-dumb/terms-dumb.component';



@NgModule({
  declarations: [
    FooterDumbComponent,
    LegalDumbComponent,
    CookieDumbComponent,
    PolicyDumbComponent,
    TermsDumbComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FooterModule { }
