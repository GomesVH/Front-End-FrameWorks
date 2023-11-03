import { Component, ViewChild, OnInit} from '@angular/core';

//importar o model
import { ElemPeriodicos } from '../model/elemperiodicos';

// importar o recurso que nos auxiliará no uso da fonte de dados para popular a tabela na view
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-material';

  // definir o titulo do componente
  tituloComp: string = 'Implementação Material Table '

  // 1ª etapa: definir uma prop para assumir o papel de colunas da tabela na view
  colunas: string[] = ['Posicao', 'Nome', 'Peso', 'Simbolo']

  // 2ª etapa: definir uma prop que receberá como valor a fonte de dados e, dessa forma, auxiliará em sua manipulação
  fonteDados = new MatTableDataSource<ElemPeriodicos>(DadosTabelaPeriodica)

  // 3ª etapa: criar o "espaço" necessário para que a fonte de dados possa, devidamente, ser exibida na estrutura de tabela. Então, será definida, agora, a ViewChild
   @ViewChild(MatPaginator, {static: true}) 'paginator' : MatPaginator

   // 4ª etapa: consiste em definir o Angular Hook ngOnInit: porque este hook "prioriza" a disponibilidade de qualquer recurso, nele, indicado, assim que o componente for "contruido"
   ngOnInit(){
    this.fonteDados.paginator = this.paginator
   }
}



// definir a fonte de dados para "popular" a tabela na view

const DadosTabelaPeriodica: ElemPeriodicos[] = [
  {posicao: 1, nome: 'Hidrogênio', peso: 1.009, simbolo: 'H'},
  {posicao: 2, nome: 'Hélio', peso: 4.0026, simbolo: 'He'},
  {posicao: 3, nome: 'Lítio', peso: 6.941, simbolo: 'Li'},
  {posicao: 4, nome: 'Berílio', peso: 9.0122, simbolo: 'Be'},
  {posicao: 5, nome: 'Boro', peso: 10.811, simbolo: 'B'},
  {posicao: 6, nome: 'Carbono', peso: 12.0107, simbolo: 'C'},
  {posicao: 7, nome: 'Nitrogênio', peso: 14.0067, simbolo: 'N'},
  {posicao: 8, nome: 'Oxigênio', peso: 15.9994, simbolo: 'O'},
  {posicao: 9, nome: 'Fluor', peso: 18.9984, simbolo: 'F'},
  {posicao: 10, nome: 'Neônio', peso: 20.1797, simbolo: 'Ne'}
]
