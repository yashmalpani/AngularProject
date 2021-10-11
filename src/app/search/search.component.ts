import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../models/food';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  text: any;
  foodList: Array<Food> = [];
  requiredfoodList: Array<Food> = [];

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _http: HttpClient) { }

  ngOnInit(): void {
    this.text = this._route.snapshot.paramMap.get('id');
    console.log(this.text);
    this._http.get<Food[]>(`http://localhost:3000/food`).subscribe(result => {
      this.foodList = result;
    }, error => {
      console.log(error);
    })
    console.log(this.foodList);
    this._http.get<Food[]>(`http://localhost:3000/food`).subscribe(result => {
      this.foodList = result;
    }, error => {
      console.log(error);
    })
    console.log(this.foodList);

    for (let item of this.foodList) {
      console.log(item.name);
    }
  }
}
