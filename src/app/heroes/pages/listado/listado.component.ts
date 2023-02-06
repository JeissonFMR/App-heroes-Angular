import { Component } from '@angular/core';
import { HeroesModule } from '../../heroes.module';
import { HeroeService } from '../../services/heroe.service';
import { HeroeInterface } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {


  heroes: HeroeInterface[] = [];

  constructor(private heroeService: HeroeService) {

  }

  ngOnInit(): void {
    this.heroeService.getHeroes()
      .subscribe((res) => {
        this.heroes = res
      })
  }
}
