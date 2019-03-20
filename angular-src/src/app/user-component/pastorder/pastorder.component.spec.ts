/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PastorderComponent } from './pastorder.component';

describe('PastorderComponent', () => {
  let component: PastorderComponent;
  let fixture: ComponentFixture<PastorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
