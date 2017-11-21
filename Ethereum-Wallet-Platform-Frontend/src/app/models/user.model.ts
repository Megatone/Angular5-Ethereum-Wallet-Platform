import { Country } from './country.model';

export class User {

  public _id: string;
  public name: String;
  public surname: String;
  public email: String;
  public password: String;
  public role: String;
  public phone: String;
  public country: Country;
  public address: String;
  public registerDate: String;
  public updateDate: String;
  public lastLogin: String;
  public token: String;
  public totp: {
    active: Boolean
  };
  constructor(identity: any = {}, token: String = null) {
    this.load(identity);
    this.token = token;
  }

  public saveLocal(): void {
    localStorage.setItem('identity', JSON.stringify(this));
  }

  public loadLocal(): User {
    let identity: any = JSON.parse(localStorage.getItem('identity'));
    if (identity === null)
      return null;
    this.load(identity);
    return this;
  }

  public removeLocal(): User {
    localStorage.removeItem('identity');
    return null;
  }

  private load(identity: any = {}) {
    try {
      let _this = <User>identity;
      this._id = _this._id;
      this.name = _this.name;
      this.surname = _this.surname;
      this.email = _this.email;
      this.password = _this.password;
      this.role = _this.role;
      this.phone = _this.phone;
      this.country = <Country>_this.country;
      this.address = _this.address;
      this.registerDate = _this.registerDate;
      this.updateDate = _this.updateDate;
      this.lastLogin = _this.lastLogin;
      this.token = _this.token;
      this.totp = _this.totp;
    } catch (err) {
    }
  }

}
