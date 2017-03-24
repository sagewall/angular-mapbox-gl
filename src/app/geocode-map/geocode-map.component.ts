import { Component, OnInit } from '@angular/core';
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
    Mapboxgl.accessToken = 'pk.eyJ1Ijoic2FnZXdhbGwiLCJhIjoiMjRhNDExZWMwY2M1NzFlOTYxZWJjNjRiZTBhZGQ2NDEifQ.85AyZco3_blL_yZ0dv3Bog';
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
