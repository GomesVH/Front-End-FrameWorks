import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  // definir o titulo do Comp
  tituloComp: string = 'Implementação ngClass'

  // criar uma variavel/atributo/field... que será vinculada na view
  estiloAlterVar: string = 'cores tamanho'

  // criar uma nova prop para ser um instancia(objeto) de uma classe ts que referencia estilos
  objCSS: PropriedadesCSS = new PropriedadesCSS()
}

// criar um nova classe - externa à classe principal
class PropriedadesCSS{
  cores: boolean = true
  tamanho: boolean = true
}
