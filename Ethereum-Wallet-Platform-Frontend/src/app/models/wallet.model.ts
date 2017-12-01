import { Transaction } from './transaction.model';
import { WalletService } from '../services/wallet/wallet.service';
import { User } from './user.model';

export class Wallet {

  public _id: String;
  public address: String;
  public password: String;
  public balance: Number;
  public registerDate: String;
  public updateDate: String;
  public user: String;
  public name: String;
  public refreshing: boolean;
  public transactions: Array<Transaction>;
  private walletService: WalletService;

  constructor(_walletService: WalletService, _wallet: any = {}) {
    this.walletService = _walletService;
    this.load(_wallet);
  }

  public load(_wallet: any = {}): void {
    const _this = <Wallet>_wallet;
    this._id = _this._id ? _this._id : '';
    this.address = _this.address ? _this.address : '';
    this.password = _this.password ? _this.password : '';
    this.balance = _this.balance ? _this.balance : 0;
    this.registerDate = _this.registerDate ? _this.registerDate : '';
    this.updateDate = _this.updateDate ? _this.updateDate : '';
    this.user = _this.user ? _this.user : '';
    this.name = _this.name ? _this.name : '';
    this.refreshing = _this.refreshing !== undefined ? _this.refreshing : false;
    this.transactions = _this.transactions ? _this.transactions : [];
  }

  public get(user: User, walletId: String): void {
    this.refreshing = true;
    this.walletService.getWallet(user, walletId).subscribe(response => {
      this.load(response.wallet);
      this.refreshBalance(user);
      this.getTransactions(user);
      this.refreshing = false;
    });
  }

  public getTransactions(user: User): void {
    this.refreshing = true;
    this.walletService.getTransactions(user, this).subscribe(
      response => {
        this.transactions = response.transactions;
        this.refreshing = false;
      }
    );
  }

  public refreshBalance(user: User): void {
    this.refreshing = true;
    this.walletService.getBalance(user, this).subscribe(
      response => {
        this.balance = response.balance;
        this.refreshing = false;
      }
    );
  }
}
