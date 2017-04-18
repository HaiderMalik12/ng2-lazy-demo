import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomersRoutingModule, routedComponent} from './customers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [routedComponent]
})
export class CustomersModule { }
