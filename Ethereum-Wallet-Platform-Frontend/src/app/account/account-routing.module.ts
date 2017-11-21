import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { AccountComponent } from './components/account/account.component';
import { WalletsComponent } from './components/wallets/wallets.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';

const adminRoutes: Routes = [{
  path: 'account',
  component: AccountComponent,
  canActivate: [],
  children: [
    { path: '', redirectTo: 'wallets', pathMatch: 'full' },
    { path: 'wallets', component: WalletsComponent },
    { path: 'wallet/:walletId', component: WalletComponent },
    { path: 'wallet/:walletId/transaction/:transactionId', component: TransactionComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '**', component: WalletsComponent }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule { }
