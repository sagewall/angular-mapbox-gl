import { Component, OnInit } from '@angular/core';
import { api_tokens } from '../../assets/api_tokens';
import * as Mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

@Component({
  selector: 'app-layers-map',
  templateUrl: './layers-map.component.html',
  styleUrls: ['./layers-map.component.sass']
})
export class LayersMapComponent implements OnInit {

  private map: any;

  constructor() { }

  ngOnInit() {
    (Mapboxgl as any).accessToken  = api_tokens.mapbox_public_token;
    this.map = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/sagewall/ciwf7ja64001o2psg2v73nsya',
      center: [-105.25, 39.75],
      zoom: 10
    });
  }

  toggleVisibility(layerId: string) {
    if (this.map.getLayoutProperty(layerId, 'visibility') === 'visible') {
      this.map.setLayoutProperty(layerId, 'visibility', 'none');
    } else {
      this.map.setLayoutProperty(layerId, 'visibility', 'visible');
    }
  }
}
