import { Component, OnInit } from '@angular/core';
import { api_tokens } from '../../assets/api_tokens';
import * as Mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

@Component({
  selector: 'app-basic-map',
  templateUrl: './basic-map.component.html',
  styleUrls: ['./basic-map.component.sass']
})
export class BasicMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (Mapboxgl as any).accessToken  = api_tokens.mapbox_public_token;
    const map = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/sagewall/ciwf7ja64001o2psg2v73nsya',
      center: [-105.25, 39.75],
      zoom: 10
    });
  }
}
