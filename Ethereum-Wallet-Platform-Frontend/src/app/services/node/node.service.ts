import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';
import * as io from 'socket.io-client';


@Injectable()
export class NodeService {
  public url: string;
  public urlSocket: string;
  public socket;
  constructor(
    private _http: Http
  ) {
    this.url = GLOBAL.API_URL;
    this.urlSocket = GLOBAL.SOCKET_URL;
  }

  getNodeInformation(): Observable<any> {
    this.socket = io(this.urlSocket);
    return new Observable(observer => {
      this.socket.on('node-information', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
  }

  getPriceHistory(days: number): Observable<any> {
    const params = JSON.stringify({ days });
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'get-price-history', params, options)
      .map(res => res.json());
  }
}
