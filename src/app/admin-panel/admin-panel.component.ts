import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../models/food';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  user: User = new User()
  password: string = ""
  newPass: string = ""
  newPassConfirm: string = ""
  id = localStorage.getItem('userId')
  flag = 0
  foodList: Array<Food> = []

  constructor(private _authService: AuthService,
    private _router: Router,
    private _http: HttpClient) {
    if (this._authService.isAdmin() && this._authService.isLoggedIn()) {
      this._http.get<Food[]>(`http://localhost:3000/food/`).subscribe(result => {
        this.foodList = result;
      }, error => {
        console.log(error);
      })

    }
    else {
      this._router.navigate(['/home'])
    }
  }

  ngOnInit(): void {
    this._http.get<User>(`http://localhost:3000/users/${this.id}`).subscribe(result => {
      this.user = result;
    }, error => {
      console.log(error);
    })
  }

  remove(id: any) {
    this._http.delete(`http://localhost:3000/food/${id}`).subscribe(result => { }, error => { });

    window.location.reload();

  }

  passwordUpdate() {
    if (this.user.password != this.password) {
      alert("Wrong Password")
      this.flag = 1
    }
    if (this.flag == 0) {
      if (this.newPass == this.newPassConfirm) {
        this.user.password = this.newPass;
        this._http.put(`http://localhost:3000/users/${this.id}`, this.user).subscribe(result => {
          alert("Password Changed Successfully");
          this._router.navigate(['/admin']);
        }, error => {
          console.log(error);
        });
      }
      else {
        alert("Password don't match")
      }
    }
  }

}
