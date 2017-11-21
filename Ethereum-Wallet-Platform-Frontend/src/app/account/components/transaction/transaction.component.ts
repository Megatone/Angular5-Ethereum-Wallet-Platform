import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DecimalPipe, NgClass } from '@angular/common';
import { Wallet } from '../../../models/wallet.model';
import { WalletService } from '../../../services/wallet/wallet.service';
import { User } from '../../../models/user.model';
import { trigger, transition, style, animate } from '@angular/animations';
import { Transaction } from '../../../models/transaction.model';
import { EthInfo } from '../../../models/ethInfo.model';
import { scheduleMicroTask } from '@angular/core/src/util';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  providers: [
    WalletService
  ],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate("500ms 0.5s", style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate("500ms 0.5s", style({ opacity: 0 }))
      ])
    ])
  ]
})
export class TransactionComponent {

  public status: String;
  public message: String;
  public identity: User;
  public transaction: Transaction;
  public CONST_UNIT: Number = 1000000000000000000;
  public ethInfo: EthInfo = new EthInfo({});

  constructor(
    private _walletService: WalletService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.identity = new User({}).loadLocal();
    this.getEthInfo();
    this._route.params.subscribe(params => {
      this.transaction = new Transaction({
        _id: params['transactionId'],
        to: '',
        wallet: new Wallet({
          _id: params['walletId'],
          address: ''
        })
      });
      this.getTransaction();
    });
  }


  getEthInfo(): void {
    this._walletService.getEthInfo().subscribe(
      response => {
        this.ethInfo = (response.ethInfo) ? new EthInfo(response.ethInfo) : this.ethInfo;
      }, error => {
        this.status = 'error';
        this.message = error.json().message;
      }
    );
  }

  getTransaction(): void {
    this._walletService.getTransaction(this.identity, this.transaction).subscribe(
      response => {
        this.transaction = response.transaction;
      }, error => {
        this.status = 'error';
        this.message = error.json().message;
      }
    );
  }

  copyToClipboard(): void {
    this.message = null;
    this.status = null;
    this.message = 'Transaction hash copied to Clipboard Successfully';
    this.status = 'success';
  }

  back(): void {
    this._router.navigate(['/account/wallet/', this.transaction.wallet._id]);
  }

  calculateTimeText(): String {
    var now = new Date();
    var delta = Math.abs(<any>(now) - <any>(new Date(<any>(this.transaction.timeStamp) * 1000))) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // what's left is seconds
    var seconds = delta % 60;
    return <any>days + ' days ' + <any>hours + ' hours ago';
  }
}
