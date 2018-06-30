import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../admin-api.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(private admin_api : AdminApiService) { }

  ngOnInit() {
  }

  getUsers() {
    return this.admin_api.getUsers(10);
  }

}
