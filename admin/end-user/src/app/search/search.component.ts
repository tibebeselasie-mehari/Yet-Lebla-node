import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  client: HttpClient;

  results = [];
  searchQuery = '';
  searchType = 'fasting';

  priceFilters = [
    {
      'min': 0,
      'max': 10000
    },
    {
      'min': 0,
      'max': 10
    },
    {
      'min': 10,
      'max': 20
    },
    {
      'min': 20,
      'max': 50
    },
    {
      'min': 50,
      'max': 100
    },
    {
      'min': 100,
      'max': 200
    },
    {
      'min': 200,
      'max': 10000
    }
  ];


  data = [];
  searchData = [];
  filterParam = '0';
  sortBy = 'price';
  accending = 'false';
  resultsNotFound = false;

  getData() {
    this.httpClient.get('http://localhost:3000/').subscribe(
      res => { console.log(res); }
    );
  }

  constructor(private httpClient: HttpClient) {
    this.client = httpClient;
  }


  fetchResultsFor(query: string) {
    const that = this;
    this.httpClient.get(`http://localhost:3000/search?q=${query}`).subscribe(
      res => {
        that.data = Array.from(Array(res));
      }
    );
  }


  searchFood = function () {
    this.fetchResultsFor(this.searchQuery);
    switch (this.searchType) {
      case 'fasting':
        this.results = this.results.filter(eachFood => eachFood.fasting);
        break;
      case 'non_fasting':
        this.results = this.results.filter(eachFood => !eachFood.fasting);
        break;
      default:
        break;
    }
    console.log(this.results);
    this.searchData = Array.from(this.results);
    this.resultsNotFound = this.results.length === 0;
  };

  sortFoods = function () {
    const that = this;
    this.results.sort(function (x, y) {
      return that.accending === 'false' ? x[that.sortBy] < y[that.sortBy] : x[that.sortBy] > y[that.sortBy];
    });
  };

  filterFoods = function () {
    const that = this;
    const ind = parseInt(this.filterParam);
    this.results = this.searchData
      .filter(
      function (x) {
        const price = x.price.split(' ')[0];
        return (price < that.priceFilters[ind].max) && (price > that.priceFilters[ind].min);
      });
  };


  ngOnInit() {

  }

}
