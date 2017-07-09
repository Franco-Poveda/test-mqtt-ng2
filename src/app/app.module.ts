import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Md2Module }  from 'md2';

import { AppComponent } from './app.component';
import { RawDataComponent } from './components/rawdata/rawdata.component';
import { StatusComponent } from './components/status/status.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { MQTTService } from './services/mqtt';
import { ConfigService } from './services/config/config.service';

@NgModule({
    declarations: [
        AppComponent,
        RawDataComponent,
        StatusComponent,
        ReversePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        Md2Module,
        BrowserAnimationsModule
    ],
    providers: [
        MQTTService,
        ConfigService],
    bootstrap: [AppComponent]
})
export class AppModule { }
