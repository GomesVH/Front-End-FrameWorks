import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-styles',
  templateUrl: './ng-styles.component.html',
  styleUrls: ['./ng-styles.component.css']
})
export class NgStylesComponent {
  // definir o titulo do comp
  tituloComp: string = 'Implementação ng-styles'

  //criar algumas props para, posteriormente, vincularmos na view
  cores: string = '#38OF6C'
  tamanho: number = 20


  // praticar a instancia da classe EstiloCss()
  objStyle: EstiloCss = new EstiloCss()
}

// definir uma classe externa para o uso de algumas props com valores para estilos
class EstiloCss{
  // definir algumas props de estilo
  'color': string = '#094468'          //'#B9E5O7'
  'font-size.%': number = 600
  'font-weight': string = 'bold'
}
