import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWalletComponent } from './card-wallet.component';

describe('CardWalletComponent', () => {
  let component: CardWalletComponent;
  let fixture: ComponentFixture<CardWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
