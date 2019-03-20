/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlainComponent } from './plain.component';

describe('PlainComponent', () => {
  let component: PlainComponent;
  let fixture: ComponentFixture<PlainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
