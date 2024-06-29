import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface ColorMarcador {
  color: string;
  marcador?: mapboxgl.Marker;
  centro?: [number, number];
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
      .mapa-container {
        width: 100%;
        height: 100%;
      }

      .list-group {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 99;
      }

      li {
        cursor: pointer;
      }
    `,
  ],
})
export class MarcadoresComponent implements AfterViewInit {
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 13;
  geodata: [number, number] = [-72.25323448337556, 11.373452774112943];

  marcadores: ColorMarcador[] = [];

  constructor() {}
  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.geodata,
      zoom: this.zoomLevel,
    });

    this.readMarkers();
  }

  addMarket() {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color,
    })
      .setLngLat(this.geodata)
      .addTo(this.mapa);

    this.marcadores.push({ color, marcador: nuevoMarcador });
    this.saveMarkers();

    nuevoMarcador.on('dragend', () => {
      this.saveMarkers();
    });
  }

  moveToMarket(marcador: mapboxgl.Marker) {
    this.mapa.flyTo({
      center: marcador.getLngLat(),
    });
  }

  saveMarkers() {
    const lngLatArr: ColorMarcador[] = [];
    this.marcadores.forEach((m) => {
      const color = m.color;
      const { lng, lat } = m.marcador!.getLngLat();

      lngLatArr.push({ color: color, centro: [lng, lat] });
    });
    localStorage.setItem('marcadores', JSON.stringify(lngLatArr));
  }

  readMarkers() {
    if (!localStorage.getItem('marcadores')) {
      return;
    }
    const lngLatArr: ColorMarcador[] = JSON.parse(
      localStorage.getItem('marcadores')!
    );

    lngLatArr.forEach((m) => {
      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true,
      })
        .setLngLat(m.centro!)
        .addTo(this.mapa);

      this.marcadores.push({
        marcador: newMarker,
        color: m.color,
      });

      newMarker.on('dragend', () => {
        this.saveMarkers();
      });
    });
  }

  deleteMarker(indice: number) {
    this.marcadores[indice].marcador?.remove();
    this.marcadores.splice(indice, 1);
    this.saveMarkers();
  }
}
