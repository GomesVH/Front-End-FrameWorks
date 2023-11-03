import { Directive, ElementRef } from '@angular/core';
// este decorator é que determina que este arquivo seja uma  diretiva
@Directive({
  selector: '[appAlterarTexto]'
})
export class AlterarTextoDirective {
  // praticar a referencia de instancia da classe ElementRef()
  // para criar um objeto referencial é necessário a definir um parametro no constructor
  constructor(elementoHTML: ElementRef) {
    // fazer da função auxiliar log() - para observar o comportamento da diretiva
    console.log(elementoHTML)

    // agora, é preciso fazer uso do objeto referencial para definir a maniuplação que ocorrerá na view
    elementoHTML.nativeElement.innerText = 'Texto inserido - na view - a partir de uma diretiva customizada/componente!'
   }

}
