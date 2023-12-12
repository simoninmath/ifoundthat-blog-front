import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './404/page-not-found.component';

const mainRoutes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full' },  // Defautl Route with pathMath to avoid "side effects"
  { path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
