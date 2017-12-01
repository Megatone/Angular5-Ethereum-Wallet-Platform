import { NodeService } from '../services/node/node.service';

export class NodeInformation {

  public users: Number;
  public wallets: Number;
  public transactions: Number;
  public pendingBlocks: Number;
  public percentProgress: Number;
  public price_usd: Number;
  public price_btc: Number;
  public last_update: Date;

  constructor(_nodeInformation: any = {}) {
    this.load(_nodeInformation);
  }

  public load(_nodeInformation: any = {}) {
    const _this = <NodeInformation>_nodeInformation;
    this.users = _this.users ? _this.users : 0;
    this.wallets = _this.wallets ? _this.wallets : 0;
    this.transactions = _this.transactions ? _this.transactions : 0;
    this.pendingBlocks = _this.pendingBlocks ? _this.pendingBlocks : 0;
    this.percentProgress = _this.percentProgress ? _this.percentProgress : 0;
    this.price_usd = _this.price_usd ? _this.price_usd : 0;
    this.price_btc = _this.price_btc ? _this.price_btc : 0;
    this.last_update = new Date();
  }

  public suscribeChanges(): void {
    $(window).bind('emitNodeInformation', () => { this.loadLocal(); });
  }

  public initSocket(_nodeService: NodeService): void {
    _nodeService.getNodeInformation().subscribe(nodeInformation => {
      this.load(nodeInformation);
      this.saveLocal();
    });
  }

  public saveLocal(): void {
    localStorage.setItem('nodeInformation', JSON.stringify(this));
    $(window).trigger($.Event('emitNodeInformation'));
  }

  public loadLocal(): NodeInformation {
    const nodeInformation = JSON.parse(localStorage.getItem('nodeInformation'));
    this.load((nodeInformation !== null) ? nodeInformation : {});
    return this;
  }

}
