import { Component, OnInit } from '@angular/core';
import { api_tokens } from '../../assets/api_tokens';
import * as Mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

@Component({
  selector: 'app-scale-map',
  templateUrl: './scale-map.component.html',
  styleUrls: ['./scale-map.component.sass']
})
export class ScaleMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Mapboxgl.accessToken  = api_tokens.mapbox_public_token;
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
