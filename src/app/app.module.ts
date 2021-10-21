import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoComponent } from './components/logo/logo.component';
import { BanerComponent } from './components/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { SobreComponent } from './components/sobre/sobre.component';
import { OndeAssistirComponent } from './components/onde-assistir/onde-assistir.component';
import { ImportanteComponent } from './components/importante/importante.component';
import { FacaParteComponent } from './components/faca-parte/faca-parte.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ImagemComponent } from './components/imagem/imagem.component';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LogoComponent,
    BanerComponent,
    SobreComponent,
    OndeAssistirComponent,
    ImportanteComponent,
    FacaParteComponent,
    ContatoComponent,
    ImagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
