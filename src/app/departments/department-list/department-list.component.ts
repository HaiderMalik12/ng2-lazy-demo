import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.departments = this.af.database.list('/departments');
  }

  ngOnInit() {
  }

}
