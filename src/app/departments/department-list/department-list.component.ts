import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-department-list',
  template: `<table class="bordered">
    <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Location</th>
    </tr>
    </thead>

    <tbody>
    <tr *ngFor="let dep of departments | async ">
      <td>{{dep.name}}</td>
      <td>{{dep.type}}</td>
      <td>{{dep.location}}</td>
    </tr>
    </tbody>
  </table>


  `
})
export class DepartmentListComponent implements OnInit {

  departments: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.departments = this.af.database.list('/departments');
  }

  ngOnInit() {
  }

}
