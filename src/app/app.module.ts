import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { GoogleMapsModule } from '@angular/google-maps';
import { MapMarkerComponent } from './components/markers/markers.component';

@NgModule({
    declarations: [
        AppComponent,
        MapMarkerComponent,

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GoogleMapsModule,
    ]
})
export class AppModule { }
