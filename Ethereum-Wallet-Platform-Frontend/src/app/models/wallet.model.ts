import { Transaction } from "./transaction.model";

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
  public transactions : Array<Transaction>;

  constructor(_wallet: any = {}) {
    let _this = <Wallet>_wallet;
    this._id = _this._id;
    this.address = _this.address;
    this.password = _this.password;
    this.balance = _this.balance;
    this.registerDate = _this.registerDate;
    this.updateDate = _this.updateDate;
    this.user = _this.user;
    this.name = _this.name;
    this.refreshing = _this.refreshing;
    this.transactions = _this.transactions;
  }
}
