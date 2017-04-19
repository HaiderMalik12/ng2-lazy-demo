import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2'

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.customers = af.database.list('/customers');
  }

  ngOnInit() {
  }

}
