import { Component } from '@angular/core';

@Component({
  selector: 'app-dir-custom',
  templateUrl: './dir-custom.component.html',
  styleUrls: ['./dir-custom.component.css']
})
export class DirCustomComponent {
  // definir o titulo do comp
  tituloComp: string = 'Implementação @Directive de Componente/Custom'

}
