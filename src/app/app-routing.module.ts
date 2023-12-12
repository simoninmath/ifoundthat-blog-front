import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './404/page-not-found.component';

const routes: Routes = [
  { path:'', redirectTo: 'figurine', pathMatch: 'full' },  // Defautl Route with pathMath to avoid "side effects"
  { path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
