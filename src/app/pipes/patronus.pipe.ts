import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patronus'
})
export class PatronusPipe implements PipeTransform {

  transform(patronus: string): string {
    let retorno: string;
    if (patronus) {
      retorno = patronus;
    } else {
      retorno = 'ninguno';
    }
    return retorno;
  }

}
