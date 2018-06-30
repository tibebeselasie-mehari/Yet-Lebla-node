import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../admin-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-places',
  templateUrl: './edit-places.component.html',
  styleUrls: ['./edit-places.component.css']
})
export class EditPlacesComponent implements OnInit {

  food;

  constructor(private api_service: AdminApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.food = this.api_service.getPlace(parseInt(params.placename, 10));
    });
  }

}
