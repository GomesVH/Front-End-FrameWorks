import { Pipe, PipeTransform } from '@angular/core';

// aqui, o pipe foi definido em função do uso do decorator @Pipe
@Pipe({
  // este é o nome - elemento identificador - do pipe
  name: 'raizQuadrada'
})

// está sendo praticado, abaixo, o mecanismo de herança entre a classe RaizQuadradaPipe e a interface PipeTransform
export class RaizQuadradaPipe implements PipeTransform {
  // este método receberá um parametro e retornará um determinado valor quando for chamado à execução
  transform(numero: number): number {
    return Math.sqrt(numero)
  }

}
