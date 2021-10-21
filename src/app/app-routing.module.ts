import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './components/contato/contato.component';
import { FacaParteComponent } from './components/faca-parte/faca-parte.component';
import { ImportanteComponent } from './components/importante/importante.component';
import { OndeAssistirComponent } from './components/onde-assistir/onde-assistir.component';
import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
