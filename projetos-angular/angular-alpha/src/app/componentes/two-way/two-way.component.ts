import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent {
  // definir a prop titulo do comp
  tituloComp: string = 'Implementação Two Way Binding'

  // estabelecer a prop que será vinculada na view
  umTexto: string = ''
}
