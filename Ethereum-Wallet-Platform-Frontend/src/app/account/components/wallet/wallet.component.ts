import { Component } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Wallet } from '../../../models/wallet.model';
import { WalletService } from '../../../services/wallet/wallet.service';
import { User } from '../../../models/user.model';
import { EthInfo } from '../../../models/ethInfo.model';
import { MatDialog } from '@angular/material';
import { WalletNameDialogComponent } from '../../dialogs/wallet-name-dialog/wallet-name-dialog.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { RemoveWalletDialogComponent } from '../../dialogs/remove-wallet-dialog/remove-wallet-dialog.component';
import { Transaction } from '../../../models/transaction.model';



@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],
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

export class WalletComponent {

  public status: string;
  public message: string;
  public identity: User;
  public wallet: Wallet = new Wallet({});
  public WalletId: String;
  public ethInfo: EthInfo = new EthInfo({});

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _walletService: WalletService,
    public dialog: MatDialog
  ) {
    this.getEthInfo();
    this.identity = new User({}).loadLocal();
    this._route.params.subscribe(params => {
      this.WalletId = params['walletId'];
      this.getWallet();
    });
  }

  getWallet(): void {
    this._walletService.getWallet(this.identity, this.WalletId).subscribe(
      response => {
        this.wallet = (response && response.wallet) ? new Wallet(response.wallet) : this.wallet;
        if (!this.wallet.refreshing) {
          this.refreshBalance();
          this.getTransactions();
        }
      }, error => {
        this.status = 'error';
        this.message = error.json().message;
      }
    );
  }

  refreshBalance(): void {
    this.wallet.refreshing = true;
    this._walletService.getBalance(this.identity, this.wallet._id).subscribe(
      response => {
        this.wallet.balance = (response.balance) ? response.balance : 0;
        setTimeout(() => {
          this.wallet.refreshing = false;
        }, 1000);
      }, error => {
        this.status = 'error';
        this.message = error.json().message;
      }
    )
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

  editName(): void {
    this.status = null;
    this.message = null;
    let dialogRef = this.dialog.open(WalletNameDialogComponent, {
      width: '100%',
      panelClass: ['container', 'dialog-container'],
      data: { name: this.wallet.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.wallet.name = result;
        this._walletService.updateWalletName(this.identity, this.wallet).subscribe(
          response => {
            this.status = 'success';
            this.message = response.message;
            this.getWallet();
          }, error => {
            this.status = 'error';
            this.message = error.json().message;
          }
        )
      }
    });
  }

  getTransactions(): void {
    this._walletService.getTransactions(this.identity, this.wallet).subscribe(
      response => {
        this.wallet.transactions = response.transactions;
      }, error => {
        this.status = 'error';
        this.message = error.json().message;
      }
    )
  }

  removeWallet(): void {
    this.message = null;
    this.status = null;
    let dialogRef = this.dialog.open(RemoveWalletDialogComponent, {
      width: '100%',
      panelClass: ['container', 'dialog-container'],
      data: {
        wallet: this.wallet,
        user: this.identity
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._walletService.removeWallet(this.identity, this.wallet).subscribe(
          response => {
            this.status = 'success';
            this.message = response.message;
            setTimeout(() => { this._router.navigate(['/account/wallets']) }, 1500);
          }, error => {
            this.status = 'error';
            this.message = error.json().message;
          }
        );
      }
    });
  }

  back(): void {
    this._router.navigate(['/account/wallets']);
  }

  openTransaction(transaction: Transaction): void {
    console.log(transaction);
    this._router.navigate(['/account/wallet/' + this.wallet._id + '/transaction/' + transaction._id]);
  }

  copyToClipboard(): void {
    this.message = null;
    this.status = null;
    this.message = 'Address copied to Clipboard Successfully';
    this.status = 'success';
  }

  calculateTimeText(transaction: Transaction): String {
    var now = new Date();
    var delta = Math.abs(<any>(now) - <any>(new Date(<any>(transaction.timeStamp) * 1000))) / 1000;

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
