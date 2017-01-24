import { Component, OnInit } from '@angular/core';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
const MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js');

@Component({
  selector: 'app-geocode-map',
  templateUrl: './geocode-map.component.html',
  styleUrls: ['./geocode-map.component.sass']
})
export class GeocodeMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FnZXdhbGwiLCJhIjoiMjRhNDExZWMwY2M1NzFlOTYxZWJjNjRiZTBhZGQ2NDEifQ.85AyZco3_blL_yZ0dv3Bog';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/sagewall/ciwf7ja64001o2psg2v73nsya',
      center: [-105.25, 39.75],
      zoom: 10
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken
    });
    map.addControl(geocoder, 'top-left');

    const geolocate = new mapboxgl.GeolocateControl({});
    map.addControl(geolocate, 'top-right');
  }
}
