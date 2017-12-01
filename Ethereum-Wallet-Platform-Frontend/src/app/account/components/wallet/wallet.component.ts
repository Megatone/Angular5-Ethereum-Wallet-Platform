import { Component } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Wallet } from '../../../models/wallet.model';
import { WalletService } from '../../../services/wallet/wallet.service';
import { User } from '../../../models/user.model';
import { MatDialog } from '@angular/material';
import { WalletNameDialogComponent } from '../../dialogs/wallet-name-dialog/wallet-name-dialog.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { RemoveWalletDialogComponent } from '../../dialogs/remove-wallet-dialog/remove-wallet-dialog.component';
import { Transaction } from '../../../models/transaction.model';
import { NodeInformation } from '../../../models/nodeInformation.model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';



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
        animate('500ms 0.5s', style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate('500ms 0.5s', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class WalletComponent implements OnInit {

  public status: string;
  public message: string;
  public identity: User;
  public wallet: Wallet;
  public WalletId: String;
  public nodeInformation: NodeInformation;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _walletService: WalletService,
    public dialog: MatDialog
  ) {
    this.identity = new User().loadLocal();
    this.nodeInformation = new NodeInformation();
    this.wallet = new Wallet(this._walletService);
    this._route.params.subscribe(params => {
      this.WalletId = params['walletId'];
    });
  }

  ngOnInit(): void {
    this.nodeInformation.suscribeChanges();
    this.getWallet();
  }

  getWallet(): void {
    this.wallet.get(this.identity, this.WalletId);
  }

  editName(): void {
    this.status = null;
    this.message = null;
    const dialogRef = this.dialog.open(WalletNameDialogComponent, {
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
        );
      }
    });
  }

  removeWallet(): void {
    this.message = null;
    this.status = null;
    const dialogRef = this.dialog.open(RemoveWalletDialogComponent, {
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
            setTimeout(() => { this._router.navigate(['/account/wallets']); }, 1500);
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
    this._router.navigate(['/account/wallet/' + this.wallet._id + '/transaction/' + transaction._id]);
  }

  copyToClipboard(): void {
    this.message = null;
    this.status = null;
    this.message = 'Address copied to Clipboard Successfully';
    this.status = 'success';
  }

  calculateTimeText(transaction: Transaction): String {
    const now = new Date();
    let delta = Math.abs(<any>(now) - <any>(new Date(<any>(transaction.timeStamp) * 1000))) / 1000;

    // calculate (and subtract) whole days
    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    const hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // what's left is seconds
    const seconds = delta % 60;
    return <any>days + ' days ' + <any>hours + ' hours ago';
  }
}
