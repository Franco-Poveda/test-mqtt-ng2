import { Component } from '@angular/core';
import { RawDataComponent } from "app/components/rawdata/rawdata.component";
import { MQTTService } from './services/mqtt';
import { Observable } from "rxjs/Observable";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MQTTService]

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
    var sum = this.currentO1.reduce(function(valorAnterior, valorActual, indice, vector){
  return Number(valorAnterior) + Number(valorActual);
});
console.log(sum);
    console.log(Number(sum).toString(2));



 }

 }
