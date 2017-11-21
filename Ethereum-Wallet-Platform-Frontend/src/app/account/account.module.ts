import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRoutingModule } from './account-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule } from 'ngx-clipboard';

// components
import { WalletsComponent } from './components/wallets/wallets.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AccountComponent } from './components/account/account.component';
import { NewWalletDialogComponent } from './dialogs/new-wallet-dialog/new-wallet-dialog.component';
import { WalletNameDialogComponent } from './dialogs/wallet-name-dialog/wallet-name-dialog.component';
import { RemoveWalletDialogComponent } from './dialogs/remove-wallet-dialog/remove-wallet-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxQRCodeModule,
    ReactiveFormsModule,
    BrowserModule,
    ClipboardModule
  ],
  declarations: [
    WalletsComponent,
    WalletComponent,
    TransactionComponent,
    ProfileComponent,
    SettingsComponent,
    AccountComponent,
    NewWalletDialogComponent,
    WalletNameDialogComponent,
    RemoveWalletDialogComponent
  ],
  exports: [

  ],
  providers: [
  ],

  bootstrap: [
    NewWalletDialogComponent,
    WalletNameDialogComponent,
    ProfileComponent,
    RemoveWalletDialogComponent
  ]
})
export class AccountModule { }
