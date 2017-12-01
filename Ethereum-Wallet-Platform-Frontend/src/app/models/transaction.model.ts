import { Wallet } from './wallet.model';
import { User } from './user.model';
import { WalletService } from '../services/wallet/wallet.service';

export class Transaction {
  public _id: String;
  public blockNumber: Number;
  public timeStamp: Number;
  public hash: String;
  public nonce: Number;
  public blockHash: String;
  public transactionIndex: Number;
  public from: String;
  public to: String;
  public value: Number;
  public gas: Number;
  public gasPrice: Number;
  public isError: Number;
  public txreceipt_status: Number;
  public input: String;
  public contractAddress: String;
  public cumulativeGasUsed: Number;
  public gasUsed: Number;
  public confirmations: Number;
  public user: User;
  public wallet: Wallet;
  private walletService: WalletService;

  constructor(_walletService: WalletService, transaction: any = {}) {
    this.walletService = _walletService;
    this.load(transaction);
  }

  public load(transaction: any = {}): void {
    const _this = <Transaction>transaction;
    this._id = _this._id ? _this._id : '';
    this.blockNumber = _this.blockNumber ? _this.blockNumber : 0;
    this.timeStamp = _this.timeStamp ? _this.timeStamp : 0;
    this.hash = _this.hash ? _this.hash : '';
    this.nonce = _this.nonce ? _this.nonce : 0;
    this.blockHash = _this.blockHash ? _this.blockHash : '';
    this.transactionIndex = _this.transactionIndex ? _this.transactionIndex : 0;
    this.from = _this.from ? _this.from : '';
    this.to = _this.to ? _this.to : '';
    this.value = _this.value ? _this.value : 0;
    this.gas = _this.gas ? _this.gas : 0;
    this.gasPrice = _this.gasPrice ? _this.gasPrice : 0;
    this.isError = _this.isError ? _this.isError : 0;
    this.txreceipt_status = _this.txreceipt_status ? _this.txreceipt_status : 0;
    this.input = _this.input ? _this.input : '';
    this.contractAddress = _this.contractAddress ? _this.contractAddress : '';
    this.cumulativeGasUsed = _this.cumulativeGasUsed ? _this.cumulativeGasUsed : 0;
    this.gasUsed = _this.gasUsed ? _this.gasUsed : 0;
    this.confirmations = _this.confirmations ? _this.confirmations : 0;
    this.user = <User>_this.user ? _this.user : new User();
    this.wallet = <Wallet>_this.wallet ? _this.wallet : new Wallet(this.walletService);
  }

  public get(user: User, walletId: String, transactionId: String): void {
    this.wallet._id = walletId;
    this._id = transactionId;
    this.walletService.getTransaction(user, this).subscribe(
      response => {
        this.load(response.transaction);
      }
    );
  }

}
