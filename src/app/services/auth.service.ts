import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor() { }

  canActivate() {
    if (this.isLoggedIn())
      return true;
    return false;
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('isLoggedIn') == 'true') {
      return true
    } else {
      return false
    }
  }
  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userId');
  }

  isAdmin() {
    if (localStorage.getItem('userId') == '1000')
      return true;
    return false;
  }
}
