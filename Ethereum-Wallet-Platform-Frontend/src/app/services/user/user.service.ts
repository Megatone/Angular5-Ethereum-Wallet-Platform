import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';
import { User } from '../../models/user.model';


@Injectable()
export class UserService {

  public url: string;
  private identity: User;

  constructor(private _http: Http) {
    this.url = GLOBAL.API_URL;
    this.identity = new User().loadLocal();
  }

  register(modelUser: User): Observable<any> {
    const params = JSON.stringify({ user: modelUser });
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'register', params, options)
      .map(res => res.json());
  }

  login(modelUser: User): Observable<any> {
    const params = JSON.stringify({ email: modelUser.email, password: modelUser.password });
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'login', params, options)
      .map(res => res.json());
  }

  loginTwoFactor(modelUser: User, verifyCode: Number): Observable<any> {
    const params = JSON.stringify({ email: modelUser.email, password: modelUser.password, code: verifyCode });
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'login-two-factor', params, options)
      .map(res => res.json());
  }

  getCountries(): Observable<any> {
    return this._http.get(this.url + 'get-countries')
      .map(res => res.json());
  }

  updateUserProfile(modelUser: User): Observable<any> {
    const params = JSON.stringify({ userId: modelUser._id, user: modelUser });
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': modelUser.token });
    const options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'update-profile', params, options)
      .map(res => res.json());
  }

  configure2A(modelUser: User): Observable<any> {
    const params = JSON.stringify({ userId: modelUser._id, password: modelUser.password });
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': modelUser.token });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'configure-2a', params, options)
      .map(res => res.json());
  }

  enable2A(modelUser: User, code: Number): Observable<any> {
    const params = JSON.stringify({ userId: modelUser._id, code: code });
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': modelUser.token });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'enable-2a', params, options)
      .map(res => res.json());
  }

  disable2A(modelUser: User): Observable<any> {
    const params = JSON.stringify({ userId: modelUser._id, password: modelUser.password });
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': modelUser.token });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'disable-2a', params, options)
      .map(res => res.json());
  }


}
