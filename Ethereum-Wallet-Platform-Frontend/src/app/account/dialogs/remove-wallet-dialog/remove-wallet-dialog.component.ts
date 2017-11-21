import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Wallet } from '../../../models/wallet.model';
import { fadeInContent } from '@angular/material';
import { trigger, transition, style, animate } from '@angular/animations';
import { User } from '../../../models/user.model';


@Component({
  selector: 'app-remove-wallet-dialog',
  templateUrl: './remove-wallet-dialog.component.html',
  styleUrls: ['./remove-wallet-dialog.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate("500ms 0.5s", style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(0, style({ opacity: 0 }))
      ])
    ]),
    trigger('fadeOut', [
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class RemoveWalletDialogComponent {

  public status: string;
  public message: string;

  constructor(
    public dialogRef: MatDialogRef<RemoveWalletDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { wallet: Wallet, user: User }
  ) { }


  remove(): void {
    if (this.validate()) {
      this.status = 'success';
      this.message = 'Removing Wallet ' + this.data.wallet.address;
      setTimeout(() => { this.dialogRef.close(this.data) }, 1500)
    }
  }

  close(): void {
    this.dialogRef.close(null);
  }

  validate(): boolean {
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
  }


}
