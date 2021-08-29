import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPersonagensComponent } from './ViewPersonagens/ViewPersonagens.component';
import { PersonagensCadastradosComponent } from './PersonagensCadastrados/PersonagensCadastrados.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Home/Home.component';

@NgModule({
  declarations: [	
    AppComponent,
      ViewPersonagensComponent,
      PersonagensCadastradosComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
