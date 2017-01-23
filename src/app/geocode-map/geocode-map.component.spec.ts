/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GeocodeMapComponent } from './geocode-map.component';

describe('GeocodeMapComponent', () => {
  let component: GeocodeMapComponent;
  let fixture: ComponentFixture<GeocodeMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeocodeMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeocodeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
