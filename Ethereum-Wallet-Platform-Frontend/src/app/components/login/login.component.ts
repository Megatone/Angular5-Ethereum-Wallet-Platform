import { Component } from '@angular/core';
import { style, state, animate, transition, trigger } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    UserService
  ],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate("500ms 0.5s", style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(0, style({ opacity: 0 }))
      ])
    ]),
    trigger('fadeOutform', [
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})

export class LoginComponent  {

  public identity: User;
  public user: User;
  public message: String;
  public status: String;
  public needVerifyTwoFactor: boolean = false;
  public verifyCode: Number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.user = new User();
  }

  login() {
    this._userService.login(this.user).subscribe(
      response => {
        if (response.needVerifyTwoFactor === true) {
          this.needVerifyTwoFactor = true;
          this.status = 'success';
          this.message = response.message;
        } else {
          if (response.user && response.user._id && response.token) {
            this.identity = new User(response.user, response.token);
            this.identity.saveLocal();
            this.status = 'success';
            this.message = response.message;
            setTimeout(() => { this._router.navigate(['/account/wallets']); }, 1000);
          }
        }
      }, error => {
        this.status = 'error';
        this.message = error.json().message;
      });
  }

  loginTwoFactor() {

    this._userService.loginTwoFactor(this.user, this.verifyCode).subscribe(
      response => {
        if (response.user && response.user._id && response.token) {
          this.identity = new User(response.user, response.token);
          this.identity.saveLocal();
          this.status = 'success';
          this.message = response.message;
          setTimeout(() => { this._router.navigate(['/account/wallets']); }, 1000);
        }
      }, error => {
        this.status = 'error';
        this.message = error.json().message;
      });
  }
}
