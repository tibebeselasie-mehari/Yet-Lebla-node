import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../admin-api.service';

@Component({
  selector: 'app-admin-places',
  templateUrl: './admin-places.component.html',
  styleUrls: ['./admin-places.component.css']
})
export class AdminPlacesComponent implements OnInit {

  constructor(private admin_api : AdminApiService) { }

  ngOnInit() {
  }

  getPlaces() {
    return this.admin_api.getPlaces(10);
  }

}
