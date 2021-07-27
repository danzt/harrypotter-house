import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edades'
})
export class EdadesPipe implements PipeTransform {

  transform(nacimiento: number): any {
    let retorno: any;
    if(nacimiento){
      let anio: number = new Date().getFullYear();
      retorno = (anio - nacimiento) + ' Años';
    }else{
      retorno = 'desconocido';
    }
    
    return retorno;
  }

}
