import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { HeroeService } from '../../services/heroe.service';
import { HeroeInterface } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe!: HeroeInterface

  constructor(private activateRoute: ActivatedRoute, private heroesService: HeroeService, private router: Router) {

  }

  ngOnInit(): void {
    this.activateRoute.params
      .subscribe(({ id }) => {
        console.log(id);

        this.heroesService.getHeroePorId(id)
          .subscribe((res) => {
            // console.log(res);
            this.heroe = res
          })
      })
  }

  regresar() {
    this.router.navigate(['/heroes/listado']);
  }
}
