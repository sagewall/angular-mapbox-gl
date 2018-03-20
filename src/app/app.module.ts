import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HomeComponent} from './home/home.component';
import {BasicMapComponent} from './basic-map/basic-map.component';
import {GeocodeMapComponent} from './geocode-map/geocode-map.component';
import {DrawMapComponent} from './draw-map/draw-map.component';
import {EditMapComponent} from './edit-map/edit-map.component';
import {LayersMapComponent} from './layers-map/layers-map.component';
import {ScaleMapComponent} from './scale-map/scale-map.component';

@NgModule({
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
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
