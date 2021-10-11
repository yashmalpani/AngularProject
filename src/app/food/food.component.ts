import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food';
import { FoodlistService } from '../services/foodlist.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  foodList: Array<Food> = [];
  constructor(private _foodServcie: FoodlistService,
    private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get<Food[]>(`http://localhost:3000/food`).subscribe(result => {
      this.foodList = result;
    }, error => {
      console.log(error);
    })
  }

}
