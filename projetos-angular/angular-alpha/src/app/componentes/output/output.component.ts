import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  // definir o titulo do comp
  tituloComp: string = 'Implementação @Output Property'

  /*
    agora, é necessário definir um "transmissor/anunciador" de evento: o a ser transmitido/anunciado é enviar um conjunto de dados do comp-filho para o comp-pai
  */
  @Output() transmissorDados = new EventEmitter<any>()

  // definir o conjunto de dados à ser transmitido
  conjuntoDados: any = {
    // key-value
    // nome: valor obtido do input
    // email: valor obtido mdo input
  }

  // método/função para fazer uso do objeto transmissorDados e, dessa forma, enviar os dados para o comp-pai
  enviarDadosPapai(): void{
    this.transmissorDados.emit(this.conjuntoDados)
  }
}
