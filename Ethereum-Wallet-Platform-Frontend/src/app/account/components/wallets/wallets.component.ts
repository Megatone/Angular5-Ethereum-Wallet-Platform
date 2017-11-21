import { Component, Inject, OnInit } from '@angular/core';
import { DecimalPipe, NgClass } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { WalletService } from '../../../services/wallet/wallet.service';
import { User } from '../../../models/user.model';
import { Wallet } from '../../../models/wallet.model';
import { forEach } from '@angular/router/src/utils/collection';
import { EthInfo } from '../../../models/ethInfo.model';

import { MatDialog } from '@angular/material';
import { NewWalletDialogComponent } from '../../dialogs/new-wallet-dialog/new-wallet-dialog.component';

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
  public ethInfo: EthInfo = new EthInfo();
  public refreshing : Boolean;


  constructor(
    private _walletService: WalletService,
    private _route: ActivatedRoute,
    private _router: Router,
    public dialog: MatDialog
  ) {
    this.identity = new User({}).loadLocal();
    this.getWallets();

  }

  ngOnInit() {

  }

  getWallets() {
    this.refreshing = true;
    this.getEthInfo();
    this._walletService.getWallets(this.identity).subscribe(
      response => {
        this.wallets = (response.wallets) ? response.wallets : [];
        this.wallets.forEach(wallet => {
          this.refreshBalance(wallet);
        });
        this.refreshing = false;
      }
    )
  }

  refreshBalance(wallet: Wallet) {
    wallet.refreshing = true;
    this._walletService.getBalance(this.identity, wallet._id).subscribe(
      response => {
        wallet.balance = (response.balance) ? response.balance : 0;
        setTimeout(function () {
          wallet.refreshing = false
        }, 1000);
      }
    )
  }

  openWallet(wallet) {
    if (!wallet.refreshing)
      this._router.navigate(['/account/wallet/', wallet._id]);
  }

  getEthInfo() {
    this._walletService.getEthInfo().subscribe(
      response => {
        this.ethInfo = (response.ethInfo) ? response.ethInfo : this.ethInfo;
      },
      error => {

      }
    );
  }

  openDialogNewWallet() {
    let dialogRef = this.dialog.open(NewWalletDialogComponent, {
      width: '100%',
      panelClass: ['container', 'dialog-container'],
      data: { wallet: new Wallet({})}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._walletService.newWallet(this.identity, result).subscribe(
          response => {
            if (response && response.wallet)
              this.getWallets();
          },
          error => {
          }
        )
      }
    });
  }
}

