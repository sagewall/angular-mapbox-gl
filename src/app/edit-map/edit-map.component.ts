import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { api_tokens } from '../../assets/api_tokens';
import * as MapboxClient from 'mapbox/dist/mapbox-sdk.js';
import * as Mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js';

@Component({
  selector: 'app-edit-map',
  templateUrl: './edit-map.component.html',
  styleUrls: ['./edit-map.component.sass']
})
export class EditMapComponent implements AfterViewInit {
  @ViewChild('mapCanvas')
  private mapCanvasElementRef: ElementRef;

  private get mapCanvasNativeElement(): HTMLElement {
    return this.mapCanvasElementRef.nativeElement;
  }

  private map: Mapboxgl.Map;
  private style: string;
  private longitude: number;
  private latitude: number;
  private zoom: number;
  private datasetId: string;
  private client: MapboxClient;
  private draw: MapboxDraw;

  constructor() {
    Mapboxgl.accessToken = api_tokens.mapbox_public_token;
    this.style = 'mapbox://styles/sagewall/ciwf7ja64001o2psg2v73nsya';
    this.longitude = -105.25;
    this.latitude = 39.75;
    this.zoom = 10;
    this.datasetId = 'cizym3hr9037a31qlrnpygtoy';
    this.client = new MapboxClient(api_tokens.mapbox_private_token);
    this.draw = new MapboxDraw();
  }

  ngAfterViewInit() {
    this.map = new Mapboxgl.Map({
      container: this.mapCanvasNativeElement,
      style: this.style,
      center: [this.longitude, this.latitude],
      zoom: this.zoom
    });

    this.map.on('load', () => {
      this.map.addControl(this.draw);
      this.client.listFeatures(this.datasetId, {}, (err, collection) => {
        if (err) {
          console.log(err);
        } else {
          this.draw.add(collection);
        }
      });
    });

    this.map.on('draw.create', (e) => {
      if (e.hasOwnProperty('features')) {
        for (const eventFeature of e.features) {
          this.client.insertFeature(eventFeature, this.datasetId, (err, feature) => {
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

    this.map.on('draw.delete', (e) => {
      if (e.hasOwnProperty('features')) {
        for (const eventFeature of e.features) {
          this.client.deleteFeature(eventFeature.id, this.datasetId, (err, feature) => {
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
