import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayersMapComponent } from './layers-map.component';

describe('LayersMapComponent', () => {
  let component: LayersMapComponent;
  let fixture: ComponentFixture<LayersMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayersMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayersMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
