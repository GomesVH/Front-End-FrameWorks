import { Component, OnInit } from '@angular/core';
// importar recursos importantes para a camada lógica exercer controle do form na view
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
// definir o titulo do comp
tituloComp: string = 'Implementação Model Driven Form - controle do form exercido pela camada lógica (.ts)'

  //criar as props que auxiliarão no controle do form
  dadosForm: any
  propNome: any
  propEmail: any 

  // o elemento que priorizará todo e qualquer indicação de recurso implementado a partir dele: Angular Hook ngOnInit
  ngOnInit(): void{
    // inicializando o controle do "agrupamento" das estruturas de view onde for aplicado - a prop dadosForm controla o formulario
    this.dadosForm = new FormGroup({
      // a instancia de FormControl controla cada "pedaço" da view onde for aplicada
      nome: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      senha: new FormControl('', this.validacaoSenha)
    })
  }

  // criar um método/função para, minimamente, validar o input/campo senha
  validacaoSenha(valoresSenha:any): any{
    // verificar a qtde de caracteres inseridos no input senha
    if(valoresSenha.value.length < 5){
      return {senha: true}
    }
    return null
  }

  // criar uma função/metodo pra exibir dados
  exibidoraDados(umDado: any): void{
    console.log(umDado)
    this.propNome = umDado.nome
    this.propEmail = umDado.email
    
  }  
  
}



/*
// definir o titulo do comp
  tituloComp: string = 'Implementação Template Driven Form - controle do form exercido pela view'

  //criar um método/função para receber os dados obtidos através do controle do form - exercido pela view
  recebedorDados(dadosRecebidos: any): void{
    let exibicao: string  = 'O nome informado foi: ' + dadosRecebidos.nome + '\n'
    exibicao += ' e o email inserido é este: ' + dadosRecebidos.email

    // exibir o valor da variavel exibicao
    alert(exibicao)
  }
*/
