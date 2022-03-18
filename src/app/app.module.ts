import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnTeteComponent } from './components/en-tete/en-tete.component';
import { PersonnesActivesComponent } from './components/personnes-actives/personnes-actives.component';
import { NouveauMessageComponent } from './components/nouveau-message/nouveau-message.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    EnTeteComponent,
    PersonnesActivesComponent,
    NouveauMessageComponent,
    HistoriqueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
