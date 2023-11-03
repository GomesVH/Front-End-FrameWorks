// ESTE SERÁ O COMPONENTE-FILHO DA RELAÇÃO QUE SERÁ ESTABELECIDA ENTRE ESTE COMP E O COMP X
// É AQUI QUE SERÁ DEFINIDO O USO DO DECORATOR @INPUT()
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  // definir o titulo do comp
  tituloComp: string = 'Implementação @Input property'

  // definir, abaixo, as props que receberão valores a partir do comp-pai
  @Input() mensagem: string = ''
  @Input() outraMensagem: string = ''

  // definir um método/função para ser vinculado - com seu conteudo - na view do comp
  exibirMensagemAlerta(): void{
    alert(this.outraMensagem)
  }
}
