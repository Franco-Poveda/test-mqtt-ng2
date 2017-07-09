import { Component, OnInit, OnDestroy } from '@angular/core';
import { AfterViewInit, ViewChild, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Packet } from 'mqtt';

import { MQTTService } from '../../services/mqtt';
import { StatusComponent } from 'app/components/status/status.component';

/**
 * This component is an example implementation which uses
 *  the Service to subscribe to data from a queue,
 *  then pass that into Angular2 template variables.
 *
 *  The Service makes available an Observable which
 *  this component uses in its own template, and
 *  additionally subscribes its' own on_next method to.
 *
 *  The instantiating component must provide an instance
 *  of Service.
 */
@Component({
  selector: 'app-rawdata',
  templateUrl: './rawdata.component.html',
  styleUrls: ['./rawdata.component.css']
})
export class RawDataComponent implements OnInit, OnDestroy, AfterViewInit {
  message: string;

  @ViewChild(StatusComponent)
  public miStatusHijo:StatusComponent;

  // Stream of messages
  public messages:Observable<Packet>;

  // Array of historic message (bodies)
  public mq: Array<string> = [];


  // A count of messages received
  public count = 0;

  /** Constructor */
  constructor(private _mqService: MQTTService) { }

  ngOnInit() {
    this._mqService.onConnected.subscribe(this.onServiceConnected);
    this._mqService.onError.subscribe(this.on_error);
    // Subscribe a function to be run on_next message
    this._mqService.messages.subscribe(this.on_next);
  }

  ngAfterViewInit(): void {
    }


  ngOnDestroy() {
    this._mqService.onConnected.unsubscribe();
    this._mqService.onError.unsubscribe();
    this._mqService.messages.unsubscribe();
  }

  /** Callback on_connect to queue */
  public onServiceConnected = () => {

    // Store local reference to Observable
    // for use with template ( | async )
    this.messages = this._mqService.messages;


  }

  /** Consume a message from the _mqService */
  public on_next = (message: Packet) => {

    // Store message in "historic messages" queue
    this.mq.push(message.toString() + '\n');
    this.message = message.toString();
    // Count it
    this.count++;
  }

  public on_error = () => {
    console.error('Ooops, error in RawDataComponent');
  }

  public actualizar = (pines:string) => {
      this._mqService.publish(pines);
  }
}
