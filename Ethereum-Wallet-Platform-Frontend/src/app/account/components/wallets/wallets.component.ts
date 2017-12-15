import { Component, Inject, OnInit } from '@angular/core';
import { DecimalPipe, NgClass } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { WalletService } from '../../../services/wallet/wallet.service';
import { User } from '../../../models/user.model';
import { Wallet } from '../../../models/wallet.model';
import { forEach } from '@angular/router/src/utils/collection';
import { MatDialog } from '@angular/material';
import { NewWalletDialogComponent } from '../../dialogs/new-wallet-dialog/new-wallet-dialog.component';
import { NodeInformation } from '../../../models/nodeInformation.model';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css'],
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

export class WalletsComponent implements OnInit {

  public identity: User;
  public wallets: Array<Wallet>;
  public nodeInformation: NodeInformation;
  public refreshing: Boolean;

  constructor(
    private _walletService: WalletService,
    private _route: ActivatedRoute,
    private _router: Router,
    public dialog: MatDialog
  ) {
    this.identity = new User().loadLocal();
    this.nodeInformation = new NodeInformation().loadLocal();
    this.getWallets();
  }

  ngOnInit(): void {
    this.nodeInformation.suscribeChanges();
  }
  getWallets(): void {
    this.identity.getWallets(this._walletService);
  }

  openDialogNewWallet(): void {
    const dialogRef = this.dialog.open(NewWalletDialogComponent, {
      width: '100%',
      panelClass: ['container', 'dialog-container'],
      data: { wallet: { name: 'account' } }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.identity.createNewWallet(this._walletService, <Wallet>result);
      }
    });
  }
}

