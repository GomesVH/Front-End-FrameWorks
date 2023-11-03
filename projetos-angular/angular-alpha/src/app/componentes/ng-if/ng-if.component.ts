import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {
  // definir o titulo do componente
  tituloComp: string = 'Implementação Diretiva *ngIf'

  // definir a prop que será avaliada pela diretiva estrutural *ngIf
  // esta prop será booleana e não terá valor incial nenhum atribuido à ela. Quando existe a ausencia de um valor inicial atribuido a uma prop boolean o TS/Angular "entendem" que esta prop possui um valor implicito FALSE.

  exiba!: boolean// "obrigamos" o framework (usando TS) a criar a prop exiba
}
