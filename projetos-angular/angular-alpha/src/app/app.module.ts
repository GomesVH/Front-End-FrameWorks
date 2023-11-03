// ESTE É O ARQUIVO RESPONSAVEL POR ASSUMIR O PAPEL DE "CENTRALIZADOR" DE RECURSOS QUE ESTÃO DISPONIVEIS PARA O PROJETO
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// IMPORTAR O MODULO DE RECURSO PARA CRIAÇÃO DE FORMULARIOS

import { InterpolationComponent } from './componentes/interpolation/interpolation.component';
import { PBindingComponent } from './componentes/p-binding/p-binding.component';
import { EBindingComponent } from './componentes/e-binding/e-binding.component';
import { TwoWayComponent } from './componentes/two-way/two-way.component';
import { InputComponent } from './componentes/input/input.component';
import { XComponent } from './componentes/x/x.component';
import { OutputComponent } from './componentes/output/output.component';
import { NgIfComponent } from './componentes/ng-if/ng-if.component';
import { NgForComponent } from './componentes/ng-for/ng-for.component';
import { NgClassComponent } from './componentes/ng-class/ng-class.component';
import { NgStylesComponent } from './componentes/ng-styles/ng-styles.component';
import { DirCustomComponent } from './componentes/dir-custom/dir-custom.component';
import { AlterarTextoDirective } from './alterar-texto.directive';
import { PipeComponent } from './componentes/pipe/pipe.component';

//IMPORTAR RECURSOS NECESSÁRIOS PARA O CURRENCY REGIONAL BRL
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { RaizQuadradaPipe } from './raiz-quadrada.pipe';
import { FormulariosComponent } from './componentes/formularios/formularios.component';

// referenciar a localidade
registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    // É ARRAY RESPONSAVEL POR "DAR VIDA" - REGISTRAR A EXISTENCIA DE UM COMPONENTE DO PROJETO
    AppComponent,
    InterpolationComponent,
    PBindingComponent,
    EBindingComponent,
    TwoWayComponent,
    InputComponent,
    XComponent,
    OutputComponent,
    NgIfComponent,
    NgForComponent,
    NgClassComponent,
    NgStylesComponent,
    DirCustomComponent,
    AlterarTextoDirective,
    PipeComponent,
    RaizQuadradaPipe,
    FormulariosComponent
  ],
  imports: [
    // É O ARRAY RESPONSAVEL POR REGISTRAR E DISPONIBILIZAR TODOS OS RECURSOS DE MODULOS/BIBLIOTECAS - DO ANGULAR -  E DISPONIBILIZAR PARA O PROJETO
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // É O ARRAY RESPONSAVEL POR REGISTRAR TODO E QUALQUER SERVICE PARA SER PROVEDOR DE CONTEUDO E FUNCIONALIDADES PARA OS COMPONENTES DO PROJETO
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }

  ],
  bootstrap: [
    // É O ARRAY RESPONSAVEL POR REGISTRAR QUAIS ARQUIVOS SERÃO INICIALIZADOS QUANDO A APLICAÇÃO ANGULAR FOR EXECUTADA
    AppComponent // AppComponent - é o componente principal do projeto
  ]
})
export class AppModule { }
