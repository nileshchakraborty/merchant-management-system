/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReceivedOrdersFromMerchantComponent } from './received-orders-from-merchant.component';

describe('ReceivedOrdersFromMerchantComponent', () => {
  let component: ReceivedOrdersFromMerchantComponent;
  let fixture: ComponentFixture<ReceivedOrdersFromMerchantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedOrdersFromMerchantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedOrdersFromMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
