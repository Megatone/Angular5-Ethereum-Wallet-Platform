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
  private identity: User;

  constructor(private _http: Http) {
    this.url = GLOBAL.API_URL;
    this.identity = new User().loadLocal();
  }

  getWallets(): Observable<any> {
    const params = JSON.stringify({ userId: this.identity._id });
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.identity.token });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'get-wallets', params, options)
      .map(res => res.json());
  }

  getWallet(modelWallet: Wallet): Observable<any> {
    const params = JSON.stringify({ userId: this.identity._id, walletId: modelWallet._id });
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.identity.token });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'get-wallet', params, options)
      .map(res => res.json());
  }

  getBalance(modelWallet: Wallet): Observable<any> {
    const params = JSON.stringify({ userId: this.identity._id, walletId: modelWallet._id });
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.identity.token });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'get-balance', params, options)
      .map(res => res.json());
  }

  newWallet(modelWallet: Wallet) {
    const params = JSON.stringify({ userId: this.identity._id, walletName: modelWallet.name });
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.identity.token });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'new-wallet', params, options)
      .map(res => res.json());
  }

  updateWalletName(modelWallet: Wallet, newName: String) {
    const params = JSON.stringify({ userId: this.identity._id, walletName: newName, walletId: modelWallet._id });
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.identity.token });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'update-wallet-name', params, options)
      .map(res => res.json());
  }

  getTransactions(modelWallet: Wallet): Observable<any> {
    const params = JSON.stringify({ userId: this.identity._id, walletId: modelWallet._id });
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.identity.token });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'get-transactions', params, options)
      .map(res => res.json());
  }

  removeWallet(modelWallet: Wallet, password: String): Observable<any> {
    const params = JSON.stringify({ userId: this.identity._id, walletId: modelWallet._id, password });
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.identity.token });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'remove-wallet', params, options)
      .map(res => res.json());
  }
  getTransaction(modelTransaction: Transaction): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const params = JSON.stringify({ userId: this.identity._id, walletId: modelTransaction.wallet._id, transactionId: modelTransaction._id });
    const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.identity.token });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'get-transaction', params, options)
      .map(res => res.json());
  }

}
