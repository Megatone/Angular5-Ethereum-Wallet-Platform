export class EthInfo {

  public id: String;
  public name: String;
  public symbol: String;
  public rank: Number;
  public price_usd: Number;
  public price_btc: Number;
  public day_volume_usd: Number;
  public market_cap_usd: Number;
  public available_supply: Number;
  public total_supply: Number;
  public max_supply: Number;
  public percent_change_1h: Number;
  public percent_change_24h: Number;
  public percent_change_7d: Number;
  public last_updated: Number;

  constructor(_ethInfo: any = {}) {
    let _this = <EthInfo>_ethInfo;
    this.id = _this.id;
    this.name = _this.name;
    this.symbol = _this.symbol;
    this.rank = _this.rank;
    this.price_usd = _this.price_usd;
    this.price_btc = _this.price_btc;
    this.day_volume_usd = _this.day_volume_usd;
    this.market_cap_usd = _this.market_cap_usd;
    this.available_supply = _this.available_supply;
    this.total_supply = _this.total_supply;
    this.max_supply = _this.max_supply;
    this.percent_change_1h = _this.percent_change_1h;
    this.percent_change_24h = _this.percent_change_24h;
    this.percent_change_7d = _this.percent_change_7d;
    this.last_updated = _this.last_updated;
  }



}
