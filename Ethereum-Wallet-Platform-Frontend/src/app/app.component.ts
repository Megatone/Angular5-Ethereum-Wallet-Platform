import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})

export class AppComponent implements OnInit, DoCheck {

  public identity : User;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {

  }

  ngOnInit() {
    this.identity = new User().loadLocal();
  }

  ngDoCheck() {
    this.identity = new User().loadLocal();
  }

  logout() {
    this.identity = this.identity.removeLocal();
    this._router.navigate(['/']);
  }

}
