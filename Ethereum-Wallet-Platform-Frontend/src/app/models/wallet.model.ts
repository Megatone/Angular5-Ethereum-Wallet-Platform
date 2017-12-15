import { Transaction } from './transaction.model';
import { WalletService } from '../services/wallet/wallet.service';
import { User } from './user.model';
import { Alert } from './alert.model';

export class Wallet {

  public _id: String;
  public address: String;
  public password: String;
  public balance: Number;
  public registerDate: String;
  public updateDate: String;
  public user: User;
  public name: String;
  public refreshing: boolean;
  public transactions: Array<Transaction>;
  public alert: Alert;

  constructor(_wallet: any = {}) {
    this.load(_wallet);
    this.alert = new Alert();
  }

  public load(_wallet: any = {}): void {
    const _this = <Wallet>_wallet;
    this._id = _this._id ? _this._id : '';
    this.address = _this.address ? _this.address : '';
    this.password = _this.password ? _this.password : '';
    this.balance = _this.balance ? _this.balance : 0;
    this.registerDate = _this.registerDate ? _this.registerDate : '';
    this.updateDate = _this.updateDate ? _this.updateDate : '';
    this.user = _this.user ? _this.user : new User();
    this.name = _this.name ? _this.name : '';
    this.refreshing = _this.refreshing !== undefined ? _this.refreshing : true;
    this.transactions = _this.transactions ? _this.transactions : [];
  }

  public get(walletService: WalletService): Wallet {
    walletService.getWallet(this).subscribe(response => {
      this.refreshing = true;
      this.load(response.wallet);
      this.refreshBalance(walletService);
      this.getTransactions(walletService);
    }, error => {
      this.alert.error(error.json().message);
    });
    return this;
  }

  public getTransactions(walletService: WalletService): Wallet {
    walletService.getTransactions(this).subscribe(response => {
      this.transactions = response.transactions;
    }, error => {
      this.alert.error(error.json().message);
    });
    return this;
  }

  public refreshBalance(walletService: WalletService): Wallet {
    walletService.getBalance(this).subscribe(response => {
      this.balance = response.balance;
      setTimeout(() => { this.refreshing = false; }, 1500);
    }, error => {
      this.alert.error(error.json().message);
    });
    return this;
  }

  public remove(walletService: WalletService, password: String): Wallet {
    walletService.removeWallet(this, password).subscribe(response => {
      this.refreshing = true;
      this.alert.success(response.message, true, '/account/wallets');
      this.load({});
      setTimeout(() => { this.refreshing = false; }, 1500);
    }, error => {
      this.alert.error(error.json().message);
    });
    return this;
  }

  public updateName(walletService: WalletService, newName: String): Wallet {
    walletService.updateWalletName(this, newName).subscribe(response => {
      this.refreshing = true;
      this.alert.success(response.message);
      setTimeout(() => { this.name = newName; this.refreshing = false; }, 1500);
    }, error => {
      this.alert.error(error.json().message);
    });
    return this;
  }


}
