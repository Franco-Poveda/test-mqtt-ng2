/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RawDataComponent } from './components/rawdata/rawdata.component';
import { StatusComponent } from './components/status/status.component';
import { ConfigService } from './services/config/config.service';
import { ReversePipe } from './pipes/reverse.pipe';
import { MQTTService } from './services/mqtt';


describe('App: Ng2MQTTDemo', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                RawDataComponent,
                StatusComponent,
                ReversePipe
            ],
            imports: [
                HttpModule
            ],
            providers: [
                MQTTService,
                ConfigService]
        });
    });

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
