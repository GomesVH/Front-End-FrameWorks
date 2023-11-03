// ESTE ARQUIVO DE MÓDULO TAMBÉM É UM CENTRALIZADOR DE RECURSOS - MAS, SOMENTE RECURSOS ESPECIFICOS - RECURSOS DE ROTAS DE NAVEGAÇÃO ENTRE COMPONENTES
// POR ISSO, ESTE AQUIVO PODE CONSIDERADO UM CENTRALIZADOR SECUNDARIO DE RECURSOS ESPECIFICOS
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from './componentes/interpolation/interpolation.component';
import { PBindingComponent } from './componentes/p-binding/p-binding.component';
import { EBindingComponent } from './componentes/e-binding/e-binding.component';
import { TwoWayComponent } from './componentes/two-way/two-way.component';
import { XComponent } from './componentes/x/x.component';
import { NgIfComponent } from './componentes/ng-if/ng-if.component';
import { NgForComponent } from './componentes/ng-for/ng-for.component';
import { NgClassComponent } from './componentes/ng-class/ng-class.component';
import { NgStylesComponent } from './componentes/ng-styles/ng-styles.component';
import { DirCustomComponent } from './componentes/dir-custom/dir-custom.component';
import { PipeComponent } from './componentes/pipe/pipe.component';
import { FormulariosComponent } from './componentes/formularios/formularios.component';

const routes: Routes = [
  {path: 'interpolacao', component: InterpolationComponent},
  {path: 'p-binding', component: PBindingComponent},
  {path: 'e-binding', component: EBindingComponent},
  {path: 'two-way', component: TwoWayComponent},
  {path: 'x', component: XComponent},
  {path: 'ng-if', component: NgIfComponent},
  {path: 'ng-for', component: NgForComponent},
  {path: 'ng-class', component: NgClassComponent},
  {path: 'ng-style', component: NgStylesComponent},
  {path: 'dir-custom', component: DirCustomComponent},
  {path: 'pipe', component: PipeComponent},
  {path: 'formularios', component: FormulariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
