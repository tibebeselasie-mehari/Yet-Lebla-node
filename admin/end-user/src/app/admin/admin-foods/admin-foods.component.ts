import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../../admin-api.service';

@Component({
  selector: 'app-admin-foods',
  templateUrl: './admin-foods.component.html',
  styleUrls: ['./admin-foods.component.css']
})
export class AdminFoodsComponent implements OnInit {

  constructor(private admin_api: AdminApiService) { }

  ngOnInit() {
  }

  getFoods() {
    return this.admin_api.getFoods(10);
  }

}
