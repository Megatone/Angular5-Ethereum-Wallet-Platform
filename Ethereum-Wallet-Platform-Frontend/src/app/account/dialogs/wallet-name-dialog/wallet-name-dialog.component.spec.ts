import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletNameDialogComponent } from './wallet-name-dialog.component';

describe('WalletNameDialogComponent', () => {
  let component: WalletNameDialogComponent;
  let fixture: ComponentFixture<WalletNameDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletNameDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
