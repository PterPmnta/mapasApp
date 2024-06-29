import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from './mapas-routing.module';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { CounterAloneComponent } from '../alone/components/counter-alone/counter-alone.component';
import { MenuComponent } from '../shared/menu/menu.component';


@NgModule({
  declarations: [
    MiniMapaComponent,
    FullScreenComponent,
    MarcadoresComponent,
    ZoomRangeComponent,
    PropiedadesComponent,
  ],
  imports: [
    CommonModule,
    MapasRoutingModule,
    CounterAloneComponent, 
    MenuComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapasModule { }
