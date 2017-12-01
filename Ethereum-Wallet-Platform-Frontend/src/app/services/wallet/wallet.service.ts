import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';
import { User } from '../../models/user.model';
import { Wallet } from '../../models/wallet.model';
import { Transaction } from '../../models/transaction.model';


@Injectable()
export class WalletService {

  public url: string;

  constructor(private _http: Http) {
    this.url = GLOBAL.API_URL;
  }

  getWallets(modelUser: User): Observable<any> {
    const params = JSON.stringify({ userId: modelUser._id });
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': modelUser.token });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'get-wallets', params, options)
      .map(res => res.json());
  }

  getWallet(modelUser: User, walletId: String): Observable<any> {
    const params = JSON.stringify({ userId: modelUser._id, walletId });
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': modelUser.token });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'get-wallet', params, options)
      .map(res => res.json());
  }

  getBalance(modelUser: User, modelWallet: Wallet): Observable<any> {
    const params = JSON.stringify({ userId: modelUser._id, walletId : modelWallet._id });
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': modelUser.token });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'get-balance', params, options)
      .map(res => res.json());
  }

  newWallet(modelUser: User, modelWallet: Wallet) {
    const params = JSON.stringify({ userId: modelUser._id, walletName: modelWallet.name });
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': modelUser.token });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'new-wallet', params, options)
      .map(res => res.json());
  }

  updateWalletName(modelUser: User, modelWallet: Wallet) {
    const params = JSON.stringify({ userId: modelUser._id, walletName: modelWallet.name, walletId: modelWallet._id });
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': modelUser.token });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'update-wallet-name', params, options)
      .map(res => res.json());
  }

  getTransactions(modelUser: User, modelWallet: Wallet): Observable<any> {
    const params = JSON.stringify({ userId: modelUser._id, walletId: modelWallet._id });
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': modelUser.token });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'get-transactions', params, options)
      .map(res => res.json());
  }

  removeWallet(modelUser: User, modelWallet: Wallet): Observable<any> {
    const params = JSON.stringify({ userId: modelUser._id, walletId: modelWallet._id, password: modelUser.password });
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': modelUser.token });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'remove-wallet', params, options)
      .map(res => res.json());
  }
  getTransaction(modelUser: User, modelTransaction: Transaction): Observable<any> {
    const params = JSON.stringify({ userId: modelUser._id, walletId: modelTransaction.wallet._id, transactionId: modelTransaction._id });
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': modelUser.token });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'get-transaction', params, options)
      .map(res => res.json());
  }

}
