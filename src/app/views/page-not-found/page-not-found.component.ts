import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="error-page">
      <h2 class="headline text-yellow"> 404</h2>

      <div class="error-content">
        <h3><i class="fa fa-warning text-yellow"></i> Oops! Page not found.</h3>

        <p>
          We could not find the page you were looking for.
          You can <a routerLink="/">return to login screen.</a>
        </p>

        
      </div>
      <!-- /.error-content -->
    </div>
  `,
  styles: []
})
export class PageNotFoundComponent {


  constructor() { }


}
