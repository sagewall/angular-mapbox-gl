import { Component, OnInit } from '@angular/core';
import { api_tokens } from '../../assets/api_tokens';
import * as Mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js';

@Component({
  selector: 'app-draw-map',
  templateUrl: './draw-map.component.html',
  styleUrls: ['./draw-map.component.sass']
})
export class DrawMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Mapboxgl.accessToken = api_tokens.mapbox_public_token;
    const map = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/sagewall/ciwf7ja64001o2psg2v73nsya',
      center: [-105.25, 39.75],
      zoom: 10
    });

    const Draw = new MapboxDraw();

    map.addControl(Draw);
  }

}
