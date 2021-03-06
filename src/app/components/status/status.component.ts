import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MQTTService } from '../../services/mqtt';
import { TransportState } from "../../services/mqtt/transport.service";

/**
 * MQ connection status as a component
 */
@Component({
  selector: 'app-mq-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  public state: Observable<string>;

  public miVar:string = "hola";

  constructor(public _mqService: MQTTService) { }
  
  ngOnInit() {
    this.state = this._mqService.state
      .map((state: number) => TransportState[state]);
  }

}
