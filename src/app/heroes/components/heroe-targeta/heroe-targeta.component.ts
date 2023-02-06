import { Component, Input } from '@angular/core';
import { HeroeInterface } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-heroe-targeta',
  templateUrl: './heroe-targeta.component.html',
  styleUrls: ['./heroe-targeta.component.css']
})
export class HeroeTargetaComponent {
  @Input() item!: HeroeInterface
}
