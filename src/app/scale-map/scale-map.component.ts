import { Component, OnInit } from '@angular/core';
const Mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

@Component({
  selector: 'app-scale-map',
  templateUrl: './scale-map.component.html',
  styleUrls: ['./scale-map.component.sass']
})
export class ScaleMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (Mapboxgl as any).accessToken  = 'pk.eyJ1Ijoic2FnZXdhbGwiLCJhIjoiMjRhNDExZWMwY2M1NzFlOTYxZWJjNjRiZTBhZGQ2NDEifQ.85AyZco3_blL_yZ0dv3Bog';
    const map = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/sagewall/ciwf7ja64001o2psg2v73nsya',
      center: [-105.25, 39.75],
      zoom: 10
    });

    map.addControl(new Mapboxgl.ScaleControl({
      unit: 'imperial'
    }));
  }

}
