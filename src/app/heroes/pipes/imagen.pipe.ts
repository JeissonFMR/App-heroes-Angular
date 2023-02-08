import { Pipe, PipeTransform } from '@angular/core';
import { HeroeInterface } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(item: HeroeInterface): string {

    if (!item.id && item.alt_img) {
      return '../../../assets/no-image.png'
    } else if (item.alt_img) {
      return item.alt_img
    } else {
      return `../../../assets/heroes/${item.id}.jpg`;
    }

  }

}
