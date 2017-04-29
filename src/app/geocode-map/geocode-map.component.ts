import { Component, OnInit } from '@angular/core';
import { api_tokens } from '../../assets/api_tokens';
import * as Mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js';

@Component({
  selector: 'app-geocode-map',
  templateUrl: './geocode-map.component.html',
  styleUrls: ['./geocode-map.component.sass']
})
export class GeocodeMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Mapboxgl.accessToken = api_tokens.mapbox_public_token;
    const map = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/sagewall/ciwf7ja64001o2psg2v73nsya',
      center: [-105.25, 39.75],
      zoom: 10
    });

    const geocoder = new MapboxGeocoder({
      accessToken: Mapboxgl.accessToken
    });
    map.addControl(geocoder, 'top-left');

    const geolocate = new Mapboxgl.GeolocateControl({});
    map.addControl(geolocate, 'top-right');
  }
}
