import { Component } from '@angular/core';
import { Carro } from './carro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula';
  // carro : number = 0;
  // carro = 0;
  // carro = "BMW";
  // carro : string = "BMW";
  // carro : boolean = false;
  // carro = ["BMW", "AUDI"]

  carros = [
    new Carro(1, "BMW"),
    new Carro(2, "AUDI")
  ]

  olaMundo() {
    return "Olá mundo !!!";
  }

  retornoMetodo() {
    console.log("Testando retorno do método.");
  }
}
