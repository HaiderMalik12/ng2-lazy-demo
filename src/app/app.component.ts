import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">LazyDemo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a [routerLink]="['/departments']" href="sass.html">Departments</a></li>
         <li><a [routerLink]="['/customers']" href="sass.html">Customers</a></li>
      </ul>
    </div>
  </nav>
  <div class="container">
       <router-outlet></router-outlet>
      </div>
      
    </div>`
})
export class AppComponent {
}
