import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DecimalPipe, NgClass } from '@angular/common';
import { Wallet } from '../../../models/wallet.model';
import { WalletService } from '../../../services/wallet/wallet.service';
import { User } from '../../../models/user.model';
import { trigger, transition, style, animate } from '@angular/animations';
import { Transaction } from '../../../models/transaction.model';
import { scheduleMicroTask } from '@angular/core/src/util';

import { NodeInformation } from '../../../models/nodeInformation.model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Alert } from '../../../models/alert.model';

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
        animate('500ms 0.5s', style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate('500ms 0.5s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class TransactionComponent implements OnInit {

  public alert: Alert;
  public identity: User;
  public transaction: Transaction;
  public CONST_UNIT: Number = 1000000000000000000;
  public nodeInformation: NodeInformation;

  constructor(
    private _walletService: WalletService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.alert = new Alert();
    this.identity = new User().loadLocal();
    this.nodeInformation = new NodeInformation();
    this._route.params.subscribe(params => {
      const wallet = new Wallet({ _id: params['walletId'] });
      this.transaction = new Transaction({ _id: params['transactionId'], wallet: wallet }).get(this._walletService);
    });
  }

  ngOnInit(): void {
    this.nodeInformation.suscribeChanges();
  }

  copyToClipboard(): void {
    this.alert.success('Transaction hash copied to Clipboard Successfully');
  }

  back(): void {
    this._router.navigate(['/account/wallet/', this.transaction.wallet._id]);
  }

  calculateTimeText(): String {
    const now = new Date();
    let delta = Math.abs(<any>(now) - <any>(new Date(<any>(this.transaction.timeStamp) * 1000))) / 1000;

    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

    const hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    const seconds = delta % 60;
    return <any>days + ' days ' + <any>hours + ' hours ago';
  }
}
