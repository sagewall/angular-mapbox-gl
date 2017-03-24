import {Component, OnInit} from '@angular/core';
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
    const client = new MapboxClient('sk.eyJ1Ijoic2FnZXdhbGwiLCJhIjoiY2l6eWxjN2R3MDMxYjJxbmgwOWNyNmJsaiJ9.gARjF95J8MPHt8VoCKnwWQ');
    Mapboxgl.accessToken = 'pk.eyJ1Ijoic2FnZXdhbGwiLCJhIjoiMjRhNDExZWMwY2M1NzFlOTYxZWJjNjRiZTBhZGQ2NDEifQ.85AyZco3_blL_yZ0dv3Bog';

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
