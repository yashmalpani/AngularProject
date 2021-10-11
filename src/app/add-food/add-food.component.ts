import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../models/food';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  food: Food = new Food();

  constructor(private _router: Router,
    private _http: HttpClient) { }

  ngOnInit(): void {
  }
  addFood() {
    this._http.post(`http://localhost:3000/food`, this.food).subscribe(result => {
      alert('Food added successfully');
      this._router.navigate(['/admin']);
    }, error => {
      console.log(error);
    });
    this.food = new Food();
  }
}
