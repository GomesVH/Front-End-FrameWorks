import { Component } from '@angular/core';

@Component({
  selector: 'app-p-binding',
  templateUrl: './p-binding.component.html',
  styleUrls: ['./p-binding.component.css']
})
export class PBindingComponent {
  //definir o titulo do componente
  tituloComp: string = 'Implementação Property Binding'

  // definir a prop que será vinculada na view
  umTexto: string = 'Texto exibido!'

}
