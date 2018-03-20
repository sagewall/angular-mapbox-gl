import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {RouterTestingModule} from '@angular/router/testing';
import {HomeComponent} from './home/home.component';
import {BasicMapComponent} from './basic-map/basic-map.component';
import {GeocodeMapComponent} from './geocode-map/geocode-map.component';
import {DrawMapComponent} from './draw-map/draw-map.component';
import {EditMapComponent} from './edit-map/edit-map.component';
import {LayersMapComponent} from './layers-map/layers-map.component';
import {ScaleMapComponent} from './scale-map/scale-map.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        BasicMapComponent,
        GeocodeMapComponent,
        DrawMapComponent,
        EditMapComponent,
        LayersMapComponent,
        ScaleMapComponent
      ],
      imports: [
        AppRoutingModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
