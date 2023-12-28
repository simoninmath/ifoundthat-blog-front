import { Component } from "@angular/core";

@Component({
  selector: "app-page-not-found",
  template: `
    <div class="center">
      <h1>404 error! Page not found</h1>
      <a routerLink="/home" class="waves-effect waves-light btn blue-grey darken-2">Home</a>
      <div class="center">
        <img src="" />
      </div>
    </div>
  `,
})
export class PageNotFoundComponent {}