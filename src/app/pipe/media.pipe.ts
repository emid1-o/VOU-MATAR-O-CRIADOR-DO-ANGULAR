import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'media'
})
export class MediaPipe implements PipeTransform {

  transform(objeto: any): number {
    return (objeto.nota1 + objeto.nota2) / 2;
  }

}
