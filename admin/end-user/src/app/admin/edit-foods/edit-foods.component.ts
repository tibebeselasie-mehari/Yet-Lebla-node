import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../admin-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-foods',
  templateUrl: './edit-foods.component.html',
  styleUrls: ['./edit-foods.component.css']
})
export class EditFoodsComponent implements OnInit {

  food;

  modal_behaviour = {
    'body': 'sdafadsfasdf',
    modalOk : function(){
      alert('ok is clicked');
    },
    modalCancel : function(){
      alert('modal is canceled');
    }
  };

  constructor(private api_service: AdminApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.food = this.api_service.getFood(parseInt(params.foodid, 10));
    });
  }

  editFood() {
  
  }

}
