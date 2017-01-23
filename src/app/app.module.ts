import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { BasicMapComponent } from './basic-map/basic-map.component';
import { GeocodeMapComponent } from './geocode-map/geocode-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicMapComponent,
    GeocodeMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
