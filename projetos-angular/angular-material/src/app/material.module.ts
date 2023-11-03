// o proposito deste arquivo é centralizar todos os recursos com origem na  dependencia Material Design

import { NgModule } from '@angular/core';

// importar os recursos necessários da dependencia Material Design
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    MatTableModule,
    MatPaginatorModule  
  ],
  exports:[
    MatTableModule,
    MatPaginatorModule  
  ]
})
export class MaterialModule { }
