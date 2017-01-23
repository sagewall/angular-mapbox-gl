import { Component, OnInit } from '@angular/core';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

@Component({
  selector: 'app-basic-map',
  templateUrl: './basic-map.component.html',
  styleUrls: ['./basic-map.component.sass']
})
export class BasicMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (mapboxgl as any).accessToken  = 'pk.eyJ1Ijoic2FnZXdhbGwiLCJhIjoiMjRhNDExZWMwY2M1NzFlOTYxZWJjNjRiZTBhZGQ2NDEifQ.85AyZco3_blL_yZ0dv3Bog';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/sagewall/ciwf7ja64001o2psg2v73nsya',
      center: [-105.25, 39.75],
      zoom: 10
    });
  }
}
