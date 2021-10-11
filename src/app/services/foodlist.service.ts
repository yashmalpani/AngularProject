import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodlistService {

  constructor(private _http: HttpClient) {
  }
  getAllFood(): Observable<Food[]> {
    return this._http.get<Food[]>(`http://localhost:3000/food`);
  }
}