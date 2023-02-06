import { Pipe, PipeTransform } from '@angular/core';
import { HeroeInterface } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(item: HeroeInterface): string {
    return `../../../assets/heroes/${item.id}.jpg`;
  }

}
