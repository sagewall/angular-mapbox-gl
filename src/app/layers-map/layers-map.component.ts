import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-layers-map',
  templateUrl: './layers-map.component.html',
  styleUrls: ['./layers-map.component.sass']
})
export class LayersMapComponent implements AfterViewInit {
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

  constructor() {
    Mapboxgl.accessToken = environment.mapbox_public_token;
    this.style = 'mapbox://styles/sagewall/ciwf7ja64001o2psg2v73nsya';
    this.longitude = -105.25;
    this.latitude = 39.75;
    this.zoom = 10;
  }

  ngAfterViewInit() {

    this.map = new Mapboxgl.Map({
      container: this.mapCanvasNativeElement,
      style: this.style,
      center: [this.longitude, this.latitude],
      zoom: this.zoom
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
