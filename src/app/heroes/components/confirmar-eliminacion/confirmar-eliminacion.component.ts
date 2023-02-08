import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeroeInterface } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-confirmar-eliminacion',
  templateUrl: './confirmar-eliminacion.component.html',
  styleUrls: ['./confirmar-eliminacion.component.css']
})
export class ConfirmarEliminacionComponent {


  constructor(private dialogRef: MatDialogRef<ConfirmarEliminacionComponent>, @Inject(MAT_DIALOG_DATA) public data: HeroeInterface) { }
  cerrar() {
    this.dialogRef.close()
  }
  borrar() {
    this.dialogRef.close(true)
  }

}
