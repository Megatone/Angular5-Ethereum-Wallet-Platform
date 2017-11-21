import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveWalletDialogComponent } from './remove-wallet-dialog.component';

describe('RemoveWalletDialogComponent', () => {
  let component: RemoveWalletDialogComponent;
  let fixture: ComponentFixture<RemoveWalletDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveWalletDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveWalletDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
