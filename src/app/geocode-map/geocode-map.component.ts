import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js';
import * as Mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-geocode-map',
  templateUrl: './geocode-map.component.html',
  styleUrls: ['./geocode-map.component.sass']
})
export class GeocodeMapComponent implements AfterViewInit {
  @ViewChild('mapCanvas')
  private mapCanvasElementRef: ElementRef;

  private get mapCanvasNativeElement(): HTMLElement {
    return this.mapCanvasElementRef.nativeElement;
  }

  private map: Mapboxgl.Map;
  private style: string;
  private longitude: number;
  private latitude: number;
  private zoom: number;
  private geocoder: MapboxGeocoder;
  private geolocate: Mapboxgl.GeolocateControl;

  constructor() {
    Mapboxgl.accessToken = environment.mapbox_public_token;
    this.style = 'mapbox://styles/sagewall/ciwf7ja64001o2psg2v73nsya';
    this.longitude = -105.25;
    this.latitude = 39.75;
    this.zoom = 10;
  }

  ngAfterViewInit() {
    this.map = new Mapboxgl.Map({
      container: this.mapCanvasNativeElement,
      style: this.style,
      center: [this.longitude, this.latitude],
      zoom: this.zoom
    });

    this.geocoder = new MapboxGeocoder({
      accessToken: Mapboxgl.accessToken,
      mapboxgl: Mapboxgl
    });
    this.map.addControl(this.geocoder, 'top-left');

    this.geolocate = new Mapboxgl.GeolocateControl({});
    this.map.addControl(this.geolocate, 'top-right');
  }
}
