import { Component, OnInit } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate("500ms 0.5s", style({opacity:1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(0, style({opacity:0}))
      ])
    ]),
    trigger('fadeOutform', [
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity:0}))
      ])
    ])
  ]
})
export class RegisterComponent implements OnInit {

  public user: User;
  public status: string;
  public message: string;
  public countries: Array<Country>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.user = new User({});
    this._userService.getCountries().subscribe(
      response => {
        this.countries = (response.countries) ? response.countries : [];
      },error => {
        this.status = 'error';
        this.message = error.json().message;
        this.countries = [];
      }
    )
  };

  ngOnInit() {
    console.log('Register Component Cargado');
  }

  onSubmit() {
    this.message = undefined;
    this._userService.register(this.user).subscribe(
      response => {
        this.status = 'success';
        this.message = response.message;
      },
      error => {
        this.status = 'error';
        this.message = error.json().message;
      }
    );
  }
}
