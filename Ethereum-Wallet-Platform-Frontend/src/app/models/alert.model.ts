import { Router } from '@angular/router';
export class Alert {

  public message: String;
  public type: String;
  public status: boolean;
  public redirect: boolean;
  public url: String;

  constructor(alert: any = {}) {
    this.load(alert);
  }

  public load(alert: any = {}) {
    const _this = <Alert>alert;
    this.message = _this.message ? _this.message : '';
    this.type = _this.type ? _this.type : '';
    this.status = _this.status ? _this.status : false;
    this.redirect = _this.redirect ? _this.redirect : false;
    this.url = _this.url ? _this.url : '';
  }

  public error(message: String, redirect: Boolean = false, url: String = ''): Alert {
    this.load({ type: 'error', message, status: true, redirect, url });
    this.saveLocal();
    return this;
  }

  public success(message: String, redirect: Boolean = false, url: String = ''): Alert {
    this.load({ type: 'success', message, status: true, redirect, url });
    this.saveLocal();
    return this;
  }

  public info(message: String, redirect: Boolean = false, url: String = ''): Alert {
    this.load({ type: 'info', message, status: true, redirect, url });
    this.saveLocal();
    return this;
  }

  public warning(message: String, redirect: Boolean = false, url: String = ''): Alert {
    this.load({ type: 'warning', message, status: true, redirect, url });
    this.saveLocal();
    return this;
  }

  public show(): Alert {
    this.status = true;
    return this;
  }

  public hide(): Alert {
    this.status = false;
    return this;
  }

  public suscribeChanges(router: Router): void {
    $(window).bind('emitAlert', () => {
      this.loadLocal();
      if (this.redirect === true) {
        setTimeout(() => { router.navigate([this.url]); }, 1500);
      }
    });
  }

  public saveLocal(): void {
    localStorage.setItem('alert', JSON.stringify(this));
    $(window).trigger($.Event('emitAlert'));
  }

  public loadLocal(): Alert {
    const alert = JSON.parse(localStorage.getItem('alert'));
    this.load((alert !== null) ? alert : {});
    return this;
  }

}
