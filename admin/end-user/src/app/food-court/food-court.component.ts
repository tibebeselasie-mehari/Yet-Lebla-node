import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-court',
  templateUrl: './food-court.component.html',
  styleUrls: ['./food-court.component.css']
})
export class FoodCourtComponent implements OnInit {

  top_ten = [
    {
      'label': 'ጨጨብሳ',
      'name': 'chechebsa',
      'price': '40 ብር',
      'place': 'Oasis (around 5kilo)',
      'pic': '/assets/chechebsa.jpg',
      'no_of_stars': 4,
      'type': 'የፍስክ'
    },
    {
      'label': 'ፓስታ',
      'name': 'pasta',
      'price': '30 ብር',
      'place': 'Oasis (around 5kilo)',
      'pic': '/assets/pasta.jpg',
      'no_of_stars': 4,
      'type': 'የጾም'
    },
    {
      'label': 'ፍርፍር',
      'name': 'firfir',
      'price': '44 ብር',
      'place': 'Oasis (around 5kilo)',
      'pic': '/assets/firfir.jpg',
      'no_of_stars': 4,
      'type': 'የፍስክ'
    },
    {
      'label': 'አሳ',
      'name': 'asa gulash',
      'price': '60 ብር',
      'place': 'Oasis (around 5kilo)',
      'pic': '/assets/asa_gulash.jpg',
      'no_of_stars': 4,
      'type': 'የጾም'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
