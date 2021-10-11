import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  constructor(private _router: Router,
    private _http: HttpClient) {
  }

  ngOnInit(): void {
  }

  register(): void {
    this._http.post(`http://localhost:3000/users`, this.user).subscribe(result => {
      alert('Sign Up Successful, please Log into your account.');
      this._router.navigate(['/login']);
    }, error => {
      console.log(error);
    });
    this.user = new User();
  }

}
