import { Component, OnInit } from '@angular/core';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
const MapboxDraw = require('@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js');

@Component({
  selector: 'app-edit-map',
  templateUrl: './edit-map.component.html',
  styleUrls: ['./edit-map.component.sass']
})
export class EditMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FnZXdhbGwiLCJhIjoiMjRhNDExZWMwY2M1NzFlOTYxZWJjNjRiZTBhZGQ2NDEifQ.85AyZco3_blL_yZ0dv3Bog';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/sagewall/ciwf7ja64001o2psg2v73nsya',
      center: [-105.25, 39.75],
      zoom: 10
    });

    const Draw = new MapboxDraw();

    map.addControl(Draw);
  }

}
