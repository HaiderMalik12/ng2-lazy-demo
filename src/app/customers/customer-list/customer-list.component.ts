import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2'

@Component({
  selector: 'app-customer-list',
  template:`
    <table class="bordered">
      <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
      </tr>
      </thead>

      <tbody>
      <tr *ngFor="let customer of customers | async ">
        <td>{{customer.name}}</td>
        <td>{{customer.age}}</td>
        <td>{{customer.address}}</td>
      </tr>
      </tbody>
    </table>
  `
})
export class CustomerListComponent implements OnInit {

  customers: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.customers = af.database.list('/customers');
  }

  ngOnInit() {
  }

}
