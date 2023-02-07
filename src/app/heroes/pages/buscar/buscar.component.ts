import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HeroeInterface } from '../../interfaces/heroes.interfaces';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  termino: string = ''
  heroes: HeroeInterface[] = []

  heroeSeleccionado!: HeroeInterface
  constructor(private heroeService: HeroeService) { }

  buscando() {
    this.heroeService.getSugerencias(this.termino)
      .subscribe((res) => {
        this.heroes = res
      })
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      return;
    }
    // console.log(event); para ver el evento
    const heroe: HeroeInterface = event.option.value;
    // console.log(heroe);
    this.termino = heroe.superhero

    this.heroeService.getHeroePorId(heroe.id!)
      .subscribe((respuesta) => {
        this.heroeSeleccionado = respuesta
      })
  }
}

