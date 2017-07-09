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

      constructor(public _mqService: MQTTService) {    
          this.publish = _mqService.publish;
 }
      A1 = false;
  A2 = false;
  A3 = false;
  A4 = false;
  B1 = false;
  B2 = false;
  B3 = false;
  B4 = false;

 }
