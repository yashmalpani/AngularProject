import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../models/food';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foodList: Array<Food> = []
  searchText: string = ""
  requiredFoodList: Array<Food> = []
  constructor(private _router: Router,
    private _authService: AuthService,
    private _http: HttpClient) { }

  ngOnInit(): void {
    this.checkLoginStatus();
  }
  checkLoginStatus() {
    if (this._authService.isLoggedIn())
      return true;
    return false
  }
  logout() {
    this._authService.logout();
    this._router.navigate(['/home']);
  }
  isAdmin() {
    return this._authService.isAdmin();
  }
}
