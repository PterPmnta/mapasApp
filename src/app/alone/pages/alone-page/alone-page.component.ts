import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';

@Component({
  /* selector: 'app-alone-page', */
  standalone: true,
  imports: [
    CommonModule,
    CounterAloneComponent
  ],
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlonePageComponent { }
