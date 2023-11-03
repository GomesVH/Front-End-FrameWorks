import { Component } from '@angular/core';

@Component({
  selector: 'app-e-binding',
  templateUrl: './e-binding.component.html',
  styleUrls: ['./e-binding.component.css']
})
export class EBindingComponent {
  // definir o titulo do componente
  tituloComp: string = 'Implementação Event Binding'

  // definir um método que será chamado à sua execução quando um evento - a partir da view - for disparado
  exibirAlerta(): void{
    // uso da função auxiliar log()
    console.log('Evento disparado....')

    // a info abaixo aparecerá numa janela de alerta na view
    alert('Um evento - através da view - foi disparado. Por isso este texto está sendo exibido.')
  }

}
