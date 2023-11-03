import { Component } from '@angular/core';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css']
})
export class XComponent {
  // criar um método/função para lidar/manipular com dados  "interceptados" pelo comp-pai
  recebedorDados(aquiEstaoDados: any): void{
    // dados recebidos. Agora, serão manipulados pelo método/função através de uma let
    let manipuladora: string = 'Obrigado por se cadastrar ' + aquiEstaoDados.nome + '.' + '\n'
    // acessar a variavel manipuladora e atribuir à  um valor complementar de informação
    manipuladora = manipuladora + ' O email ' + aquiEstaoDados.email + ' foi cadastrado com sucesso!'

    // exibir o valor da let na tela
    alert(manipuladora)
  }
}








/*
  // definir as props que serão enviadas ao comp-filho (Input) e transporta-las devidamente
  conjDados1: string = 'Este texto está descrito no XComp e será vinculado à uma prop no InputComp.'

  conjDados2: string = 'Já este, tbm está no Xcomp e será vinculado a outra prop em InputComp'
*/