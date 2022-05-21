import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { Error404Component } from './error404/error404.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SobreComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [AuthGuard], //forçando o angular a importar o auth guard(parte de autenticação)
  bootstrap: [AppComponent]
})
export class AppModule { }
