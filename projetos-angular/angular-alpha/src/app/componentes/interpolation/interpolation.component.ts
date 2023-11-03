import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation', // este é o nome do componente
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  // definir uma prop/atributo/variavel/field para assumir o valor do titulo do componente
  tituloComp: string = 'Implementação Interpolation binding'

  // definir, abaixo, um conjunto de props para serm vinculadas na view
  x: number = 95
  nomes: Array<string> = ['Fulano', 'Beltrano', 'Tralala']
  dataHoje: Date = new Date()
  valorBooleano: boolean = false 

  // definir um método/função
  exibirTexto(): string{
    // associando a expressão de retorno
    return 'Texto retornado a partir da chamada do método/função!'
  }
}

// NESTE MOMENTO, A CAMADA DO COMP ASSUME, AO MESMO TEMPO, DOIS PAPEIS: SER A FONTE DE DADOS DO COMPONENTE E, TAMBÉM, AUXILIAR NO CONTROLE - INDICADO A FORMA DE VINCULAÇÃO DOS DADOS NA VIEW
