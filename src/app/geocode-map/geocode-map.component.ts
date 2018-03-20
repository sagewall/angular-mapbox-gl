import {Component, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import {api_tokens} from '../../assets/api_tokens';
import * as Mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js';

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
    Mapboxgl.accessToken = api_tokens.mapbox_public_token;
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
      accessToken: Mapboxgl.accessToken
    });
    this.map.addControl(this.geocoder, 'top-left');

    this.geolocate = new Mapboxgl.GeolocateControl({});
    this.map.addControl(this.geolocate, 'top-right');
  }
}
