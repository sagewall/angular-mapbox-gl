/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DrawMapComponent } from './draw-map.component';

describe('DrawMapComponent', () => {
  let component: DrawMapComponent;
  let fixture: ComponentFixture<DrawMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
