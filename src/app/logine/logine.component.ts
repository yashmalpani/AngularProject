import { getLocaleFirstDayOfWeek } from '@angular/common';
import { HttpClient, HttpSentEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-logine',
  templateUrl: './logine.component.html',
  styleUrls: ['./logine.component.css']
})
export class LogineComponent implements OnInit {
  userList: Array<User> = []
  user: User = new User();
  constructor(private _router: Router,
    private _http: HttpClient,
    private _userService: UserService) { }

  ngOnInit(): void {
  }

  clearFields() {
    this.user = new User();
  }

  login() {
    this._userService.getAllUser().subscribe(result => {
      this.userList = result;
      if (this.checkLogin()) {
        console.log(localStorage.getItem('userId'));
        localStorage.setItem('isLoggedIn', 'true');
        this._router.navigate(['/home']);
        if (localStorage.getItem('userId') == '1000') {
          this._router.navigate(['/admin']);
        }
      } else {
        alert('Invalid Credentials');
        this.clearFields()
      }
    }, error => {
      console.log(error);
    })
  }
  checkLogin() {
    for (const x of this.userList) {
      if (x.username == this.user.username && x.password == this.user.password) {
        console.log(x.name);
        localStorage.setItem('userId', x.id.toString());
        return true;
      }
    }
    return false;
  }

}
