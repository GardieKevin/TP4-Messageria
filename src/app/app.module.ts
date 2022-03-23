import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnTeteComponent } from './components/en-tete/en-tete.component';
import { PersonnesActivesComponent } from './components/personnes-actives/personnes-actives.component';
import { NouveauMessageComponent } from './components/nouveau-message/nouveau-message.component';
import { historiqueComponent } from './components/historique/historique.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path:'abc', component: EnTeteComponent},
  {path:'xyz', component: PersonnesActivesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EnTeteComponent,
    PersonnesActivesComponent,
    NouveauMessageComponent,
    historiqueComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
