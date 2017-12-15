import { Component, OnInit } from '@angular/core';
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
import { Alert } from '../../../models/alert.model';


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

  public alert: Alert;
  public identity: User;
  public wallet: Wallet;
  public nodeInformation: NodeInformation;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _walletService: WalletService,
    public dialog: MatDialog
  ) {
    this.alert = new Alert();
    this.identity = new User().loadLocal();
    this.nodeInformation = new NodeInformation();
    this._route.params.subscribe(params => {
      this.wallet = new Wallet({ _id: params['walletId'], user: this.identity });
    });
  }

  ngOnInit(): void {
    this.nodeInformation.suscribeChanges();
    this.alert.suscribeChanges(this._router);
    this.getWallet();
  }

  getWallet(): void {
    this.wallet.get(this._walletService);
  }

  editName(): void {
    const dialogRef = this.dialog.open(WalletNameDialogComponent, {
      width: '100%',
      panelClass: ['container', 'dialog-container'],
      data: { wallet: Object.assign({}, this.wallet) }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.wallet.updateName(this._walletService, result.wallet.name);
      }
    });
  }

  removeWallet(): void {
    const dialogRef = this.dialog.open(RemoveWalletDialogComponent, {
      width: '100%',
      panelClass: ['container', 'dialog-container'],
      data: {
        wallet: Object.assign({}, this.wallet),
        user: Object.assign({}, this.identity)
      }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.wallet.remove(this._walletService, result.user.password);
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
    this.alert.success('Address copied to Clipboard Successfully');
  }

  calculateTimeText(transaction: Transaction): String {
    try {
      const now = new Date();
      let delta = Math.abs(<any>(now) - <any>(new Date(<any>(transaction.timeStamp) * 1000))) / 1000;
      const days = Math.floor(delta / 86400);
      delta -= days * 86400;
      const hours = Math.floor(delta / 3600) % 24;
      delta -= hours * 3600;
      const seconds = delta % 60;
      return <any>days + ' days ' + <any>hours + ' hours ago';
    } catch (err) {
    }
  }

  send(): void {

  }
}
