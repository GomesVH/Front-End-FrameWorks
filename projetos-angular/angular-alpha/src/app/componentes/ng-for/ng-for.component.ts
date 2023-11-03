import { Component } from '@angular/core';
// importar o model - que será usado para definir a prop que receberá como valor um conjuto de dados
import { Filme } from '../../model/filme';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  // definir o titulo do comp
  tituloComp: string = 'Alguns filmes sensacionais - estrelando *ngFor!'

  // criar o conjunto de dados referentes as informações dos filmes que serão listados e exibidos na tela
  // Para isso será utilizada a técnica do tipo construido == um estrutura determinada - de codigo/recurso - pelo desenvolvedor
  filmes: Filme[] = [
    // gerar alguns objetos a partir do model - porque ele, model, é composto pelas props e pelo formato que queremos usar para criar o dataset
    new Filme('O poderoso Chefão', 'Francis Ford Copolla', 'Marlon Brando e outros', 1972),
    new Filme('Um Estranho no Ninho', 'Milos Forman', 'Jack Nicholson e outros', 1976),
    new Filme('A lista de Schindler', 'Steven Spielberg', 'Liam Neeson e outros', 1993 ),
    new Filme('Forest Gump - O contador de Historias','Robert Zemickis', 'Tom Hanks e outros', 1994),
    new Filme('Laranja Mecanica', 'Stanley Kubrik', 'Malcolm Mcdowel e outros', 1971)
  ]

}
