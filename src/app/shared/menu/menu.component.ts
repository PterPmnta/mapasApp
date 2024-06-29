import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  ruta: string;
  nombre: string;
}

@Component({
  standalone: true,
  selector: 'side-menu',
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: default;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    {
      ruta: '/mapas/fullscreen',
      nombre: 'FullScreen',
    },
    {
      ruta: '/mapas/zoom-range',
      nombre: 'Zoom Range',
    },
    {
      ruta: '/mapas/marcadores',
      nombre: 'Marcadores',
    },
    {
      ruta: '/mapas/propiedades',
      nombre: 'Propiedades',
    },
    {
      ruta: '/alone',
      nombre: 'Houses',
    },
  ];
}
