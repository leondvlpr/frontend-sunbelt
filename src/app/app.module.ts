import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultarclienteModule } from './consultarcliente/consultarcliente.module';
import { HttpClientModule } from '@angular/common/http';
import { ConsultarService } from './consultarcliente/services/consultar.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConsultarclienteModule,
    HttpClientModule
  ],
  providers: [ConsultarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
