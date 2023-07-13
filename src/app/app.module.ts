import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {ProductoService} from './services/producto.service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import{Camera} from '@ionic-native/camera/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FhotoComponent } from './fhoto/fhoto.component';

@NgModule({
  declarations: [AppComponent,FhotoComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ProductoService],
  bootstrap: [AppComponent],
})
export class AppModule {}

