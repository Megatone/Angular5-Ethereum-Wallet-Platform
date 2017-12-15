webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/account/account-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_account_account_component__ = __webpack_require__("../../../../../src/app/account/components/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_wallets_wallets_component__ = __webpack_require__("../../../../../src/app/account/components/wallets/wallets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_wallet_wallet_component__ = __webpack_require__("../../../../../src/app/account/components/wallet/wallet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_transaction_transaction_component__ = __webpack_require__("../../../../../src/app/account/components/transaction/transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/account/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/account/components/settings/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// components






var adminRoutes = [{
        path: 'account',
        component: __WEBPACK_IMPORTED_MODULE_2__components_account_account_component__["a" /* AccountComponent */],
        canActivate: [],
        children: [
            { path: '', redirectTo: 'wallets', pathMatch: 'full' },
            { path: 'wallets', component: __WEBPACK_IMPORTED_MODULE_3__components_wallets_wallets_component__["a" /* WalletsComponent */] },
            { path: 'wallet/:walletId', component: __WEBPACK_IMPORTED_MODULE_4__components_wallet_wallet_component__["a" /* WalletComponent */] },
            { path: 'wallet/:walletId/transaction/:transactionId', component: __WEBPACK_IMPORTED_MODULE_5__components_transaction_transaction_component__["a" /* TransactionComponent */] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__["a" /* ProfileComponent */] },
            { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_7__components_settings_settings_component__["a" /* SettingsComponent */] },
            { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__components_wallets_wallets_component__["a" /* WalletsComponent */] }
        ]
    }];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(adminRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
            ]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/account/account.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_routing_module__ = __webpack_require__("../../../../../src/app/account/account-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_module__ = __webpack_require__("../../../../../src/app/account/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_qrcode2__ = __webpack_require__("../../../../ngx-qrcode2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_clipboard__ = __webpack_require__("../../../../ngx-clipboard/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_wallets_wallets_component__ = __webpack_require__("../../../../../src/app/account/components/wallets/wallets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_wallet_wallet_component__ = __webpack_require__("../../../../../src/app/account/components/wallet/wallet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_transaction_transaction_component__ = __webpack_require__("../../../../../src/app/account/components/transaction/transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/account/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/account/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_account_account_component__ = __webpack_require__("../../../../../src/app/account/components/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dialogs_new_wallet_dialog_new_wallet_dialog_component__ = __webpack_require__("../../../../../src/app/account/dialogs/new-wallet-dialog/new-wallet-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dialogs_wallet_name_dialog_wallet_name_dialog_component__ = __webpack_require__("../../../../../src/app/account/dialogs/wallet-name-dialog/wallet-name-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dialogs_remove_wallet_dialog_remove_wallet_dialog_component__ = __webpack_require__("../../../../../src/app/account/dialogs/remove-wallet-dialog/remove-wallet-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_wallets_card_wallet_card_wallet_component__ = __webpack_require__("../../../../../src/app/account/components/wallets/card-wallet/card-wallet.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// components










var AccountModule = (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__account_routing_module__["a" /* AdminRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_clipboard__["a" /* ClipboardModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__components_wallets_wallets_component__["a" /* WalletsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_wallet_wallet_component__["a" /* WalletComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_transaction_transaction_component__["a" /* TransactionComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_16__dialogs_new_wallet_dialog_new_wallet_dialog_component__["a" /* NewWalletDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__dialogs_wallet_name_dialog_wallet_name_dialog_component__["a" /* WalletNameDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_18__dialogs_remove_wallet_dialog_remove_wallet_dialog_component__["a" /* RemoveWalletDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_wallets_card_wallet_card_wallet_component__["a" /* CardWalletComponent */]
            ],
            exports: [],
            providers: [],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_16__dialogs_new_wallet_dialog_new_wallet_dialog_component__["a" /* NewWalletDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__dialogs_wallet_name_dialog_wallet_name_dialog_component__["a" /* WalletNameDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__dialogs_remove_wallet_dialog_remove_wallet_dialog_component__["a" /* RemoveWalletDialogComponent */]
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "../../../../../src/app/account/components/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/components/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" style=\"margin-top: 2em;\">\n  <router-outlet></router-outlet>\n  <div class=\"clearfix\" style=\"padding-bottom: 12em;\"></div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/account/components/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountComponent = (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account',
            template: __webpack_require__("../../../../../src/app/account/components/account/account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/components/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* The switch - the box around the slider */\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 34px;\r\n  vertical-align: middle;\r\n}\r\n\r\n/* Hide default HTML checkbox */\r\n.switch input {display:none;}\r\n\r\n/* The slider */\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #767d94;\r\n  transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 26px;\r\n  width: 26px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: #181d31;\r\n  transition: .4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: #f5f5f5;\r\n}\r\n\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px #f5f5f5;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(26px);\r\n  transform: translateX(26px);\r\n}\r\n\r\n/* Rounded sliders */\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n.row-toggle{\r\n  margin:1em 0;\r\n  color:#767d94;\r\n}\r\n\r\n.label-toggle{\r\n  vertical-align: text-bottom;\r\n  line-height: 2em;\r\n}\r\n.form-control-dark-unsize{\r\n  width:auto !important;\r\n  display: inline !important;\r\n}\r\n\r\n.img-qr{\r\n  margin: 0 auto;\r\n  width: 265px;\r\n  height: 265px;\r\n  border: 10px solid;\r\n  display: block;\r\n}\r\n\r\n.alert{\r\n  margin:1em 0 !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6 col-centered\" style=\"padding: 0;\">\n  <div class=\"alert alert-{{status}} \" *ngIf=\"message\" [@fadeInOut]>\n    <span class=\"glyphicon glyphicon-{{ status =='success' ? 'ok' : 'remove'}}\"></span>\n    {{message}}\n  </div>\n</div>\n\n<div class=\"col-lg-6 box-dark col-centered\">\n\n  <form #editForm=\"ngForm\" (ngSubmit)=\"editProfile()\" [@fadeInOut] *ngIf=\"true\">\n\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"identity.name\" placeholder=\"Name\" class=\"form-control-dark\" required/>\n      <div class=\"form-control-error pull-right\" *ngIf=\"!name.valid\">\n        <span class=\"glyphicon glyphicon-remove\"></span>\n      </div>\n      <div class=\"form-control-success pull-right\" *ngIf=\"name.valid\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"surname\" #surname=\"ngModel\" [(ngModel)]=\"identity.surname\" placeholder=\"Surname\" class=\"form-control-dark\"\n        required/>\n      <div class=\"form-control-error pull-right\" *ngIf=\"!surname.valid\">\n        <span class=\"glyphicon glyphicon-remove\"></span>\n      </div>\n      <div class=\"form-control-success pull-right\" *ngIf=\"surname.valid\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <input type=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"identity.email\" placeholder=\"Email\" class=\"form-control-dark\"\n        pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" required/>\n      <div class=\"form-control-error pull-right\" *ngIf=\"!email.valid\">\n        <span class=\"glyphicon glyphicon-remove\"></span>\n      </div>\n      <div class=\"form-control-success pull-right\" *ngIf=\"email.valid\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <input type=\"number\" name=\"phone\" #phone=\"ngModel\" [(ngModel)]=\"identity.phone\" placeholder=\"Phone\" class=\"form-control-dark\"\n        required/>\n      <div class=\"form-control-error pull-right\" *ngIf=\"!phone.valid\">\n        <span class=\"glyphicon glyphicon-remove\"></span>\n      </div>\n      <div class=\"form-control-success pull-right\" *ngIf=\"phone.valid\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <select name=\"country\" #country=\"ngModel\" [(ngModel)]=\"identity.country.code\" class=\"form-control-dark\" required>\n        <option *ngFor=\"let country of countries\" [ngValue]=\"country.code\">{{ country.name }}</option>\n      </select>\n      <div class=\"form-control-error pull-right\" *ngIf=\"!country.valid\">\n        <span class=\"glyphicon glyphicon-remove\"></span>\n      </div>\n      <div class=\"form-control-success pull-right\" *ngIf=\"country.valid\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"address\" #address=\"ngModel\" [(ngModel)]=\"identity.address\" placeholder=\"Address\" class=\"form-control-dark\"\n        required/>\n      <div class=\"form-control-error pull-right\" *ngIf=\"!address.valid \">\n        <span class=\"glyphicon glyphicon-remove\"></span>\n      </div>\n      <div class=\"form-control-success pull-right\" *ngIf=\"address.valid \">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <input type=\"submit\" class=\"btn btn-dark pull-right\" [disabled]=\"!editForm.form.valid\" value=\"Save\" />\n      <span>&nbsp;</span>\n    </div>\n\n\n  </form>\n</div>\n\n<div class=\"col-lg-6 col-centered\" style=\"padding: 0;\">\n  <div class=\"alert alert-{{statusTowFactor}} \" *ngIf=\"messageTwoFactor\" [@fadeInOut]>\n    <span class=\"glyphicon glyphicon-{{ statusTowFactor =='success' ? 'ok' : 'remove'}}\"></span>\n    {{messageTwoFactor}}\n  </div>\n</div>\n\n<div class=\"col-lg-6 box-dark col-centered\">\n\n  <div class=\"row row-toggle\">\n    <label class=\"label-toggle\">Two Factor Authenticate Status </label>\n    <label class=\"switch pull-right\">\n      <input type=\"checkbox\" [(ngModel)]=\"identity.totp.active\" [disabled]=\"true\">\n      <span class=\"slider round\"></span>\n    </label>\n  </div>\n  <hr>\n  <div class=\"row row-toggle\" *ngIf=\"!identity.totp.active && !qr_code\" [@fadeInOut]>\n    <p>To enable two factor authentication , enter the password and push configure button</p>\n    <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"identity.password\" placeholder=\"Password\" class=\"form-control-dark form-control-dark-unsize\"\n      pattern=\".{4,50}\" required/>\n    <button class=\"btn btn-dark \" (click)=\"configure2A()\">Configure</button>\n  </div>\n\n  <div class=\"row-fluid row-toggle\" *ngIf=\"!identity.totp.active && qr_code\" [@fadeInOut]>\n    <p>Now you need scan Qr code with your Latch Application and enter then pin code to verify two factor and enable this</p>\n    <div class=\"row row-toggle\">\n      <h1>\n        <img src=\"{{qr_code}}\" class=\"img-qr\">\n      </h1>\n    </div>\n    <input type=\"text\" name=\"code\" #password=\"ngModel\" [(ngModel)]=\"code\" placeholder=\"Pin Code\" class=\"form-control-dark form-control-dark-unsize\"\n      pattern=\".{3,50}\" required>\n    <button class=\"btn btn-dark \" (click)=\"enable2A()\">Verify Code</button>\n  </div>\n\n  <div class=\"row row-toggle\" *ngIf=\"identity.totp.active\" [@fadeInOut]>\n    <p>To disable two factor authentication , enter the password and push configure button</p>\n    <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"identity.password\" placeholder=\"Password\" class=\"form-control-dark form-control-dark-unsize\"\n      pattern=\".{4,50}\" required/>\n    <button class=\"btn btn-dark \" (click)=\"disable2A()\">Disable</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/account/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(_userService) {
        this._userService = _userService;
        this.identity = new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */]({});
        this.identity = new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */]({}).loadLocal();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getCountries().subscribe(function (response) {
            _this.countries = (response.countries) ? response.countries : [];
        }, function (error) {
            _this.status = 'error';
            _this.message = error.json().message;
            _this.countries = [];
        });
    };
    ProfileComponent.prototype.editProfile = function () {
        var _this = this;
        this.status = null;
        this.identity.country = this.getCountryByCode(this.identity.country.code);
        this._userService.updateUserProfile(this.identity).subscribe(function (response) {
            _this.status = (response.message) ? 'success' : null;
            _this.message = (response.message) ? response.message : '';
            _this.identity = new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */](response.user, response.token);
            _this.identity.saveLocal();
        }, function (error) {
            var errorMessage = JSON.parse(error._body).message;
            _this.status = 'error';
            _this.message = (errorMessage) ? errorMessage : 'Error';
        });
    };
    ProfileComponent.prototype.getCountryByCode = function (code) {
        return this.countries.filter(function (c) { return c.code === code; })[0];
    };
    ProfileComponent.prototype.configure2A = function () {
        var _this = this;
        this.statusTowFactor = null;
        this.messageTwoFactor = null;
        if (this.validatePassword())
            this._userService.configure2A(this.identity).subscribe(function (response) {
                _this.statusTowFactor = (response.message) ? 'success' : null;
                _this.messageTwoFactor = (response.message) ? response.message : '';
                _this.qr_code = (response.qr_code) ? response.qr_code : null;
                _this.identity.password = '';
            }, function (error) {
                var errorMessage = JSON.parse(error._body).message;
                _this.statusTowFactor = 'error';
                _this.messageTwoFactor = (errorMessage) ? errorMessage : 'Error';
                _this.identity.password = '';
                _this.code = null;
                _this.qr_code = null;
            });
    };
    ProfileComponent.prototype.enable2A = function () {
        var _this = this;
        this.statusTowFactor = null;
        this.messageTwoFactor = null;
        if (this.validateCode())
            this._userService.enable2A(this.identity, this.code).subscribe(function (response) {
                _this.statusTowFactor = (response.message) ? ((response.result === true) ? 'success' : 'error') : null;
                _this.messageTwoFactor = (response.message) ? response.message : '';
                _this.identity.totp.active = (response.result) ? response.result : false;
                _this.identity.password = '';
                _this.qr_code = null;
                _this.code = null;
                _this.identity.saveLocal();
            }, function (error) {
                var errorMessage = JSON.parse(error._body).message;
                _this.statusTowFactor = 'error';
                _this.messageTwoFactor = (errorMessage) ? errorMessage : 'Error';
                _this.identity.password = '';
                _this.code = null;
                _this.qr_code = null;
            });
    };
    ProfileComponent.prototype.disable2A = function () {
        var _this = this;
        this.statusTowFactor = null;
        this.messageTwoFactor = null;
        if (this.validatePassword())
            this._userService.disable2A(this.identity).subscribe(function (response) {
                _this.statusTowFactor = (response.message) ? ((response.result === false) ? 'success' : 'error') : null;
                _this.messageTwoFactor = (response.message) ? response.message : '';
                _this.identity.totp.active = (response.result != null) ? response.result : true;
                _this.identity.password = '';
                _this.qr_code = null;
                _this.code = null;
                _this.identity.saveLocal();
            }, function (error) {
                var errorMessage = JSON.parse(error._body).message;
                _this.statusTowFactor = 'error';
                _this.messageTwoFactor = (errorMessage) ? errorMessage : 'Error';
                _this.identity.password = '';
                _this.code = null;
                _this.qr_code = null;
            });
    };
    ProfileComponent.prototype.validatePassword = function () {
        if (!this.identity.password) {
            this.statusTowFactor = 'error';
            this.messageTwoFactor = 'Password field is required';
            return false;
        }
        if (!(this.identity.password.length > 3)) {
            this.statusTowFactor = 'error';
            this.messageTwoFactor = 'Password field minimun 4 characters required';
            return false;
        }
        return true;
    };
    ProfileComponent.prototype.validateCode = function () {
        if (!this.code) {
            this.statusTowFactor = 'error';
            this.messageTwoFactor = 'Pin code field is required';
            return false;
        }
        if (!(this.code.toString().length > 3)) {
            this.statusTowFactor = 'error';
            this.messageTwoFactor = 'Pin code field minimun 4 numbers required';
            return false;
        }
        return true;
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/account/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/components/profile/profile.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */]
            ],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* trigger */])('fadeInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])("500ms 0.5s", Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])(0, Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ opacity: 0 }))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* trigger */])('fadeOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])(500, Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* style */])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_user_service__["a" /* UserService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account/components/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/components/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/account/components/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/account/components/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/components/settings/settings.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account/components/transaction/transaction.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar-wallets > ul > li,\r\n.sidebar-wallets > ul > li> a,\r\n.sidebar-wallets > ul {\r\n    border-radius: 0;\r\n}\r\n.sidebar-wallets > ul > li> a {\r\n    cursor: pointer;\r\n    background: transparent;\r\n    border-left: 3px solid transparent;\r\n    border-right: 3px solid transparent;\r\n    transition: all 300ms;\r\n    color: #767d94;\r\n}\r\n.sidebar-wallets > ul > li:hover> a {\r\n    background: transparent;\r\n    border-left: 3px solid #767d94;\r\n    border-right: 3px solid #767d94;\r\n    color: white;\r\n}\r\n.sidebar-header span,\r\n.sidebar-wallets > ul > li> a > span,\r\n.ul-eth-info > li > span {\r\n    margin-right: 10px;\r\n}\r\n.sidebar-header {\r\n    padding: 1em;\r\n    background: #090f21;\r\n    border-top: 1px solid #767d94;\r\n    border-bottom: 1px solid #767d94;\r\n}\r\n.ul-eth-info {\r\n    padding: 1em;\r\n}\r\n.ul-eth-info > li {\r\n    color: #767d94;\r\n    padding: 0.5em 0;\r\n}\r\n.icon-refresh {\r\n    display: block;\r\n    cursor: pointer;\r\n    height: 21px;\r\n    left: 20px;\r\n    position: absolute;\r\n    top: 20px;\r\n    width: 2em;\r\n    font-size: 2em;\r\n    color: #767d94;\r\n}\r\n.wallet-address {\r\n    text-align: center;\r\n    width: 100%;\r\n    font-size: 1em;\r\n    cursor: pointer;\r\n    margin: 1em 0;\r\n    color:white;\r\n}\r\n.wallet-address > a {\r\n    margin: 0;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n.wallet-qr-code {\r\n    float: right;\r\n    padding: 2em 1em;\r\n}\r\n.icon-edit-wallet-name,\r\n.icon-refresh-wallet-balance {\r\n    font-size: 0.8em;\r\n    margin-right: 0.5em;\r\n    cursor: pointer;\r\n}\r\n.wallet-name,\r\n.wallet-balance {\r\n    font-size: 2em;\r\n    margin: 1em 0.5em;\r\n}\r\n.wallet-name-container {\r\n    margin-top: 1em;\r\n    color: #767d94;\r\n    position: relative;\r\n}\r\n.wallet-balance-container {\r\n    margin-top: 1em;\r\n    color: #e25c4b;\r\n    position: relative;\r\n}\r\n.action-wallet-container {\r\n    width: 49% !important;\r\n    padding: 1em;\r\n    cursor: pointer;\r\n}\r\n.action-wallet-container-full:hover,\r\n.action-wallet-container:hover {\r\n    background-color: #1b2138;\r\n    border: 1px solid white;\r\n}\r\n.action-wallet-container-full {\r\n    padding: 1em;\r\n    cursor: pointer;\r\n}\r\n.center {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: 0 auto;\r\n}\r\n.center-send , .center-trash {\r\n    color: #e25c4b;\r\n    font-size: 1.5em;\r\n}\r\n.center-receive {\r\n    color: #2f5c94;\r\n    font-size: 1.5em;\r\n}\r\n.action-wallet {\r\n    color: white;\r\n}\r\n.center-refresh {\r\n    color: white;\r\n    font-size: 1.5em;\r\n}\r\n.message-container {\r\n    padding: 0 !important\r\n}\r\n.message-container > .alert {\r\n    margin: 0 !important;\r\n}\r\n.txt-label {\r\n    width: 50px;\r\n}\r\n.td-hour {\r\n    min-width: 100px;\r\n}\r\n.a-hash-min {\r\n    display: none;\r\n}\r\n.a-hash-mid {\r\n    display: none;\r\n}\r\n.a-hash-max {\r\n    display: block;\r\n}\r\n.td-hash a {\r\n    margin: 0;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\ntr:hover .td-hash a,\r\ntr:hover  .td-date{\r\n  color:black;\r\n}\r\n\r\n.td-date {\r\n    margin: 0;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    min-width: 150px!important;\r\n}\r\n\r\n.back{\r\n  -webkit-transform: rotate(180deg);\r\n          transform: rotate(180deg);\r\n  -webkit-transform: scale(-1, 1);\r\n          transform: scale(-1, 1);\r\n}\r\n\r\n.transaction-box{\r\n  color: white;\r\n  font-size:1.2em;\r\n  line-height: 2em;\r\n}\r\n/* Smartphones (landscape) */\r\n\r\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\r\n\r\n  .navigation.col-lg-12{\r\n    padding:0\r\n  }\r\n\r\n\r\n    .wallet-qr-code {\r\n        float: right;\r\n        padding: 2em 1em;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n    .wallet-address {\r\n        font-size: 0.9em;\r\n    }\r\n    .wallet-balance-container {\r\n        margin-bottom: 1em;\r\n    }\r\n    .a-hash-min {\r\n        display: block;\r\n    }\r\n    .a-hash-mid {\r\n        display: none;\r\n    }\r\n    .a-hash-max {\r\n        display: none;\r\n    }\r\n\r\n}\r\n/* Smartphones (portrait) */\r\n\r\n@media only screen and (max-width: 320px) {}\r\n/* iPads (landscape) */\r\n\r\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {}\r\n/* iPads (portrait) */\r\n\r\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {}\r\n/* Ordenadores de sobremesa y portátiles */\r\n\r\n@media only screen and (min-width: 1224px) {}\r\n/* Pantallas grandes */\r\n\r\n@media only screen and (min-width: 1824px) {}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/components/transaction/transaction.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"transaction\" [@fadeInOut]>\n\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-centered message-container\">\n      <div class=\"alert alert-{{alert.type}} \" *ngIf=\"alert.status\" [@fadeInOut]>\n        <span class=\"glyphicon glyphicon-{{ alert.type =='success' ? 'ok' : 'remove'}}\"></span>\n        {{alert.message}}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"box-dark col-lg-6 col-centered action-wallet-container-full\" (click)=\"back()\">\n      <div class=\"center center-refresh\">\n        <span class=\"glyphicon glyphicon-share-alt back\"></span>\n        <span class=\"action-wallet\">\n          Back\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"box-dark col-lg-6 col-centered\" ngxClipboard [cbContent]=\"transaction.hash\" (click)=\"copyToClipboard()\">\n      <h1 class=\"wallet-address\">\n        <a>{{transaction.hash}}</a>\n      </h1>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"box-dark col-lg-6 col-centered transaction-box\">\n\n      <div class=\"col-sm-3\">Tx Direction:</div>\n      <div class=\"col-sm-9 cbs\">\n        <span class=\"label txt-label\" [ngClass]=\"{'label-success' : transaction.to.toUpperCase() == transaction.wallet.address.toUpperCase() ,'label-danger' :  transaction.to.toUpperCase() != transaction.wallet.address.toUpperCase() }\">\n          {{transaction.to.toUpperCase() == transaction.wallet.address.toUpperCase() ? '&nbsp;&nbsp;IN&nbsp;&nbsp;' : 'OUT'}}\n        </span>\n      </div>\n      <div class=\"col-sm-3\">TxReceipt Status:</div>\n      <div class=\"col-sm-9 cbs\">\n        <span>\n          <font color=\"#5cb85c\" *ngIf=\"!transaction.isError\">Success</font>\n          <font color=\"#d9534f\" *ngIf=\"transaction.isError\">Error</font>\n        </span>\n      </div>\n      <div class=\"col-sm-3\">Block Height:</div>\n      <div class=\"col-sm-9 cbs\">\n        {{transaction.blockNumber}} (\n        <span title=\"No of Blocks Mined Since\">{{ transaction.confirmations }} block confirmations</span>)</div>\n      <div class=\"col-sm-3\">TimeStamp:</div>\n      <div class=\"col-sm-9 cbs\">\n        <span>{{calculateTimeText()}} ({{transaction.timeStamp * 1000 | date : 'dd-MM-yyyy hh:mm:ss'}})</span>\n      </div>\n      <div class=\"col-sm-3\">From:</div>\n      <div class=\"col-sm-9 cbs\">\n        {{transaction.from}}\n      </div>\n      <div class=\"col-sm-3\">To:</div>\n      <div class=\"col-sm-9 cbs\">\n        {{transaction.to}}\n      </div>\n      <div class=\"col-sm-3\">Value:</div>\n      <div class=\"col-sm-9 cbs\">\n        <span title=\"The amount of ETH to be transferred to the recipient with the transaction\">\n          {{transaction.value / CONST_UNIT | number }} Ether (${{((transaction.value / CONST_UNIT) * nodeInformation.price_usd )| number:'.2'\n          }})\n        </span>\n      </div>\n      <div class=\"col-sm-3\">Gas Limit:</div>\n      <div class=\"col-sm-9 cbs\">\n        <span title=\"The amount of GAS supplied for this transaction to happen\">\n          {{transaction.gas}}\n        </span>\n      </div>\n      <div class=\"col-sm-3\">Gas Used By Txn:</div>\n      <div class=\"col-sm-9 cbs\">\n        <span title=\"The amount of gas used by this specific transaction alone\">\n          {{transaction.gasUsed}}\n        </span>\n      </div>\n      <div class=\"col-sm-3\">Gas Price:</div>\n      <div class=\"col-sm-9 cbs\">\n        <span title=\"The price offered to the miner to purchase this amount of GAS, per GAS.\">\n          {{transaction.gasPrice / CONST_UNIT | number : '1.10' }} Ether\n        </span>\n      </div>\n      <div class=\"col-sm-3\">Actual Tx Cost/Fee:</div>\n      <div class=\"col-sm-9 cbs\">\n        <span title=\"Gas Price * Gas Used By Transaction\">\n          {{ (transaction.gasUsed * transaction.gasPrice) / CONST_UNIT | number : '.10'}} Ether ($ {{((transaction.gasUsed * transaction.gasPrice)\n          / CONST_UNIT) * nodeInformation.price_usd | number : '.2'}})\n        </span>\n      </div>\n      <div class=\"col-sm-3\">Cumulative Gas Used:</div>\n      <div class=\"col-sm-9 cbs\">\n        <span title=\"The total amount of gas used when this transaction was executed in the block. If being used with a smart contact, this would show the total amount of gas that has been used to interact with it\">\n          {{transaction.cumulativeGasUsed}}\n        </span>\n      </div>\n      <div class=\"col-sm-3\">Nonce:</div>\n      <div class=\"col-sm-9 cbs\">\n        <span title=\"The transaction nonce\">\n          {{transaction.nonce}}\n        </span>\n      </div>\n      <div class=\"col-sm-3\">Input Data:</div>\n      <div class=\"col-sm-12 cbs\">\n        <span title=\"The binary data that formed the input to the transaction, either the input data if it was a message call or the contract initialisation if it was a contract creation\">\n          <textarea rows=\"4\" class=\"form-control-dark\" [disabled]=\"true\" style=\"height:100px;\">\n              {{transaction.input}}\n            </textarea>\n        </span>\n      </div>\n\n      <div class=\"clearfix\"></div>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/account/components/transaction/transaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_wallet_model__ = __webpack_require__("../../../../../src/app/models/wallet.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_wallet_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_transaction_model__ = __webpack_require__("../../../../../src/app/models/transaction.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_nodeInformation_model__ = __webpack_require__("../../../../../src/app/models/nodeInformation.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_alert_model__ = __webpack_require__("../../../../../src/app/models/alert.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TransactionComponent = (function () {
    function TransactionComponent(_walletService, _route, _router) {
        var _this = this;
        this._walletService = _walletService;
        this._route = _route;
        this._router = _router;
        this.CONST_UNIT = 1000000000000000000;
        this.alert = new __WEBPACK_IMPORTED_MODULE_8__models_alert_model__["a" /* Alert */]();
        this.identity = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */]().loadLocal();
        this.nodeInformation = new __WEBPACK_IMPORTED_MODULE_7__models_nodeInformation_model__["a" /* NodeInformation */]();
        this._route.params.subscribe(function (params) {
            var wallet = new __WEBPACK_IMPORTED_MODULE_2__models_wallet_model__["a" /* Wallet */]({ _id: params['walletId'] });
            _this.transaction = new __WEBPACK_IMPORTED_MODULE_6__models_transaction_model__["a" /* Transaction */]({ _id: params['transactionId'], wallet: wallet }).get(_this._walletService);
        });
    }
    TransactionComponent.prototype.ngOnInit = function () {
        this.nodeInformation.suscribeChanges();
    };
    TransactionComponent.prototype.copyToClipboard = function () {
        this.alert.success('Transaction hash copied to Clipboard Successfully');
    };
    TransactionComponent.prototype.back = function () {
        this._router.navigate(['/account/wallet/', this.transaction.wallet._id]);
    };
    TransactionComponent.prototype.calculateTimeText = function () {
        var now = new Date();
        var delta = Math.abs((now) - (new Date((this.transaction.timeStamp) * 1000))) / 1000;
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        var seconds = delta % 60;
        return days + ' days ' + hours + ' hours ago';
    };
    TransactionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transaction',
            template: __webpack_require__("../../../../../src/app/account/components/transaction/transaction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/components/transaction/transaction.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_wallet_wallet_service__["a" /* WalletService */]
            ],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["k" /* trigger */])('fadeInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms 0.5s', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms 0.5s', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* style */])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_wallet_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], TransactionComponent);
    return TransactionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account/components/wallet/wallet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar-wallets > ul > li,\r\n.sidebar-wallets > ul > li> a,\r\n.sidebar-wallets > ul {\r\n    border-radius: 0;\r\n}\r\n.sidebar-wallets > ul > li> a {\r\n    cursor: pointer;\r\n    background: transparent;\r\n    border-left: 3px solid transparent;\r\n    border-right: 3px solid transparent;\r\n    transition: all 300ms;\r\n    color: #767d94;\r\n}\r\n.sidebar-wallets > ul > li:hover> a {\r\n    background: transparent;\r\n    border-left: 3px solid #767d94;\r\n    border-right: 3px solid #767d94;\r\n    color: white;\r\n}\r\n.sidebar-header span,\r\n.sidebar-wallets > ul > li> a > span,\r\n.ul-eth-info > li > span {\r\n    margin-right: 10px;\r\n}\r\n.sidebar-header {\r\n    padding: 1em;\r\n    background: #090f21;\r\n    border-top: 1px solid #767d94;\r\n    border-bottom: 1px solid #767d94;\r\n}\r\n.ul-eth-info {\r\n    padding: 1em;\r\n}\r\n.ul-eth-info > li {\r\n    color: #767d94;\r\n    padding: 0.5em 0;\r\n}\r\n.icon-refresh {\r\n    display: block;\r\n    cursor: pointer;\r\n    height: 21px;\r\n    left: 20px;\r\n    position: absolute;\r\n    top: 20px;\r\n    width: 2em;\r\n    font-size: 2em;\r\n    color: #767d94;\r\n}\r\n.wallet-address {\r\n    text-align: center;\r\n    width: 100%;\r\n    font-size: 1.5em;\r\n    cursor: pointer;\r\n    margin: 1em 0;\r\n    color:white;\r\n}\r\n.wallet-address > a {\r\n    margin: 0;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n.wallet-qr-code {\r\n    float: right;\r\n    padding: 2em 1em;\r\n}\r\n.icon-edit-wallet-name,\r\n.icon-refresh-wallet-balance {\r\n    font-size: 0.8em;\r\n    margin-right: 0.5em;\r\n    cursor: pointer;\r\n}\r\n.wallet-name,\r\n.wallet-balance {\r\n    font-size: 2em;\r\n    margin: 1em 0.5em;\r\n}\r\n.wallet-name-container {\r\n    margin-top: 1em;\r\n    color: white;\r\n    position: relative;\r\n}\r\n.wallet-balance-container {\r\n    margin-top: 1em;\r\n    color: #e25c4b;\r\n    position: relative;\r\n}\r\n.action-wallet-container {\r\n    width: 49% !important;\r\n    padding: 1em;\r\n    cursor: pointer;\r\n}\r\n.action-wallet-container-full:hover,\r\n.action-wallet-container:hover {\r\n    background-color: #1b2138;\r\n    border: 1px solid white;\r\n}\r\n.action-wallet-container-full {\r\n    padding: 1em;\r\n    cursor: pointer;\r\n}\r\n.center {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: 0 auto;\r\n}\r\n.center-send , .center-trash {\r\n    color: #e25c4b;\r\n    font-size: 1.5em;\r\n}\r\n.center-receive {\r\n    color: #2f5c94;\r\n    font-size: 1.5em;\r\n}\r\n.action-wallet {\r\n    color: white;\r\n}\r\n.center-refresh {\r\n    color: white;\r\n    font-size: 1.5em;\r\n}\r\n.message-container {\r\n    padding: 0 !important\r\n}\r\n.message-container > .alert {\r\n    margin: 0 !important;\r\n}\r\n.txt-label {\r\n    width: 50px;\r\n}\r\n.td-hour {\r\n    min-width: 100px;\r\n}\r\n.a-hash-min {\r\n    display: none;\r\n}\r\n.a-hash-mid {\r\n    display: none;\r\n}\r\n.a-hash-max {\r\n    display: block;\r\n}\r\ntr:hover .td-hash a,\r\ntr:hover  .td-date{\r\n  color:black;\r\n}\r\n\r\n.td-hash a {\r\n    margin: 0;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n.td-date {\r\n    margin: 0;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    min-width: 150px!important;\r\n}\r\n\r\n.back{\r\n  -webkit-transform: rotate(180deg);\r\n          transform: rotate(180deg);\r\n  -webkit-transform: scale(-1, 1);\r\n          transform: scale(-1, 1);\r\n}\r\n/* Smartphones (landscape) */\r\n\r\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\r\n\r\n  .navigation.col-lg-12{\r\n    padding:0\r\n  }\r\n\r\n\r\n    .wallet-qr-code {\r\n        float: right;\r\n        padding: 2em 1em;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n    .wallet-address {\r\n        font-size: 0.9em;\r\n    }\r\n    .wallet-balance-container {\r\n        margin-bottom: 1em;\r\n    }\r\n    .a-hash-min {\r\n        display: block;\r\n    }\r\n    .a-hash-mid {\r\n        display: none;\r\n    }\r\n    .a-hash-max {\r\n        display: none;\r\n    }\r\n\r\n}\r\n/* Smartphones (portrait) */\r\n\r\n@media only screen and (max-width: 320px) {}\r\n/* iPads (landscape) */\r\n\r\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {}\r\n/* iPads (portrait) */\r\n\r\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {}\r\n/* Ordenadores de sobremesa y portátiles */\r\n\r\n@media only screen and (min-width: 1224px) {}\r\n/* Pantallas grandes */\r\n\r\n@media only screen and (min-width: 1824px) {}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/components/wallet/wallet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"wallet\" [@fadeInOut]>\n\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-centered message-container\">\n      <div class=\"alert alert-{{alert.type}} \" *ngIf=\"alert.status\" [@fadeInOut] (click)=\"alert.hide()\">\n        <span class=\"glyphicon glyphicon-{{ alert.type =='success' ? 'ok' : 'remove'}}\"></span>\n        {{alert.message}}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"box-dark col-lg-6 col-centered action-wallet-container-full\" (click)=\"back()\">\n      <div class=\"center center-refresh\">\n        <span class=\"glyphicon glyphicon-share-alt back\"></span>\n        <span class=\"action-wallet\">\n          Back\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"box-dark col-lg-6 col-centered\" ngxClipboard [cbContent]=\"wallet.address\" (click)=\"copyToClipboard()\">\n      <h1 class=\"wallet-address\">\n        <a>{{wallet.address}}</a>\n      </h1>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"box-dark col-lg-6 col-centered\">\n      <div class=\"wallet-qr-code\">\n        <ngx-qrcode qrc-element-type=\"url\" [qrc-value]=\"wallet.address\" qrc-version=\"6\" style=\"height: 195px; width: 195px;\"></ngx-qrcode>\n      </div>\n\n      <div class=\"wallet-name-container\" >\n        <span class=\"wallet-name\" (click)=\"editName()\">\n          <span class=\" glyphicon glyphicon-pencil icon-edit-wallet-name\"></span>\n          {{wallet.name}}\n        </span>\n      </div>\n\n      <div class=\"wallet-balance-container\">\n        <span class=\"wallet-balance\">\n          <span class=\" glyphicon glyphicon-signal icon-refresh-wallet-balance\"></span>\n          <span class=\"ether-balance\">{{wallet.balance | number:'1.10'}}</span>\n        </span>\n      </div>\n\n      <div class=\"wallet-balance-container\">\n        <span class=\"wallet-balance\">\n          <span class=\" glyphicon glyphicon-usd icon-refresh-wallet-balance\"></span>\n          <span class=\"ether-balance\">{{(wallet.balance * nodeInformation.price_usd) | number:'1.2' }}</span>\n        </span>\n      </div>\n\n      <div class=\"wallet-balance-container\">\n        <span class=\"wallet-balance\">\n          <span class=\" glyphicon glyphicon-bitcoin icon-refresh-wallet-balance\"></span>\n          <span class=\"ether-balance\"> {{wallet.balance * nodeInformation.price_btc | number:'1.8' }}</span>\n        </span>\n      </div>\n      <div class=\"clearfix\"></div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"box-dark col-lg-6 col-centered action-wallet-container-full\" (click)=\"getWallet()\">\n      <div class=\"center center-refresh\">\n        <span class=\"glyphicon glyphicon-refresh\" [ngClass]=\"{'spin' : wallet.refreshing }\"></span>\n        <span class=\"action-wallet\">\n          Refresh\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-centered \">\n      <div class=\"row\">\n\n        <div class=\"col-lg-5 box-dark pull-left action-wallet-container\">\n          <div class=\"center center-send\">\n            <span class=\"glyphicon glyphicon-open\"></span>\n            <span class=\"action-wallet\">\n              Send\n            </span>\n          </div>\n        </div>\n\n        <div class=\"col-lg-5 box-dark pull-right action-wallet-container\">\n          <div class=\"center center-receive\">\n            <span class=\"glyphicon glyphicon-save\"></span>\n            <span class=\"action-wallet\">\n              Receive\n            </span>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"wallet.transactions\" [@fadeInOut]>\n    <div class=\"box-dark col-lg-6 col-centered\" style=\"overflow-x: scroll;\">\n      <table class=\"table table-hover\" style=\"width:100%;overflow:hidden;\">\n        <thead class=\"thhead-default\">\n          <tr>\n            <th>\n              TxHash\n            </th>\n            <th>\n            </th>\n            <th>\n              Date\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let transaction of wallet.transactions \" (click)=\"openTransaction(transaction)\">\n            <td class=\"td-hash\">\n              <a class=\"a-hash-min\">{{transaction.hash.substring(0,20)}}...</a>\n              <a class=\"a-hash-mid\">{{transaction.hash.substring(0,30)}}...</a>\n              <a class=\"a-hash-max\">{{transaction.hash}}</a>\n            </td>\n            <td>\n              <span class=\"label txt-label\" [ngClass]=\"{'label-success' : transaction.to.toUpperCase() == wallet.address.toUpperCase() ,'label-danger' :  transaction.to.toUpperCase() != wallet.address.toUpperCase() }\">\n                {{transaction.to.toUpperCase() == wallet.address.toUpperCase() ? '&nbsp;&nbsp;IN&nbsp;&nbsp;' : 'OUT'}}\n              </span>\n            </td>\n            <td class=\"td-date\">\n              {{calculateTimeText(transaction)}}\n\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"box-dark col-lg-6 col-centered action-wallet-container-full\" (click)=\"removeWallet()\">\n      <div class=\"center center-trash\">\n        <span class=\"glyphicon glyphicon-trash\"></span>\n        <span class=\"action-wallet\">\n          Delete\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <br>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/account/components/wallet/wallet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_wallet_model__ = __webpack_require__("../../../../../src/app/models/wallet.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_wallet_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialogs_wallet_name_dialog_wallet_name_dialog_component__ = __webpack_require__("../../../../../src/app/account/dialogs/wallet-name-dialog/wallet-name-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialogs_remove_wallet_dialog_remove_wallet_dialog_component__ = __webpack_require__("../../../../../src/app/account/dialogs/remove-wallet-dialog/remove-wallet-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_nodeInformation_model__ = __webpack_require__("../../../../../src/app/models/nodeInformation.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_alert_model__ = __webpack_require__("../../../../../src/app/models/alert.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var WalletComponent = (function () {
    function WalletComponent(_route, _router, _walletService, dialog) {
        var _this = this;
        this._route = _route;
        this._router = _router;
        this._walletService = _walletService;
        this.dialog = dialog;
        this.alert = new __WEBPACK_IMPORTED_MODULE_10__models_alert_model__["a" /* Alert */]();
        this.identity = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */]().loadLocal();
        this.nodeInformation = new __WEBPACK_IMPORTED_MODULE_9__models_nodeInformation_model__["a" /* NodeInformation */]();
        this._route.params.subscribe(function (params) {
            _this.wallet = new __WEBPACK_IMPORTED_MODULE_2__models_wallet_model__["a" /* Wallet */]({ _id: params['walletId'], user: _this.identity });
        });
    }
    WalletComponent.prototype.ngOnInit = function () {
        this.nodeInformation.suscribeChanges();
        this.alert.suscribeChanges(this._router);
        this.getWallet();
    };
    WalletComponent.prototype.getWallet = function () {
        this.wallet.get(this._walletService);
    };
    WalletComponent.prototype.editName = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__dialogs_wallet_name_dialog_wallet_name_dialog_component__["a" /* WalletNameDialogComponent */], {
            width: '100%',
            panelClass: ['container', 'dialog-container'],
            data: { wallet: Object.assign({}, this.wallet) }
        }).afterClosed().subscribe(function (result) {
            if (result) {
                _this.wallet.updateName(_this._walletService, result.wallet.name);
            }
        });
    };
    WalletComponent.prototype.removeWallet = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__dialogs_remove_wallet_dialog_remove_wallet_dialog_component__["a" /* RemoveWalletDialogComponent */], {
            width: '100%',
            panelClass: ['container', 'dialog-container'],
            data: {
                wallet: Object.assign({}, this.wallet),
                user: Object.assign({}, this.identity)
            }
        }).afterClosed().subscribe(function (result) {
            if (result) {
                _this.wallet.remove(_this._walletService, result.user.password);
            }
        });
    };
    WalletComponent.prototype.back = function () {
        this._router.navigate(['/account/wallets']);
    };
    WalletComponent.prototype.openTransaction = function (transaction) {
        this._router.navigate(['/account/wallet/' + this.wallet._id + '/transaction/' + transaction._id]);
    };
    WalletComponent.prototype.copyToClipboard = function () {
        this.alert.success('Address copied to Clipboard Successfully');
    };
    WalletComponent.prototype.calculateTimeText = function (transaction) {
        try {
            var now = new Date();
            var delta = Math.abs((now) - (new Date((transaction.timeStamp) * 1000))) / 1000;
            var days = Math.floor(delta / 86400);
            delta -= days * 86400;
            var hours = Math.floor(delta / 3600) % 24;
            delta -= hours * 3600;
            var seconds = delta % 60;
            return days + ' days ' + hours + ' hours ago';
        }
        catch (err) {
        }
    };
    WalletComponent.prototype.send = function () {
    };
    WalletComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wallet',
            template: __webpack_require__("../../../../../src/app/account/components/wallet/wallet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/components/wallet/wallet.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_wallet_wallet_service__["a" /* WalletService */]
            ],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["k" /* trigger */])('fadeInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["j" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["i" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["e" /* animate */])('500ms 0.5s', Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["i" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["j" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["e" /* animate */])('500ms 0.5s', Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["i" /* style */])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_wallet_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatDialog */]])
    ], WalletComponent);
    return WalletComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account/components/wallets/card-wallet/card-wallet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-wallet-container {\r\n  margin: 1em 0;\r\n  overflow: hidden;\r\n  transition: all 0.3s;\r\n}\r\n.card-wallet {\r\n  border: 1px solid #767d94;\r\n  background-color: #00000033;\r\n  border-radius: 5px;\r\n  height: 17.8125rem;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n.card-title {\r\n  position: relative;\r\n  top: 1em;\r\n  left: 1em;\r\n  font-size: 1.3em;\r\n}\r\n.card-label {\r\n  position: absolute;\r\n  right: 1.5em;\r\n  top: 1.2em;\r\n  padding: 0.5em;\r\n  background: #ffffff38;\r\n  border-radius: 5px 0 0 5px;\r\n  font-size: 0.8em;\r\n}\r\n.card-header {\r\n  height: 25px;\r\n}\r\n.card-footer {\r\n  width: 100%;\r\n  position: relative;\r\n  top: 81px;\r\n  border-radius: 0 0 5px 5px;\r\n  height: 5em;\r\n  transition: all 0.3s;\r\n}\r\n.card-balance-eth {\r\n  position: absolute;\r\n  left: 1em;\r\n  top: 0.6em;\r\n}\r\n.card-balance-fiat {\r\n  position: absolute;\r\n  top: 2.7em;\r\n  left: 1em;\r\n}\r\n.card-icon-refresh {\r\n  position: absolute;\r\n  right: 0;\r\n  font-size: 1.5em;\r\n  cursor: pointer;\r\n  color: white;\r\n  z-index: 10;\r\n  padding: 1em;\r\n}\r\n.img-card-container {\r\n  position: absolute;\r\n  height: 100%;\r\n  background-image: url(/assets/img/ethereum.png);\r\n  background-repeat: no-repeat;\r\n  background-position: 50%;\r\n  background-size: 41%;\r\n  width: 91%;\r\n  cursor: pointer;\r\n  transition: all 1s;\r\n}\r\n/****************************************/\r\n\r\n.card-wallet-container:hover .card-footer {\r\n  background: #00000096;\r\n}\r\n.card-wallet-container:hover .card-wallet {\r\n  background: white;\r\n}\r\n.card-wallet-container:hover .card-title {\r\n  color: black;\r\n}\r\n.card-wallet-container:hover .card-label {\r\n  background: #00000096;\r\n}\r\n.card-wallet-container:hover .img-card-container {\r\n  background-size: 0%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/components/wallets/card-wallet/card-wallet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-4 card-wallet-container\" (click)=\"openWallet()\">\n\n  <div class=\"img-card-container col-sm-11\" [ngClass]=\"{'spin' : wallet.refreshing }\">\n  </div>\n\n\n  <div class=\"card card-wallet\">\n\n    <div class=\"card-header\">\n      <span class=\"card-title\">{{wallet.name}}</span>\n      <span class=\"card-label\">\n        <span class=\"glyphicon glyphicon-star\"></span>\n        ETH\n      </span>\n    </div>\n\n    <div class=\"card-footer\">\n      <span class=\"card-balance-eth\">\n        <span class=\"glyphicon glyphicon-signal\"></span>\n        {{wallet.balance | number:'1.5' }}\n      </span>\n      <span class=\"card-balance-fiat\">\n        <span class=\"glyphicon glyphicon-usd\"></span>\n        {{wallet.balance * usd | number:'1.2' }}\n      </span>\n      <span class=\"glyphicon glyphicon-refresh card-icon-refresh\" [ngClass]=\"{'spin' : wallet.refreshing }\" (click)=\"getWallet()\"\n        title=\"Refresh Balance\"></span>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/account/components/wallets/card-wallet/card-wallet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardWalletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_wallet_model__ = __webpack_require__("../../../../../src/app/models/wallet.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_wallet_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardWalletComponent = (function () {
    function CardWalletComponent(_walletService, _route, _router) {
        this._walletService = _walletService;
        this._route = _route;
        this._router = _router;
    }
    CardWalletComponent.prototype.ngOnInit = function () {
        this.getWallet();
    };
    CardWalletComponent.prototype.getWallet = function () {
        this.wallet = new __WEBPACK_IMPORTED_MODULE_1__models_wallet_model__["a" /* Wallet */](this.wallet).get(this._walletService);
    };
    CardWalletComponent.prototype.openWallet = function () {
        if (!this.wallet.refreshing) {
            this._router.navigate(['/account/wallet/', this.wallet._id]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_wallet_model__["a" /* Wallet */])
    ], CardWalletComponent.prototype, "wallet", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */])
    ], CardWalletComponent.prototype, "identity", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CardWalletComponent.prototype, "usd", void 0);
    CardWalletComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card-wallet',
            template: __webpack_require__("../../../../../src/app/account/components/wallets/card-wallet/card-wallet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/components/wallets/card-wallet/card-wallet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_wallet_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], CardWalletComponent);
    return CardWalletComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account/components/wallets/wallets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-wallets {\r\n  max-width: 1200px;\r\n}\r\n.price-eth-container {\r\n  padding: 6em 0 3em 0;\r\n  background: white;\r\n  background-image: url(/assets/img/ethereum.png);\r\n  background-repeat: no-repeat;\r\n  background-position-x: 50%;\r\n  background-position-y: bottom;\r\n}\r\n.col-price-info {\r\n  color: #3e486d;\r\n}\r\n.col-price-info .glyphicon {\r\n  text-align: center;\r\n  font-size: 3.2em;\r\n  margin-right: 0.3em;\r\n}\r\n.col-price-info .text-price-info {\r\n  text-align: center;\r\n  font-size: 4em;\r\n}\r\n@media screen and (max-width: 991px) {\r\n  .price-eth-container {\r\n      background-image: none;\r\n  }\r\n  .navbar-header .navbar-nav {\r\n      float: none !important;\r\n  }\r\n}\r\n#wallets-nav .navbar-nav-movile {\r\n  display: none;\r\n}\r\n@media screen and (max-width: 730px) {\r\n  #wallets-nav .navbar-nav {\r\n      display: none;\r\n  }\r\n  #wallets-nav .navbar-nav-movile {\r\n      display: -webkit-inline-box;\r\n      display: -ms-inline-flexbox;\r\n      display: inline-flex;\r\n      width: 100%;\r\n      margin: 0;\r\n      padding: 0;\r\n      list-style: none;\r\n  }\r\n  #wallets-nav .navbar-nav-movile li {\r\n      width: 33%;\r\n      padding: 0.5em;\r\n      font-size: 1.5em;\r\n  }\r\n  .navbar-header {\r\n      width: 100%;\r\n      margin: 0;\r\n      text-align: center;\r\n      font-size: 2em;\r\n  }\r\n  .navbar-header .navbar-nav {\r\n      float: none !important;\r\n  }\r\n  .price-eth-container {\r\n      padding: 2em 0 1em 0;\r\n      border-bottom: 1px solid #3e486d;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/components/wallets/wallets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid container-wallets\">\n\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-centered\">\n\n      <nav class=\"navbar navbar-dark navbar-dark-sub\">\n        <div class=\"container-fluid\">\n\n          <div class=\"price-eth-container\">\n            <div class=\"container\">\n              <div class=\"row text-center\">\n                <div class=\"col-md-6 col-price-info\">\n                  <span _ class=\"glyphicon glyphicon-usd\"></span>\n                  <span class=\"text-price-info\">{{nodeInformation.price_usd | number:'1.1' }}</span>\n                </div>\n                <div class=\"col-md-6 col-price-info\">\n                  <span class=\"glyphicon glyphicon-bitcoin\"></span>\n                  <span class=\"text-price-info\">{{nodeInformation.price_btc | number:'1.5' }}</span>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div id=\"wallets-nav\" class=\"navbar-header\">\n\n            <ul class=\"nav navbar-nav\">\n              <li role=\"presentation\">\n                <a (click)=\"openDialogNewWallet()\">\n                  <span class=\" glyphicon glyphicon-plus\"></span>\n                  New Wallet\n                </a>\n              </li>\n              <li role=\"presentation\">\n                <a>\n                  <span class=\"glyphicon glyphicon-log-in\"></span>\n                  Restore Wallet\n                </a>\n              </li>\n              <li role=\"presentation\">\n                <a (click)=\"getWallets()\">\n                  <span class=\" glyphicon glyphicon-refresh\"></span>\n                  Refresh All\n                </a>\n              </li>\n            </ul>\n\n            <ul class=\"nav navbar-nav pull-right\">\n              <li>\n                <a>\n                  <span class=\"glyphicon glyphicon-calendar\"></span>\n                  {{nodeInformation.last_update | date : 'dd-MM-yyyy hh:mm:ss'}}\n                </a>\n              </li>\n            </ul>\n\n            <ul class=\"navbar-nav-movile\">\n              <li role=\"presentation\">\n                <a (click)=\"openDialogNewWallet()\">\n                  <span class=\" glyphicon glyphicon-plus\"></span>\n\n                </a>\n              </li>\n              <li role=\"presentation\">\n                <a>\n                  <span class=\"glyphicon glyphicon-log-in\"></span>\n\n                </a>\n              </li>\n              <li role=\"presentation\">\n                <a (click)=\"getWallets()\">\n                  <span class=\" glyphicon glyphicon-refresh\"></span>\n\n                </a>\n              </li>\n            </ul>\n\n          </div>\n        </div>\n      </nav>\n\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-centered\" *ngIf=\"identity.wallets.length > 0\" [@fadeInOut]>\n      <app-card-wallet *ngFor=\"let wallet of identity.wallets\" [wallet]=\"wallet\" [identity]=\"identity\" [usd]=\"nodeInformation.price_usd\"></app-card-wallet>\n    </div>\n\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/account/components/wallets/wallets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_wallet_wallet_service__ = __webpack_require__("../../../../../src/app/services/wallet/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialogs_new_wallet_dialog_new_wallet_dialog_component__ = __webpack_require__("../../../../../src/app/account/dialogs/new-wallet-dialog/new-wallet-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_nodeInformation_model__ = __webpack_require__("../../../../../src/app/models/nodeInformation.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WalletsComponent = (function () {
    function WalletsComponent(_walletService, _route, _router, dialog) {
        this._walletService = _walletService;
        this._route = _route;
        this._router = _router;
        this.dialog = dialog;
        this.identity = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */]().loadLocal();
        this.nodeInformation = new __WEBPACK_IMPORTED_MODULE_6__models_nodeInformation_model__["a" /* NodeInformation */]().loadLocal();
        this.getWallets();
    }
    WalletsComponent.prototype.ngOnInit = function () {
        this.nodeInformation.suscribeChanges();
    };
    WalletsComponent.prototype.getWallets = function () {
        this.identity.getWallets(this._walletService);
    };
    WalletsComponent.prototype.openDialogNewWallet = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__dialogs_new_wallet_dialog_new_wallet_dialog_component__["a" /* NewWalletDialogComponent */], {
            width: '100%',
            panelClass: ['container', 'dialog-container'],
            data: { wallet: { name: 'account' } }
        }).afterClosed().subscribe(function (result) {
            if (result) {
                _this.identity.createNewWallet(_this._walletService, result);
            }
        });
    };
    WalletsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wallets',
            template: __webpack_require__("../../../../../src/app/account/components/wallets/wallets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/components/wallets/wallets.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_wallet_wallet_service__["a" /* WalletService */]
            ],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["k" /* trigger */])('fadeInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["j" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["i" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["e" /* animate */])('500ms 0.5s', Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["i" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["j" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["e" /* animate */])('500ms 0.5s', Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["i" /* style */])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_wallet_wallet_service__["a" /* WalletService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatDialog */]])
    ], WalletsComponent);
    return WalletsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account/dialogs/new-wallet-dialog/new-wallet-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/dialogs/new-wallet-dialog/new-wallet-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n  <div class=\"alert alert-{{status}} \" *ngIf=\"message\" [@fadeInOut]>\n    <span class=\"glyphicon glyphicon-{{ status =='success' ? 'ok' : 'remove'}}\"></span>\n    {{message}}\n  </div>\n  <div class=\"form-group\" [@fadeOut] *ngIf=\"status!='success'\">\n    <input matInput [(ngModel)]=\"data.wallet.name\" #name=\"ngModel\" placeholder=\"Wallet Name\" class=\"form-control-dark\" tabindex=\"1\"\n      required  pattern=\".{4,50}\"/>\n    <div class=\"form-control-error pull-right\" *ngIf=\"!name.valid && name.touched\">\n      <span class=\"glyphicon glyphicon-remove\"></span>\n    </div>\n    <div class=\"form-control-success pull-right\" *ngIf=\"name.valid && name.touched\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </div>\n  </div>\n</div>\n<div mat-dialog-actions [@fadeOut]  *ngIf=\"status!='success'\">\n  <div class=\"form-group pull-right\" style=\"width:100%\">\n    <input type=\"button\" class=\"btn btn-dark pull-right\" (click)=\"create()\" value=\"Create\" style=\"margin-left:1em;\" />\n    <input type=\"button\" class=\"btn btn-dark pull-right\" (click)=\"close()\" value=\"Close\" [disabled]=\"status =='success'\" />\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/account/dialogs/new-wallet-dialog/new-wallet-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewWalletDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NewWalletDialogComponent = (function () {
    function NewWalletDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    NewWalletDialogComponent.prototype.create = function () {
        var _this = this;
        if (this.validate()) {
            this.status = 'success';
            this.message = 'Valid Wallet Name';
            setTimeout(function () { _this.dialogRef.close(_this.data.wallet); }, 1500);
        }
    };
    NewWalletDialogComponent.prototype.close = function () {
        this.dialogRef.close(null);
    };
    NewWalletDialogComponent.prototype.validate = function () {
        if (!(this.data.wallet.name && this.data.wallet.name !== '')) {
            this.status = 'error';
            this.message = 'Wallet name is required';
            return false;
        }
        if (!(this.data.wallet.name.length > 3)) {
            this.status = 'error';
            this.message = 'Wallet name must minimun 4 characters';
            return false;
        }
        return true;
    };
    NewWalletDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-wallet-dialog',
            template: __webpack_require__("../../../../../src/app/account/dialogs/new-wallet-dialog/new-wallet-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/dialogs/new-wallet-dialog/new-wallet-dialog.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('fadeInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('500ms 0.5s', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(0, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0 }))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('fadeOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(500, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object])
    ], NewWalletDialogComponent);
    return NewWalletDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account/dialogs/remove-wallet-dialog/remove-wallet-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/dialogs/remove-wallet-dialog/remove-wallet-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n  <div class=\"alert alert-{{status}} \" *ngIf=\"message\" [@fadeInOut]>\n    <span class=\"glyphicon glyphicon-{{ status =='success' ? 'ok' : 'remove'}}\"></span>\n    {{message}}\n  </div>\n  <div class=\"form-group\" [@fadeOut] *ngIf=\"status!='success'\">\n    <p>\n      Are you sure remove wallet {{data.wallet.name}} with address {{data.wallet.address}}?\n    </p>\n    <hr>\n    <input type=\"password\" [(ngModel)]=\"data.user.password\" #password=\"ngModel\" placeholder=\"Password\" class=\"form-control-dark\" tabindex=\"1\"\n      required  pattern=\".{4,50}\"/>\n    <div class=\"form-control-error pull-right\" *ngIf=\"!password.valid && password.touched\">\n      <span class=\"glyphicon glyphicon-remove\"></span>\n    </div>\n    <div class=\"form-control-success pull-right\" *ngIf=\"password.valid && password.touched\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </div>\n  </div>\n</div>\n<div mat-dialog-actions [@fadeOut]  *ngIf=\"status!='success'\">\n  <div class=\"form-group pull-right\" style=\"width:100%\">\n    <input type=\"button\" class=\"btn btn-dark pull-right\" (click)=\"remove()\" value=\"Remove\" style=\"margin-left:1em;\" />\n    <input type=\"button\" class=\"btn btn-dark pull-right\" (click)=\"close()\" value=\"Close\" [disabled]=\"status =='success'\" />\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/account/dialogs/remove-wallet-dialog/remove-wallet-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveWalletDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var RemoveWalletDialogComponent = (function () {
    function RemoveWalletDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    RemoveWalletDialogComponent.prototype.remove = function () {
        var _this = this;
        if (this.validate()) {
            this.status = 'success';
            this.message = 'Removing Wallet ' + this.data.wallet.address;
            setTimeout(function () { _this.dialogRef.close(_this.data); }, 1500);
        }
    };
    RemoveWalletDialogComponent.prototype.close = function () {
        this.dialogRef.close(null);
    };
    RemoveWalletDialogComponent.prototype.validate = function () {
        if (this.data.user.password == '' || this.data.user.password == undefined) {
            this.status = 'error';
            this.message = 'Password is required';
            return false;
        }
        if (this.data.user.password.length < 4) {
            this.status = 'error';
            this.message = 'Password minmun length 4 characters required';
            return false;
        }
        return true;
    };
    RemoveWalletDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-remove-wallet-dialog',
            template: __webpack_require__("../../../../../src/app/account/dialogs/remove-wallet-dialog/remove-wallet-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/dialogs/remove-wallet-dialog/remove-wallet-dialog.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('fadeInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])("500ms 0.5s", Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(0, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0 }))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('fadeOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(500, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object])
    ], RemoveWalletDialogComponent);
    return RemoveWalletDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account/dialogs/wallet-name-dialog/wallet-name-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/dialogs/wallet-name-dialog/wallet-name-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n    <div class=\"alert alert-{{status}} \" *ngIf=\"message\" [@fadeInOut]>\n      <span class=\"glyphicon glyphicon-{{ status =='success' ? 'ok' : 'remove'}}\"></span>\n      {{message}}\n    </div>\n    <div class=\"form-group\" [@fadeOut] *ngIf=\"status!='success'\">\n      <input matInput [(ngModel)]=\"data.wallet.name\" #name=\"ngModel\" placeholder=\"Wallet Name\" class=\"form-control-dark\" tabindex=\"1\"\n        required  pattern=\".{4,50}\"/>\n      <div class=\"form-control-error pull-right\" *ngIf=\"!name.valid && name.touched\">\n        <span class=\"glyphicon glyphicon-remove\"></span>\n      </div>\n      <div class=\"form-control-success pull-right\" *ngIf=\"name.valid && name.touched\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </div>\n    </div>\n  </div>\n  <div mat-dialog-actions [@fadeOut]  *ngIf=\"status!='success'\">\n    <div class=\"form-group pull-right\" style=\"width:100%\">\n      <input type=\"button\" class=\"btn btn-dark pull-right\" (click)=\"accept()\" value=\"Accept\" style=\"margin-left:1em;\" />\n      <input type=\"button\" class=\"btn btn-dark pull-right\" (click)=\"close()\" value=\"Close\" [disabled]=\"status =='success'\" />\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/account/dialogs/wallet-name-dialog/wallet-name-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletNameDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var WalletNameDialogComponent = (function () {
    function WalletNameDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    WalletNameDialogComponent.prototype.accept = function () {
        var _this = this;
        if (this.validate()) {
            this.status = 'success';
            this.message = 'Valid Wallet Name';
            setTimeout(function () { _this.dialogRef.close(_this.data); }, 1500);
        }
    };
    WalletNameDialogComponent.prototype.close = function () {
        this.dialogRef.close(null);
    };
    WalletNameDialogComponent.prototype.validate = function () {
        if (!(this.data.wallet.name && this.data.wallet.name !== '')) {
            this.status = 'error';
            this.message = 'Wallet name is required';
            return false;
        }
        if (!(this.data.wallet.name.length > 3)) {
            this.status = 'error';
            this.message = 'Wallet name must minimun 4 characters';
            return false;
        }
        return true;
    };
    WalletNameDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wallet-name-dialog',
            template: __webpack_require__("../../../../../src/app/account/dialogs/wallet-name-dialog/wallet-name-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/dialogs/wallet-name-dialog/wallet-name-dialog.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('fadeInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('500ms 0.5s', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(0, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0 }))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('fadeOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(500, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object])
    ], WalletNameDialogComponent);
    return WalletNameDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatTooltipModule */],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation col-lg-12\">\n  <nav class=\"navbar navbar-dark topnav responsive\" id=\"myTopnav\">\n    <div class=\"container-fluid\">\n\n      <div class=\"navbar-header\">\n        <a [routerLink]=\"['/home']\" class=\"navbar-brand\">\n          Ethereum Wallet Platform\n        </a>\n        <ul class=\"nav navbar-nav\" *ngIf=\"menuVisible\">\n          <li>\n            <a [routerLink]=\"['/home']\" [routerLinkActive]=\"['active']\">\n              <span class=\"glyphicon glyphicon-home\"></span>\n              Home\n            </a>\n          </li>\n          <li *ngIf=\"identity\">\n            <a [routerLink]=\"['/account/wallets']\" [routerLinkActive]=\"['active']\">\n              <span class=\"glyphicon glyphicon-credit-card\"></span>\n              Wallets\n            </a>\n          </li>\n          <li *ngIf=\"identity\">\n            <a [routerLink]=\"['/account/profile']\" [routerLinkActive]=\"['active']\">\n              <span class=\"glyphicon glyphicon-user\"></span>\n              Profile\n            </a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/home' ,'node']\" [routerLinkActive]=\"['active']\">\n              <span class=\"glyphicon glyphicon-tasks\"></span>\n              Node Status\n            </a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/home' , 'services']\" [routerLinkActive]=\"['active']\">\n              <span class=\"glyphicon glyphicon-star\"></span>\n              Services\n            </a>\n          </li>\n          <li>\n              <a [routerLink]=\"['/home' , 'graphics']\" [routerLinkActive]=\"['active']\">\n                <span class=\"glyphicon glyphicon-stats\"></span>\n                Graphics\n              </a>\n            </li>\n        </ul>\n\n\n        <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"!identity && menuVisible\">\n          <li>\n            <a [routerLink]=\"['/register']\" [routerLinkActive]=\"['active']\">\n              <span class=\"glyphicon glyphicon-user\"></span>\n              Register\n            </a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/login']\" [routerLinkActive]=\"['active']\">\n              <span class=\"glyphicon glyphicon-user\"></span>\n              Login\n            </a>\n          </li>\n        </ul>\n\n        <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"identity && menuVisible\">\n          <li class=\"avatar\">\n            <img src=\"\" *ngIf=\"identity.image && identity.image != 'null'\" />\n          </li>\n          <li class=\"dropdown\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n              {{identity.name}}\n              <span class=\"caret\"></span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li>\n                <a [routerLink]=\"['/account/settings']\" class=\"pointer\">\n                  <span class=\"glyphicon glyphicon-cog\"></span>\n                  Settings\n                </a>\n              </li>\n              <li>\n                <a href=\"#\" (click)=\"logout()\" class=\"pointer\">\n                  <span class=\"glyphicon glyphicon-log-out\"></span>\n                  Salir\n                </a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n      <i class=\"icon glyphicon glyphicon-menu-hamburger\" (click)=\"toogleMenu()\"></i>\n    </div>\n  </nav>\n\n</div>\n<div class=\"col-lg-12 col-centered main-router-outlet\">\n  <router-outlet></router-outlet>\n  <div class=\"clearfix\"></div>\n</div>\n<footer id=\"footer\">\n  <div class=\"container\">\n    <p>© 2017 Megatone. All Rights Reserved.</p>\n    <ul class=\"list-inline\">\n      <li class=\"list-inline-item\">\n        <a href=\"#\">Privacy</a>\n      </li>\n      <li class=\"list-inline-item\">\n        <a href=\"#\">Terms</a>\n      </li>\n      <li class=\"list-inline-item\">\n        <a href=\"#\">FAQ</a>\n      </li>\n    </ul>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_nodeInformation_model__ = __webpack_require__("../../../../../src/app/models/nodeInformation.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_node_node_service__ = __webpack_require__("../../../../../src/app/services/node/node.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(_route, _router, _userService, _nodeService) {
        var _this = this;
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._nodeService = _nodeService;
        this.nodeInformation = new __WEBPACK_IMPORTED_MODULE_4__models_nodeInformation_model__["a" /* NodeInformation */]();
        this.nodeInformation.initSocket(this._nodeService);
        this._router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                _this.setVisibilityMenu();
                _this._route.params.subscribe(function (params) {
                    if (!params.target && _this._route.children['0'].component.name !== 'HomeComponent') {
                        document.getElementsByTagName('body')[0].scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.identity = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */]().loadLocal();
    };
    AppComponent.prototype.ngDoCheck = function () {
        this.identity = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */]().loadLocal();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this._nodeService.socket.disconnect();
    };
    AppComponent.prototype.logout = function () {
        this.identity = this.identity.removeLocal();
        this._router.navigate(['/']);
    };
    AppComponent.prototype.toogleMenu = function () {
        var x = document.getElementById('myTopnav');
        if (x.className.indexOf('visible') === -1) {
            x.className = 'navbar navbar-dark topnav responsive visible';
            this.menuVisible = true;
        }
        else {
            x.className = 'navbar navbar-dark topnav responsive';
            this.menuVisible = false;
        }
    };
    AppComponent.prototype.onResize = function (event) {
        this.setVisibilityMenu();
    };
    AppComponent.prototype.setVisibilityMenu = function () {
        var x = document.getElementById('myTopnav');
        if (window.innerWidth > 767) {
            x.className = 'navbar navbar-dark topnav responsive visible';
            this.menuVisible = true;
        }
        else {
            x.className = 'navbar navbar-dark topnav responsive';
            this.menuVisible = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onResize", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_5__services_node_node_service__["a" /* NodeService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__services_node_node_service__["a" /* NodeService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_account_module__ = __webpack_require__("../../../../../src/app/account/account.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_recover_password_recover_password_component__ = __webpack_require__("../../../../../src/app/components/recover-password/recover-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_recover_password_recover_password_component__["a" /* RecoverPasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_7__account_account_module__["a" /* AccountModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_charts_ng2_charts__["ChartsModule"]
            ],
            providers: [],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutingProviders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_recover_password_recover_password_component__ = __webpack_require__("../../../../../src/app/components/recover-password/recover-password.component.ts");





var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'home/:target', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'recover-password', component: __WEBPACK_IMPORTED_MODULE_4__components_recover_password_recover_password_component__["a" /* RecoverPasswordComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] }
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: Cabin, 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n  margin: 0 0 35px;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase\r\n}\r\np {\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n  margin: 0 0 25px\r\n}\r\n@media (min-width: 768px) {\r\n  p {\r\n      font-size: 18px;\r\n      line-height: 1.6;\r\n      margin: 0 0 35px\r\n  }\r\n}\r\n.masthead {\r\n  margin: 0;\r\n  padding: 0;\r\n  height: -webkit-fill-available;\r\n  position: relative;\r\n  left: 0;\r\n  display: table;\r\n  width: 100%;\r\n  padding: 200px 0;\r\n  text-align: center;\r\n  color: #fff;\r\n  background: url(/assets/img/background.jpg) no-repeat bottom center scroll;\r\n  /*background: url(https://i.ytimg.com/vi/NXkU7EzddoU/maxresdefault.jpg) no-repeat bottom center scroll;\r\n*/\r\n\r\n  background-color: #000;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n}\r\n.masthead .intro-body {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n.masthead .intro-body .brand-heading {\r\n  font-size: 50px\r\n}\r\n.masthead .intro-body .intro-text {\r\n  font-size: 18px\r\n}\r\n@media (min-width: 768px) {\r\n\r\n  .masthead .intro-body .brand-heading {\r\n      font-size: 100px\r\n  }\r\n  .masthead .intro-body .intro-text {\r\n      font-size: 22px\r\n  }\r\n}\r\n.btn-circle {\r\n  font-size: 26px;\r\n  width: 55px;\r\n  height: 55px;\r\n  margin-top: 15px;\r\n  line-height: 45px;\r\n  transition: background .3s ease-in-out;\r\n  color: #fff;\r\n  border: 2px solid #fff;\r\n  border-radius: 100%!important;\r\n  background: 0 0\r\n}\r\n.btn-circle > i {\r\n  left: 2px;\r\n  top: 2px;\r\n}\r\n.btn-circle:focus,\r\n.btn-circle:hover {\r\n  color: #fff;\r\n  outline: 0;\r\n  background: rgba(255, 255, 255, .1)\r\n}\r\n.content-section {\r\n  padding-top: 150px;\r\n  padding-bottom: 150px\r\n}\r\n@media (min-width: 992px) {\r\n  .content-section {\r\n      padding-top: 200px;\r\n      padding-bottom: 200px;\r\n  }\r\n\r\n}\r\n\r\n#node {\r\n  background:white;\r\n  margin-top: -20px;\r\n  color:black;\r\n}\r\n.service-heading {\r\n  margin: 15px 0;\r\n  text-transform: none\r\n}\r\n\r\n.fa-stack.fa-4x > i{\r\n  padding: 0.5em;\r\n  background: #ffffff;\r\n  border-radius: 100px;\r\n  font-size: 5em;\r\n  color: #3e486d;\r\n  margin: 0.5em 0;\r\n}\r\n\r\n.section-subheading{\r\n  font-size: 16px;\r\n  font-weight: 400;\r\n  font-style: italic;\r\n  margin-bottom: 75px;\r\n  text-transform: none;\r\n  font-family: 'Droid Serif','Helvetica Neue',Helvetica,Arial,sans-serif;\r\n}\r\n\r\n.text-muted{\r\ncolor:white;\r\n}\r\n.text{\r\ncolor:#3e486d;\r\n}\r\n.progress-bar-dark{\r\n  background:#3e486d;\r\n}\r\n.overlay-header-home{\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #0000003d;\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n#services{\r\n  background: url(/assets/img/background.jpg) no-repeat bottom center scroll;\r\n  background-color: #000;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  color:white;\r\n}\r\n.node-title{\r\n  font-size: 3em;\r\n}\r\n.node-number{\r\n  font-size: 5em;\r\n  font-weight: 0;\r\n  color:#3e486d;\r\n}\r\n\r\n.node-text-number{\r\n  font-size:2em;\r\n}\r\n\r\n.container-graphic{\r\n  width:100%;\r\n  padding:0;\r\n  margin:0;\r\n}\r\n\r\n.col-graphic{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#graphics{\r\n  background: url(/assets/img/background.jpg) no-repeat bottom center scroll;\r\n  background-color: #000;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  color: #3e486d;\r\n}\r\n\r\n.price-eth-container{\r\n  padding: 8em 0;\r\n  background: white;\r\n  margin-bottom: 8em;\r\n  background-image: url(/assets/img/ethereum.png);\r\n  background-repeat: no-repeat;\r\n  background-position: 50%;\r\n}\r\n\r\n.col-price-info .glyphicon{\r\n  text-align: center;\r\n  font-size: 3.2em;\r\n  margin-right:0.3em;\r\n}\r\n\r\n.col-price-info .text-price-info{\r\n  text-align: center;\r\n  font-size: 4em;\r\n}\r\n\r\n@media screen and (max-width: 991px) {\r\n  .price-eth-container{\r\n    background-image: none;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"masthead\">\n  <div id=\"particles-js\" class=\"overlay-header-home\"></div>\n  <div class=\"intro-body\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-centered\">\n          <h1 class=\"brand-heading\">Ethereum Wallet</h1>\n          <p class=\"intro-text\">A free platform to Ethereum wallets.\n            <br>Created by Megatone.</p>\n          <a class=\"btn btn-circle js-scroll-trigger\" (click)=\"scroll(node)\">\n            <i class=\"glyphicon glyphicon-chevron-down\"></i>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n\n<section #node id=\"node\" class=\"content-section text-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-centered\">\n        <h2 class=\"text node-title\">Ethereum Node Status</h2>\n        <p class=\"text\">Our ethereum wallets platform has its own complete and functional node connected to the Ethereum network, the node\n          is based on the GETH technology and its purpose is to share the entire block chain in a fast, efficient and decentralized\n          way.\n        </p>\n        <hr>\n        <br>\n        <h2 class=\"text\">{{nodeInformation.pendingBlocks |number }} Pending Blocks </h2>\n        <div class=\"progress\">\n          <div class=\"progress-bar progress-bar-dark\" role=\"progressbar\" aria-valuenow=\"syncPercent\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n            [ngStyle]=\"{'width': nodeInformation.percentProgress + '%'}\">\n          </div>\n        </div>\n        <h2 class=\"text\">Sync {{nodeInformation.percentProgress | number }}% Complete </h2>\n        <br>\n        <hr>\n        <div id=\"node-numbers\">\n          <div class=\"col-md-4\">\n            <span class=\"node-number\">\n              {{nodeInformation.wallets}}\n            </span>\n            <h4 class=\"node-text-number text\">Wallets</h4>\n          </div>\n          <div class=\"col-md-4\">\n            <span class=\"node-number\">\n              {{nodeInformation.transactions}}\n            </span>\n            <h4 class=\"node-text-number text\">Transactions</h4>\n          </div>\n          <div class=\"col-md-4\">\n            <span class=\"node-number\">\n              {{nodeInformation.users}}\n            </span>\n            <h4 class=\"node-text-number text\">Users</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section #services id=\"services\" class=\"content-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <h1 class=\"section-heading text-uppercase\">Services</h1>\n        <h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3>\n      </div>\n    </div>\n    <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <span class=\"fa-stack fa-4x\">\n          <i class=\"glyphicon glyphicon-credit-card\"></i>\n        </span>\n        <h4 class=\"service-heading\">Wallets</h4>\n        <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni,\n          dicta impedit.</p>\n      </div>\n      <div class=\"col-md-4\">\n        <span class=\"fa-stack fa-4x\">\n          <i class=\"glyphicon glyphicon-sort\"></i>\n        </span>\n        <h4 class=\"service-heading\">Transactions</h4>\n        <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni,\n          dicta impedit.</p>\n      </div>\n      <div class=\"col-md-4\">\n        <span class=\"fa-stack fa-4x\">\n          <i class=\"glyphicon glyphicon-lock\"></i>\n        </span>\n        <h4 class=\"service-heading\">Security</h4>\n        <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni,\n          dicta impedit.</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<section #graphics id=\"graphics\">\n  <div class=\"container-fluid container-graphic\">\n    <div class=\"price-eth-container\">\n      <div class=\"container\">\n        <div class=\"row text-center\">\n          <div class=\"col-md-6 col-price-info\">\n            <span class=\"glyphicon glyphicon-usd\"></span>\n            <span class=\"text-price-info\">{{nodeInformation.price_usd}}</span>\n          </div>\n          <div class=\"col-md-6 col-price-info\">\n            <span class=\"glyphicon glyphicon-bitcoin\"></span>\n            <span class=\"text-price-info\">{{nodeInformation.price_btc}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-graphic\">\n      <canvas *ngIf=\"chart.data[0].data.length > 0\" baseChart style=\"width:100%;height:-webkit-fill-available!important;max-height:500px\"\n        [datasets]=\"chart.data\" [labels]=\"chart.labels\" [options]=\"chart.options\" [colors]=\"chart.colors\" [legend]=\"chart.legend\"\n        [chartType]=\"chart.type\"></canvas>\n    </div>\n  </div>\n</section>\n<div class=\"clearfix\" style=\"padding-bottom:8em\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_node_node_service__ = __webpack_require__("../../../../../src/app/services/node/node.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_nodeInformation_model__ = __webpack_require__("../../../../../src/app/models/nodeInformation.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(_route, _router, _nodeService) {
        var _this = this;
        this._route = _route;
        this._router = _router;
        this._nodeService = _nodeService;
        this.syncPercent = 100;
        this.pendingBlocks = 0;
        this.users = 0;
        this.transactions = 0;
        this.wallets = 0;
        this.chart = {
            legend: false,
            type: 'line',
            options: {
                responsive: false,
                scales: {
                    yAxes: [{ display: false }],
                    xAxes: [{ display: false }]
                }
            },
            labels: [],
            data: [
                {
                    data: [],
                    pointRadius: 5,
                    pointHoverRadius: 5,
                    pointHitRadius: 10,
                    pointBorderWidth: 1,
                    pointHoverBorderWidth: 2
                }
            ],
            colors: [
                {
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderColor: 'white',
                    pointBackgroundColor: 'white',
                    pointHoverBackgroundColor: '#fff',
                    pointBorderColor: '#17203e',
                    pointHoverBorderColor: '#17203e'
                }
            ],
            timeLabels: [
                { days: 30, label: 'MONTH' },
                { days: 365, label: 'YEAR' },
                { days: 1, label: 'DAY' }
            ],
            indexTimeLabel: 0
        };
        this.nodeInformation = new __WEBPACK_IMPORTED_MODULE_3__models_nodeInformation_model__["a" /* NodeInformation */]().loadLocal();
        this._route.params.subscribe(function (params) {
            _this.target = params.target;
            if (!_this.target) {
                _this.scroll(document.getElementsByTagName('body')[0]);
            }
        });
        this.getPriceHistory();
    }
    HomeComponent.prototype.ngOnInit = function () {
        particlesJS.load('particles-js', 'assets/particles.json', null);
        this.nodeInformation.suscribeChanges();
    };
    HomeComponent.prototype.ngDoCheck = function () {
        if (this.target && this.target !== 'blank') {
            this.scroll(document.getElementById(this.target));
            this._router.navigate(['/home', 'blank']);
        }
        else if (this.target !== 'blank') {
            document.getElementsByTagName('body')[0].scrollIntoView({
                block: 'start'
            });
        }
    };
    HomeComponent.prototype.scroll = function (el) {
        if (el) {
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            this.target = 'blank';
        }
    };
    HomeComponent.prototype.getPriceHistory = function () {
        var _this = this;
        var days = this.chart.timeLabels[this.chart.indexTimeLabel].days;
        this._nodeService.getPriceHistory(days).subscribe(function (response) {
            for (var i = 0; i <= response.data.length - 1; i++) {
                var d = new Date(response.data[i].time * 1000);
                var yyyy = d.getFullYear().toString();
                var MM = (d.getMonth() + 101).toString().slice(-2);
                var dd = (d.getDate() + 100).toString().slice(-2);
                var hh = (d.getHours()).toString().slice(-2);
                _this.chart.labels.push((days === 1) ? dd + '-' + MM + '-' + yyyy + ' ' + hh + ':00' : dd + '-' + MM + '-' + yyyy);
                _this.chart.data[0].data.push(response.data[i].close);
            }
        }, function (error) {
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_node_node_service__["a" /* NodeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_node_node_service__["a" /* NodeService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box-dark {\r\n  background: #090f21;\r\n  border: 1px solid #767d94;\r\n  border-radius: 5px;\r\n  margin-top: 0em;\r\n  box-shadow: 4px 4px 12px black;\r\n  padding: 2em;\r\n}\r\n\r\n.box-container-4{\r\n  min-width: 300px;\r\n  max-width: 400px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-4 col-centered box-container-4\" style=\"padding-top:2em;\">\n\n  <div class=\"row\" style=\"padding:0\">\n    <div class=\"alert alert-{{status}}\" *ngIf=\"message\" [@fadeInOut]>\n      <span class=\"glyphicon glyphicon-{{ status =='success' ? 'ok' : 'remove'}}\"></span>\n      {{message}}\n    </div>\n  </div>\n\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"login()\" class=\"row box-dark\" [@fadeOutform] *ngIf=\"!needVerifyTwoFactor\">\n    <div [@fadeOutform] *ngIf=\"status != 'success'\">\n      <div class=\"form-group\">\n        <input type=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" placeholder=\"Email\" class=\"form-control-dark\"\n          pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" required/>\n        <div class=\"form-control-error pull-right\" *ngIf=\"!email.valid && email.touched\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </div>\n        <div class=\"form-control-success pull-right\" *ngIf=\"email.valid && email.touched\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" placeholder=\"Password\" class=\"form-control-dark\"\n          pattern=\".{3,50}\" required/>\n        <div class=\"form-control-error pull-right\" *ngIf=\"!password.valid && password.touched\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </div>\n        <div class=\"form-control-success pull-right\" *ngIf=\"password.valid && password.touched\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"submit\" class=\"btn btn-dark pull-right\" [disabled]=\"!loginForm.form.valid\" value=\"Login\" />\n        <a href=\"#\" class=\"a-recover-password\">Recover Password</a>\n      </div>\n\n    </div>\n\n  </form>\n\n  <form #verifyForm=\"ngForm\" (ngSubmit)=\"loginTwoFactor()\" class=\"row box-dark \" [@fadeOutform] *ngIf=\"needVerifyTwoFactor\">\n\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"code\" #code=\"ngModel\" [(ngModel)]=\"verifyCode\" placeholder=\"Pin code\" class=\"form-control-dark\"\n        pattern=\"^(0|[1-9][0-9]*)$\" required/>\n      <div class=\"form-control-error pull-right\" *ngIf=\"!code.valid && code.touched\">\n        <span class=\"glyphicon glyphicon-remove\"></span>\n      </div>\n      <div class=\"form-control-success pull-right\" *ngIf=\"code.valid && code.touched\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <input type=\"submit\" class=\"btn btn-dark pull-right\" [disabled]=\"!verifyForm.form.valid\" value=\"Verify\" />\n    </div>\n    <div class=\"clearfix\"></div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.needVerifyTwoFactor = false;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */]();
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._userService.login(this.user).subscribe(function (response) {
            if (response.needVerifyTwoFactor === true) {
                _this.needVerifyTwoFactor = true;
                _this.status = 'success';
                _this.message = response.message;
            }
            else {
                if (response.user && response.user._id && response.token) {
                    _this.identity = new __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */](response.user, response.token);
                    _this.identity.saveLocal();
                    _this.status = 'success';
                    _this.message = response.message;
                    setTimeout(function () { _this._router.navigate(['/account/wallets']); }, 1000);
                }
            }
        }, function (error) {
            _this.status = 'error';
            _this.message = error.json().message;
        });
    };
    LoginComponent.prototype.loginTwoFactor = function () {
        var _this = this;
        this._userService.loginTwoFactor(this.user, this.verifyCode).subscribe(function (response) {
            if (response.user && response.user._id && response.token) {
                _this.identity = new __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */](response.user, response.token);
                _this.identity.saveLocal();
                _this.status = 'success';
                _this.message = response.message;
                setTimeout(function () { _this._router.navigate(['/account/wallets']); }, 1000);
            }
        }, function (error) {
            _this.status = 'error';
            _this.message = error.json().message;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_user_user_service__["a" /* UserService */]
            ],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fadeInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])("500ms 0.5s", Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fadeOutform', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(500, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_user_service__["a" /* UserService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/recover-password/recover-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/recover-password/recover-password.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  recover-password works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/recover-password/recover-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecoverPasswordComponent = (function () {
    function RecoverPasswordComponent() {
    }
    RecoverPasswordComponent.prototype.ngOnInit = function () {
    };
    RecoverPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-recover-password',
            template: __webpack_require__("../../../../../src/app/components/recover-password/recover-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/recover-password/recover-password.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], RecoverPasswordComponent);
    return RecoverPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-5 col-lg-offset-4\">\n  <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-12 form-dark form-login\">\n    <div class=\"alert alert-{{status}} \" *ngIf=\"message\" [@fadeInOut]>\n      <span class=\"glyphicon glyphicon-{{ status =='success' ? 'ok' : 'remove'}}\"></span>\n      {{message}}\n    </div>\n    <div [@fadeOutform] *ngIf=\"status != 'success'\">\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"user.name\" placeholder=\"Name\" class=\"form-control-dark\" required/>\n        <div class=\"form-control-error pull-right\" *ngIf=\"!name.valid && name.touched\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </div>\n        <div class=\"form-control-success pull-right\" *ngIf=\"name.valid && name.touched\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"surname\" #surname=\"ngModel\" [(ngModel)]=\"user.surname\" placeholder=\"Surname\" class=\"form-control-dark\"\n          required/>\n        <div class=\"form-control-error pull-right\" *ngIf=\"!surname.valid && surname.touched\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </div>\n        <div class=\"form-control-success pull-right\" *ngIf=\"surname.valid && surname.touched\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" placeholder=\"Email\" class=\"form-control-dark\"\n          pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" required/>\n        <div class=\"form-control-error pull-right\" *ngIf=\"!email.valid && email.touched\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </div>\n        <div class=\"form-control-success pull-right\" *ngIf=\"email.valid && email.touched\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" placeholder=\"Password\" class=\"form-control-dark\"\n          required/>\n        <div class=\"form-control-error pull-right\" *ngIf=\"!password.valid && password.touched\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </div>\n        <div class=\"form-control-success pull-right\" *ngIf=\"password.valid && password.touched\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"number\" name=\"phone\" #phone=\"ngModel\" [(ngModel)]=\"user.phone\" placeholder=\"Phone\" class=\"form-control-dark\"\n          required/>\n        <div class=\"form-control-error pull-right\" *ngIf=\"!phone.valid && phone.touched\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </div>\n        <div class=\"form-control-success pull-right\" *ngIf=\"phone.valid && phone.touched\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <select name=\"country\" #country=\"ngModel\" [(ngModel)]=\"user.country\" class=\"form-control-dark\" required>\n          <option value=\"-1\" selected=\"selected\" disabled>Select Country</option>\n          <option *ngFor=\"let country of countries\" [ngValue]=\"country\">{{ country.name }}</option>\n        </select>\n        <div class=\"form-control-error pull-right\" *ngIf=\"!country.valid && country.touched\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </div>\n        <div class=\"form-control-success pull-right\" *ngIf=\"country.valid && country.touched\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"address\" #address=\"ngModel\" [(ngModel)]=\"user.address\" placeholder=\"Address\" class=\"form-control-dark\"\n          required/>\n        <div class=\"form-control-error pull-right\" *ngIf=\"!address.valid && address.touched\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </div>\n        <div class=\"form-control-success pull-right\" *ngIf=\"address.valid && address.touched\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"submit\" class=\"btn btn-dark pull-right\" [disabled]=\"!registerForm.form.valid\" />\n        <span>&nbsp;</span>\n      </div>\n    </div>\n    <div class=\"row\" [@fadeOutform] *ngIf=\"status == 'success'\">\n      <span class=\"span-center\"> Now you can loguin\n        <a [routerLink]=\"['/login']\">here</a>\n      </span>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(_route, _router, _userService) {
        var _this = this;
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user_model__["a" /* User */]({});
        this._userService.getCountries().subscribe(function (response) {
            _this.countries = (response.countries) ? response.countries : [];
        }, function (error) {
            _this.status = 'error';
            _this.message = error.json().message;
            _this.countries = [];
        });
    }
    ;
    RegisterComponent.prototype.ngOnInit = function () {
        console.log('Register Component Cargado');
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.message = undefined;
        this._userService.register(this.user).subscribe(function (response) {
            _this.status = 'success';
            _this.message = response.message;
        }, function (error) {
            _this.status = 'error';
            _this.message = error.json().message;
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_user_service__["a" /* UserService */]],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fadeInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])("500ms 0.5s", Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fadeOutform', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(500, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_user_service__["a" /* UserService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/alert.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alert; });
var Alert = (function () {
    function Alert(alert) {
        if (alert === void 0) { alert = {}; }
        this.load(alert);
    }
    Alert.prototype.load = function (alert) {
        if (alert === void 0) { alert = {}; }
        var _this = alert;
        this.message = _this.message ? _this.message : '';
        this.type = _this.type ? _this.type : '';
        this.status = _this.status ? _this.status : false;
        this.redirect = _this.redirect ? _this.redirect : false;
        this.url = _this.url ? _this.url : '';
    };
    Alert.prototype.error = function (message, redirect, url) {
        if (redirect === void 0) { redirect = false; }
        if (url === void 0) { url = ''; }
        this.load({ type: 'error', message: message, status: true, redirect: redirect, url: url });
        this.saveLocal();
        return this;
    };
    Alert.prototype.success = function (message, redirect, url) {
        if (redirect === void 0) { redirect = false; }
        if (url === void 0) { url = ''; }
        this.load({ type: 'success', message: message, status: true, redirect: redirect, url: url });
        this.saveLocal();
        return this;
    };
    Alert.prototype.info = function (message, redirect, url) {
        if (redirect === void 0) { redirect = false; }
        if (url === void 0) { url = ''; }
        this.load({ type: 'info', message: message, status: true, redirect: redirect, url: url });
        this.saveLocal();
        return this;
    };
    Alert.prototype.warning = function (message, redirect, url) {
        if (redirect === void 0) { redirect = false; }
        if (url === void 0) { url = ''; }
        this.load({ type: 'warning', message: message, status: true, redirect: redirect, url: url });
        this.saveLocal();
        return this;
    };
    Alert.prototype.show = function () {
        this.status = true;
        return this;
    };
    Alert.prototype.hide = function () {
        this.status = false;
        return this;
    };
    Alert.prototype.suscribeChanges = function (router) {
        var _this = this;
        $(window).bind('emitAlert', function () {
            _this.loadLocal();
            if (_this.redirect === true) {
                setTimeout(function () { router.navigate([_this.url]); }, 1500);
            }
        });
    };
    Alert.prototype.saveLocal = function () {
        localStorage.setItem('alert', JSON.stringify(this));
        $(window).trigger($.Event('emitAlert'));
    };
    Alert.prototype.loadLocal = function () {
        var alert = JSON.parse(localStorage.getItem('alert'));
        this.load((alert !== null) ? alert : {});
        return this;
    };
    return Alert;
}());



/***/ }),

/***/ "../../../../../src/app/models/country.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Country; });
var Country = (function () {
    function Country(name, code) {
        this.name = name;
        this.code = code;
    }
    return Country;
}());



/***/ }),

/***/ "../../../../../src/app/models/nodeInformation.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeInformation; });
var NodeInformation = (function () {
    function NodeInformation(_nodeInformation) {
        if (_nodeInformation === void 0) { _nodeInformation = {}; }
        this.load(_nodeInformation);
    }
    NodeInformation.prototype.load = function (_nodeInformation) {
        if (_nodeInformation === void 0) { _nodeInformation = {}; }
        var _this = _nodeInformation;
        this.users = _this.users ? _this.users : 0;
        this.wallets = _this.wallets ? _this.wallets : 0;
        this.transactions = _this.transactions ? _this.transactions : 0;
        this.pendingBlocks = _this.pendingBlocks ? _this.pendingBlocks : 0;
        this.percentProgress = _this.percentProgress ? _this.percentProgress : 0;
        this.price_usd = _this.price_usd ? _this.price_usd : 0;
        this.price_btc = _this.price_btc ? _this.price_btc : 0;
        this.last_update = new Date();
    };
    NodeInformation.prototype.suscribeChanges = function () {
        var _this = this;
        $(window).bind('emitNodeInformation', function () { _this.loadLocal(); });
    };
    NodeInformation.prototype.initSocket = function (_nodeService) {
        var _this = this;
        _nodeService.getNodeInformation().subscribe(function (nodeInformation) {
            _this.load(nodeInformation);
            _this.saveLocal();
        });
    };
    NodeInformation.prototype.saveLocal = function () {
        localStorage.setItem('nodeInformation', JSON.stringify(this));
        $(window).trigger($.Event('emitNodeInformation'));
    };
    NodeInformation.prototype.loadLocal = function () {
        var nodeInformation = JSON.parse(localStorage.getItem('nodeInformation'));
        this.load((nodeInformation !== null) ? nodeInformation : {});
        return this;
    };
    return NodeInformation;
}());



/***/ }),

/***/ "../../../../../src/app/models/transaction.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transaction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wallet_model__ = __webpack_require__("../../../../../src/app/models/wallet.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");


var Transaction = (function () {
    function Transaction(transaction) {
        if (transaction === void 0) { transaction = {}; }
        this.load(transaction);
    }
    Transaction.prototype.load = function (transaction) {
        if (transaction === void 0) { transaction = {}; }
        var _this = transaction;
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
        this.user = _this.user ? _this.user : new __WEBPACK_IMPORTED_MODULE_1__user_model__["a" /* User */]();
        this.wallet = _this.wallet ? _this.wallet : new __WEBPACK_IMPORTED_MODULE_0__wallet_model__["a" /* Wallet */]();
    };
    Transaction.prototype.get = function (walletService) {
        var _this = this;
        walletService.getTransaction(this).subscribe(function (response) {
            _this.load(response.transaction);
        });
        return this;
    };
    return Transaction;
}());



/***/ }),

/***/ "../../../../../src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__country_model__ = __webpack_require__("../../../../../src/app/models/country.model.ts");

var User = (function () {
    function User(identity, token) {
        if (identity === void 0) { identity = {}; }
        if (token === void 0) { token = null; }
        this.load(identity);
        this.token = token;
    }
    User.prototype.saveLocal = function () {
        localStorage.setItem('identity', JSON.stringify(this));
    };
    User.prototype.loadLocal = function () {
        var identity = JSON.parse(localStorage.getItem('identity'));
        if (identity === null) {
            return null;
        }
        this.load(identity);
        return this;
    };
    User.prototype.removeLocal = function () {
        localStorage.removeItem('identity');
        return null;
    };
    User.prototype.load = function (identity) {
        if (identity === void 0) { identity = {}; }
        var _this = identity;
        this._id = _this._id ? _this._id : '';
        this.name = _this.name ? _this.name : '';
        this.surname = _this.surname ? _this.surname : '';
        this.email = _this.email ? _this.email : '';
        this.password = _this.password ? _this.password : '';
        this.role = _this.role ? _this.role : '';
        this.phone = _this.phone ? _this.phone : '';
        this.country = _this.country ? _this.country : new __WEBPACK_IMPORTED_MODULE_0__country_model__["a" /* Country */]('', '');
        this.address = _this.address ? _this.address : '';
        this.registerDate = _this.registerDate ? _this.registerDate : '';
        this.updateDate = _this.updateDate ? _this.updateDate : '';
        this.lastLogin = _this.lastLogin ? _this.lastLogin : '';
        this.token = _this.token ? _this.token : '';
        this.totp = _this.totp ? _this.totp : { active: false };
        this.wallets = _this.wallets ? _this.wallets : new Array();
    };
    User.prototype.getWallets = function (walletService) {
        var _this = this;
        walletService.getWallets().subscribe(function (wallets) {
            _this.wallets = wallets.wallets;
        });
    };
    User.prototype.createNewWallet = function (walletService, wallet) {
        var _this = this;
        walletService.newWallet(wallet).subscribe(function (newWallet) {
            _this.getWallets(walletService);
        });
    };
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/models/wallet.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wallet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_model__ = __webpack_require__("../../../../../src/app/models/alert.model.ts");


var Wallet = (function () {
    function Wallet(_wallet) {
        if (_wallet === void 0) { _wallet = {}; }
        this.load(_wallet);
        this.alert = new __WEBPACK_IMPORTED_MODULE_1__alert_model__["a" /* Alert */]();
    }
    Wallet.prototype.load = function (_wallet) {
        if (_wallet === void 0) { _wallet = {}; }
        var _this = _wallet;
        this._id = _this._id ? _this._id : '';
        this.address = _this.address ? _this.address : '';
        this.password = _this.password ? _this.password : '';
        this.balance = _this.balance ? _this.balance : 0;
        this.registerDate = _this.registerDate ? _this.registerDate : '';
        this.updateDate = _this.updateDate ? _this.updateDate : '';
        this.user = _this.user ? _this.user : new __WEBPACK_IMPORTED_MODULE_0__user_model__["a" /* User */]();
        this.name = _this.name ? _this.name : '';
        this.refreshing = _this.refreshing !== undefined ? _this.refreshing : true;
        this.transactions = _this.transactions ? _this.transactions : [];
    };
    Wallet.prototype.get = function (walletService) {
        var _this = this;
        walletService.getWallet(this).subscribe(function (response) {
            _this.refreshing = true;
            _this.load(response.wallet);
            _this.refreshBalance(walletService);
            _this.getTransactions(walletService);
        }, function (error) {
            _this.alert.error(error.json().message);
        });
        return this;
    };
    Wallet.prototype.getTransactions = function (walletService) {
        var _this = this;
        walletService.getTransactions(this).subscribe(function (response) {
            _this.transactions = response.transactions;
        }, function (error) {
            _this.alert.error(error.json().message);
        });
        return this;
    };
    Wallet.prototype.refreshBalance = function (walletService) {
        var _this = this;
        walletService.getBalance(this).subscribe(function (response) {
            _this.balance = response.balance;
            setTimeout(function () { _this.refreshing = false; }, 1500);
        }, function (error) {
            _this.alert.error(error.json().message);
        });
        return this;
    };
    Wallet.prototype.remove = function (walletService, password) {
        var _this = this;
        walletService.removeWallet(this, password).subscribe(function (response) {
            _this.refreshing = true;
            _this.alert.success(response.message, true, '/account/wallets');
            _this.load({});
            setTimeout(function () { _this.refreshing = false; }, 1500);
        }, function (error) {
            _this.alert.error(error.json().message);
        });
        return this;
    };
    Wallet.prototype.updateName = function (walletService, newName) {
        var _this = this;
        walletService.updateWalletName(this, newName).subscribe(function (response) {
            _this.refreshing = true;
            _this.alert.success(response.message);
            setTimeout(function () { _this.name = newName; _this.refreshing = false; }, 1500);
        }, function (error) {
            _this.alert.error(error.json().message);
        });
        return this;
    };
    return Wallet;
}());



/***/ }),

/***/ "../../../../../src/app/services/global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GLOBAL; });
var GLOBAL = {
    SOCKET_URL: 'http://localhost:8002',
    API_URL: 'http://localhost:8000/api/'
};


/***/ }),

/***/ "../../../../../src/app/services/node/node.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NodeService = (function () {
    function NodeService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_4__global__["a" /* GLOBAL */].API_URL;
        this.urlSocket = __WEBPACK_IMPORTED_MODULE_4__global__["a" /* GLOBAL */].SOCKET_URL;
    }
    NodeService.prototype.getNodeInformation = function () {
        var _this = this;
        this.socket = __WEBPACK_IMPORTED_MODULE_5_socket_io_client__(this.urlSocket);
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('node-information', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
    };
    NodeService.prototype.getPriceHistory = function (days) {
        var params = JSON.stringify({ days: days });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.url + 'get-price-history', params, options)
            .map(function (res) { return res.json(); });
    };
    NodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], NodeService);
    return NodeService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].API_URL;
        this.identity = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */]().loadLocal();
    }
    UserService.prototype.register = function (modelUser) {
        var params = JSON.stringify({ user: modelUser });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.url + 'register', params, options)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.login = function (modelUser) {
        var params = JSON.stringify({ email: modelUser.email, password: modelUser.password });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.url + 'login', params, options)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.loginTwoFactor = function (modelUser, verifyCode) {
        var params = JSON.stringify({ email: modelUser.email, password: modelUser.password, code: verifyCode });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.url + 'login-two-factor', params, options)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getCountries = function () {
        return this._http.get(this.url + 'get-countries')
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.updateUserProfile = function (modelUser) {
        var params = JSON.stringify({ userId: modelUser._id, user: modelUser });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': modelUser.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.put(this.url + 'update-profile', params, options)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.configure2A = function (modelUser) {
        var params = JSON.stringify({ userId: modelUser._id, password: modelUser.password });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': modelUser.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.url + 'configure-2a', params, options)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.enable2A = function (modelUser, code) {
        var params = JSON.stringify({ userId: modelUser._id, code: code });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': modelUser.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.url + 'enable-2a', params, options)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.disable2A = function (modelUser) {
        var params = JSON.stringify({ userId: modelUser._id, password: modelUser.password });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': modelUser.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.url + 'disable-2a', params, options)
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/wallet/wallet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WalletService = (function () {
    function WalletService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].API_URL;
        this.identity = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */]().loadLocal();
    }
    WalletService.prototype.getWallets = function () {
        var params = JSON.stringify({ userId: this.identity._id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': this.identity.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.url + 'get-wallets', params, options)
            .map(function (res) { return res.json(); });
    };
    WalletService.prototype.getWallet = function (modelWallet) {
        var params = JSON.stringify({ userId: this.identity._id, walletId: modelWallet._id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': this.identity.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.url + 'get-wallet', params, options)
            .map(function (res) { return res.json(); });
    };
    WalletService.prototype.getBalance = function (modelWallet) {
        var params = JSON.stringify({ userId: this.identity._id, walletId: modelWallet._id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': this.identity.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.url + 'get-balance', params, options)
            .map(function (res) { return res.json(); });
    };
    WalletService.prototype.newWallet = function (modelWallet) {
        var params = JSON.stringify({ userId: this.identity._id, walletName: modelWallet.name });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': this.identity.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.url + 'new-wallet', params, options)
            .map(function (res) { return res.json(); });
    };
    WalletService.prototype.updateWalletName = function (modelWallet, newName) {
        var params = JSON.stringify({ userId: this.identity._id, walletName: newName, walletId: modelWallet._id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': this.identity.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.url + 'update-wallet-name', params, options)
            .map(function (res) { return res.json(); });
    };
    WalletService.prototype.getTransactions = function (modelWallet) {
        var params = JSON.stringify({ userId: this.identity._id, walletId: modelWallet._id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': this.identity.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.url + 'get-transactions', params, options)
            .map(function (res) { return res.json(); });
    };
    WalletService.prototype.removeWallet = function (modelWallet, password) {
        var params = JSON.stringify({ userId: this.identity._id, walletId: modelWallet._id, password: password });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': this.identity.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.url + 'remove-wallet', params, options)
            .map(function (res) { return res.json(); });
    };
    WalletService.prototype.getTransaction = function (modelTransaction) {
        // tslint:disable-next-line:max-line-length
        var params = JSON.stringify({ userId: this.identity._id, walletId: modelTransaction.wallet._id, transactionId: modelTransaction._id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': this.identity.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.url + 'get-transaction', params, options)
            .map(function (res) { return res.json(); });
    };
    WalletService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], WalletService);
    return WalletService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map