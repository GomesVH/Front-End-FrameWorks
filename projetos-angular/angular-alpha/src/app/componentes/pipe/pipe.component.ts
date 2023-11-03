import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  // definir o titulo do comp
  tituloComp: string = 'Implementação Pipes Angular'

  // definir três props que, posteiormente serão vinculadas na view
  raizUm: number = 49
  raizDois: number = 81
  raizTres: number = 144
}







/*
// criar as props que serão vinculadas na view e, posteriormente, manipuladas com os pipes
  umTexto: string = 'TEXTO EM MAIUSCULO - PODE SER ALTERADO PARA MINUSCULO'
  numFloat: number = 978.56
  umaData: Date = new Date()
  conjuntoNumerico: number = 5456897485.12345678985
  conjuntoInfos: any = {
    nome: 'Zé Pequeno',
    endereco: {
      rua: 'Rua da Casinha',
      numero: '1'
    }
  }
  //                           0      1      2      3
  mesesAno: Array<string> = ['Jan', 'Fev', 'Mar', 'Abr',
//  4      5      6      7      8 intervalo semi-aberto
// [0.....7[ (8-1)
  'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  numPercent: number = 0.42
*/
