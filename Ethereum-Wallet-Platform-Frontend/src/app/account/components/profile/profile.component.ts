import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user/user.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { Country } from '../../../models/country.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
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
    trigger('fadeOut', [
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ProfileComponent implements OnInit {

  public identity: User = new User({});
  public qr_code: String;
  public code: Number;
  public status: String;
  public message: String;
  public statusTowFactor: string;
  public messageTwoFactor: string;
  public countries: Array<Country>;

  constructor(
    private _userService: UserService
  ) {
    this.identity = new User({}).loadLocal();

  }

  ngOnInit() {
    this._userService.getCountries().subscribe(
      response => {
        this.countries = (response.countries) ? response.countries : [];
      }, error => {
        this.status = 'error';
        this.message = error.json().message;
        this.countries = [];
      }
    );
  }


  editProfile(): void {
    this.status = null;
    this.identity.country = this.getCountryByCode(this.identity.country.code);
    this._userService.updateUserProfile(this.identity).subscribe(
      response => {
        this.status = (response.message) ? 'success' : null;
        this.message = (response.message) ? response.message : '';
        this.identity = new User(response.user, response.token);
        this.identity.saveLocal();
      }, error => {
        var errorMessage = JSON.parse((<any>error)._body).message;
        this.status = 'error';
        this.message = (errorMessage) ? errorMessage : 'Error';
      }
    );
  }

  getCountryByCode(code: String): Country {
    return <Country>this.countries.filter(c => <String>c.code === <String>code)[0];
  }

  configure2A(): void {
    this.statusTowFactor = null;
    this.messageTwoFactor = null;
    if (this.validatePassword())
      this._userService.configure2A(this.identity).subscribe(
        response => {
          this.statusTowFactor = (response.message) ? 'success' : null;
          this.messageTwoFactor = (response.message) ? response.message : '';
          this.qr_code = (response.qr_code) ? response.qr_code : null;
          this.identity.password = '';
        }, error => {
          var errorMessage = JSON.parse((<any>error)._body).message;
          this.statusTowFactor = 'error';
          this.messageTwoFactor = (errorMessage) ? errorMessage : 'Error';
          this.identity.password = '';
          this.code = null;
          this.qr_code = null;
        }
      );
  }

  enable2A(): void {
    this.statusTowFactor = null;
    this.messageTwoFactor = null;
    if (this.validateCode())
      this._userService.enable2A(this.identity, this.code).subscribe(
        response => {
          this.statusTowFactor = (response.message) ? ((response.result === true) ? 'success' : 'error') : null;
          this.messageTwoFactor = (response.message) ? response.message : '';
          this.identity.totp.active = (response.result) ? response.result : false;
          this.identity.password = '';
          this.qr_code = null;
          this.code = null;
          this.identity.saveLocal();
        }, error => {
          var errorMessage = JSON.parse((<any>error)._body).message;
          this.statusTowFactor = 'error';
          this.messageTwoFactor = (errorMessage) ? errorMessage : 'Error';
          this.identity.password = '';
          this.code = null;
          this.qr_code = null;
        }
      );
  }

  disable2A() {
    this.statusTowFactor = null;
    this.messageTwoFactor = null;
    if (this.validatePassword())
      this._userService.disable2A(this.identity).subscribe(
        response => {
          this.statusTowFactor = (response.message) ? ((response.result === false) ? 'success' : 'error') : null;
          this.messageTwoFactor = (response.message) ? response.message : '';
          this.identity.totp.active = (response.result != null) ? response.result : true;
          this.identity.password = '';
          this.qr_code = null;
          this.code = null;
          this.identity.saveLocal();
        }, error => {
          var errorMessage = JSON.parse((<any>error)._body).message;
          this.statusTowFactor = 'error';
          this.messageTwoFactor = (errorMessage) ? errorMessage : 'Error';
          this.identity.password = '';
          this.code = null;
          this.qr_code = null;
        }
      );
  }

  validatePassword() {
    if (!this.identity.password) {
      this.statusTowFactor = 'error';
      this.messageTwoFactor = 'Password field is required'
      return false;
    }
    if (!(this.identity.password.length > 3)) {
      this.statusTowFactor = 'error';
      this.messageTwoFactor = 'Password field minimun 4 characters required';
      return false;
    }
    return true;
  }

  validateCode() {
    if (!this.code) {
      this.statusTowFactor = 'error';
      this.messageTwoFactor = 'Pin code field is required'
      return false;
    }

    if (!(this.code.toString().length > 3)) {
      this.statusTowFactor = 'error';
      this.messageTwoFactor = 'Pin code field minimun 4 numbers required';
      return false;
    }
    return true;
  }

}
