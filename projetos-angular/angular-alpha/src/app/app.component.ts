import { Component } from '@angular/core';
// decorator @Component determina o seguinte:

@Component({
  selector: 'app-root',// prop que dá nome ao componente
  templateUrl: './app.component.html', // é o endereço no qual o arquivo .html - view  - se encontra
  styleUrls: ['./app.component.css'] // endereço no qual o arquivo de estilos se encontra
})
export class AppComponent {
  title: string = 'angular-alpha';
}
