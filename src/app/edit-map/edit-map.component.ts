import {Component, OnInit} from '@angular/core';
import { api_tokens } from '../../assets/api_tokens';
import * as MapboxClient from 'mapbox/dist/mapbox-sdk.js';
import * as Mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js';

@Component({
  selector: 'app-edit-map',
  templateUrl: './edit-map.component.html',
  styleUrls: ['./edit-map.component.sass']
})
export class EditMapComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const datasetId = 'cizym3hr9037a31qlrnpygtoy';
    const client = new MapboxClient(api_tokens.mapbox_private_token);
    Mapboxgl.accessToken = api_tokens.mapbox_public_token;

    const map = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/sagewall/ciwf7ja64001o2psg2v73nsya',
      center: [-105.25, 39.75],
      zoom: 10
    });

    const draw = new MapboxDraw();

    map.on('load', () => {
      map.addControl(draw);
      client.listFeatures(datasetId, {}, (err, collection) => {
        if (err) {
          console.log(err);
        } else {
          draw.add(collection);
        }
      });
    });

    map.on('draw.create', (e) => {
      if (e.hasOwnProperty('features')) {
        for (const eventFeature of e.features) {
          client.insertFeature(eventFeature, datasetId, (err, feature) => {
            if (err) {
              console.log(err);
            } else {
              console.log('inserting feature:');
              console.log(feature);
            }
          });
        }
      }
    });

    map.on('draw.delete', (e) => {
      if (e.hasOwnProperty('features')) {
        for (const eventFeature of e.features) {
          client.deleteFeature(eventFeature.id, datasetId, (err, feature) => {
            if (err) {
              console.log(err);
            } else {
              console.log('deleting feature');
              console.log(eventFeature);
            }
          });
        }
      }
    });
  }
}
