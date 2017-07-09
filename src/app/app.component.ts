import { Component } from '@angular/core';
import { MQTTService } from 'app/services/mqtt';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
      public publish: Function;
      public currentO1: number[];
      public currentO2: number[];

      constructor(public _mqService: MQTTService) {
          this.publish = _mqService.publish;
 }
 public setDigitalOutput() {

    console.dir(this.currentO1);
    const sum = this.currentO1.reduce(function(valorAnterior, valorActual, indice, vector){
  return Number(valorAnterior) + Number(valorActual);
});
console.log(sum);
    console.log(Number(sum).toString(2));



 }

 }
