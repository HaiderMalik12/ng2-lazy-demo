import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DepartmentsComponent} from './departments.component';
import {DepartmentListComponent} from './department-list/department-list.component';

const routes: Routes = [{
  path: '', component: DepartmentsComponent,
  children: [
    {path: '', component: DepartmentListComponent}
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule {
}
export const routedComponents = [
  DepartmentListComponent,
  DepartmentsComponent
];
