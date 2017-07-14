import { Component, Input } from '@angular/core';
import { MQTTService } from 'app/services/mqtt';
import { MdSlideToggleModule } from '@angular/material';





@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']

})
export class AppComponent {
    public publish: Function;
    public currentO1: number[];
    public currentO2: number[];

    public a1: MdSlideToggleModule;
    public a2: MdSlideToggleModule;
    public a3: MdSlideToggleModule;
    public a4: MdSlideToggleModule;

    public b1: MdSlideToggleModule;
    public b2: MdSlideToggleModule;
    public b3: MdSlideToggleModule;
    public b4: MdSlideToggleModule;


    constructor(public _mqService: MQTTService) {
        this.publish = _mqService.publish;
    }
    public setDigitalOutput(a1, a2, a3, a4, b1, b2, b3, b4) {

        console.dir(a1, a2, a3, a4, b1, b2, b3, b4);
        let do1 = [a1, a2, a3, a4].map(x => {
            return (x == false || x == undefined) ? 1 : 0;
        });
        let do2 = [b1, b2, b3, b4].map(x => {
            return (x == false || x == undefined) ? 1 : 0;
        });
        const updateDO = {
            "do1": do1,
            "do2": do2
        }
        this._mqService.publish(JSON.stringify(updateDO));



    }

}
