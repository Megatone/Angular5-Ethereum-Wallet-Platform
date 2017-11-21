import { Wallet } from "./wallet.model";
import { User } from "./user.model";

export class Transaction {
  public _id : String;
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
  public user : User;
  public wallet : Wallet;


  constructor(transaction: any = {}) {
    let _this = <Transaction>transaction;
    this._id = _this._id;
    this.blockNumber = _this.blockNumber;
    this.timeStamp = _this.timeStamp;
    this.hash = _this.hash;
    this.nonce = _this.nonce;
    this.blockHash = _this.blockHash;
    this.transactionIndex = _this.transactionIndex;
    this.from = _this.from;
    this.to = _this.to;
    this.value = _this.value;
    this.gas = _this.gas;
    this.gasPrice = _this.gasPrice;
    this.isError = _this.isError;
    this.txreceipt_status = _this.txreceipt_status;
    this.input = _this.input;
    this.contractAddress = _this.contractAddress;
    this.cumulativeGasUsed = _this.cumulativeGasUsed;
    this.gasUsed = _this.gasUsed;
    this.confirmations = _this.confirmations;
    this.user = <User>_this.user;
    this.wallet = <Wallet>_this.wallet;
  }

}
