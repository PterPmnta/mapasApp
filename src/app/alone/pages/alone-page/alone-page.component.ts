import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  /* selector: 'app-alone-page', */
  standalone: true,
  /* imports: [
    CommonModule,
  ], */
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.css'],
  /* changeDetection: ChangeDetectionStrategy.OnPush, */
})
export class AlonePageComponent { }
