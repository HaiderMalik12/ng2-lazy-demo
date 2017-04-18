import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
    {
      path: 'customers',
      loadChildren: 'app/customers/customers.module#CustomersModule'
    },
    {
      path: 'departments',
      loadChildren: 'app/departments/departments.module#DepartmentsModule'
    }
  ]
;

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule {
}

