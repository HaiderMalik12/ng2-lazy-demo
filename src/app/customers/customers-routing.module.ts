import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {CustomersComponent} from './customers.component';
import {CustomerListComponent} from './customer-list/customer-list.component';


const routes: Routes = [{
  path : '' , component: CustomersComponent,
  children : [
    { path : '', component: CustomerListComponent }
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports : [RouterModule]
})
export class CustomersRoutingModule { }

export const routedComponent = [
  CustomerListComponent,
  CustomersComponent
];

