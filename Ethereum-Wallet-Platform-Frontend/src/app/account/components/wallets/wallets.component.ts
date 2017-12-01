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


@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css'],
  providers: [
    WalletService
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
    this.refreshing = true;
    this._walletService.getWallets(this.identity).subscribe(
      response => {
        this.wallets = (response.wallets) ? response.wallets : [];
      }
    );
  }

  openDialogNewWallet(): void {
    const dialogRef = this.dialog.open(NewWalletDialogComponent, {
      width: '100%',
      panelClass: ['container', 'dialog-container'],
      data: { wallet: { name: 'account' } }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._walletService.newWallet(this.identity, result).subscribe(
          response => {
            if (response && response.wallet) {
              this.getWallets();
            }
          },
          error => {
          }
        );
      }
    });
  }
}

