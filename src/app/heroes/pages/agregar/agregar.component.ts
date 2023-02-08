import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmarEliminacionComponent } from '../../components/confirmar-eliminacion/confirmar-eliminacion.component';
import { HeroeInterface, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marver Comics',
      desc: 'Marvel - Comics'
    }
  ]


  constructor(private heroeService: HeroeService, private activateRouter: ActivatedRoute, private router: Router, private snackbar: MatSnackBar, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    //TODO: EDITAR (CARGAR LA INFORMACIÓN)
    if (!this.router.url.includes('editar')) {
      return;
    }
    this.activateRouter.params
      .subscribe(({ id }) => {
        console.log(id);

        this.heroeService.getHeroePorId(id)
          .subscribe((res) => {
            this.heroe = res
          })
      })
  }

  heroe: HeroeInterface = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }
  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    //TODO: SI heroe.id es undefined es agregar sino es editar
    if (this.heroe.id) {
      //ACTUALIZAR
      this.heroeService.actualizarHeroe(this.heroe)
        .subscribe((res) => {
          this.mostrarNotificacion('Registro actualizado')
          console.log('Actualizando...', res);
        })
    } else {
      //AGREGAR
      this.heroeService.agregarHeroe(this.heroe)
        .subscribe((res) => {
          this.router.navigate(['/heroes/editar', res.id])
          this.mostrarNotificacion('Registro creado')
        })

    }

  }
  borrar() {
    const dialog = this.dialog.open(ConfirmarEliminacionComponent, {
      width: '250px',
      height: '150px',
      data: { ...this.heroe }
    });

    dialog.afterClosed()
      .subscribe((respuesta) => {
        if (respuesta) {
          this.heroeService.borrarHeroe(this.heroe.id!)
            .subscribe((res) => {
              this.router.navigate(['/heroes'])
            })
        }
      })

    // this.heroeService.borrarHeroe(this.heroe.id!)
    //   .subscribe((res) => {
    //     this.router.navigate(['/heroes'])
    //   })
  }


  mostrarNotificacion(msj: string) {
    this.snackbar.open(msj, 'Ok!', {
      duration: 2500
    })
  }
}
