import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Wallet } from '../../../models/wallet.model';
import { fadeInContent } from '@angular/material';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-new-wallet-dialog',
  templateUrl: './new-wallet-dialog.component.html',
  styleUrls: ['./new-wallet-dialog.component.css'],
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
export class NewWalletDialogComponent {
  public status: string;
  public message: string;

  constructor(
    public dialogRef: MatDialogRef<NewWalletDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  create(): void {
    if (this.validate()) {
      this.status = 'success';
      this.message = 'Valid Wallet Name';
      setTimeout(() => { this.dialogRef.close(this.data.wallet); }, 1500);
    }
  }

  close(): void {
    this.dialogRef.close(null);
  }

  validate(): boolean {

    if (!(this.data.wallet.name && this.data.wallet.name != '')) {
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
  }

}
