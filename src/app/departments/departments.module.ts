import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentsComponent } from './departments.component';
import {DepartmentsRoutingModule} from './departments-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DepartmentsRoutingModule
  ],
  declarations: [DepartmentListComponent, DepartmentsComponent]
})
export class DepartmentsModule { }
