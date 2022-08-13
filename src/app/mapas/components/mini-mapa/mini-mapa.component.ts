import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styles: [
    `
      div {
        width: 100%;
        height: 150px;
        margin: 0 auto;
      }
    `,
  ],
})
export class MiniMapaComponent implements AfterViewInit {
  @Input() lngLat: [number, number] = [0, 0];
  @ViewChild('mapa') divmapa!: ElementRef;

  zoomLevel: number = 13;

  constructor() {}
  ngAfterViewInit(): void {
    const mapa = new mapboxgl.Map({
      container: this.divmapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.lngLat,
      zoom: this.zoomLevel,
      interactive: false,
    });
    new mapboxgl.Marker().setLngLat(this.lngLat).addTo(mapa);
  }
}
