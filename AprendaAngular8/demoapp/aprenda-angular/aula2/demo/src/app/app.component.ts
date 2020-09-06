import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div> {{ title }}<br>Usando Inline no template</div>',
  styles: [
    `
     div {
       color: red;
     }
    `
  ]
})
export class AppComponent {
  title = 'Aprenda Angular 8';
}
