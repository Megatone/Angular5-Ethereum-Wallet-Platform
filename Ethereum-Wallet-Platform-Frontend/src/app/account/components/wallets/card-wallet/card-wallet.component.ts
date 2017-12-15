import { Component, Input } from '@angular/core';
import { Wallet } from '../../../../models/wallet.model';
import { WalletService } from '../../../../services/wallet/wallet.service';
import { User } from '../../../../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-card-wallet',
  templateUrl: './card-wallet.component.html',
  styleUrls: ['./card-wallet.component.css']
})
export class CardWalletComponent implements OnInit {

  @Input() public wallet: Wallet;
  @Input() identity: User;
  @Input() usd: Number;

  constructor(
    private _walletService: WalletService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getWallet();
  }

  getWallet(): void {
    this.wallet = new Wallet(this.wallet).get(this._walletService);
  }

  openWallet(): void {
    if (!this.wallet.refreshing) {
      this._router.navigate(['/account/wallet/', this.wallet._id]);
    }
  }
}
