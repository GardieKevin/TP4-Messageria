import {Injectable} from '@angular/core';
import {Message} from "../modeles/Message";
import {Auteur} from "../modeles/Auteur";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class messagesService {

  public messages: Message[];
  public auteurs: Auteur[];

  constructor(private http: HttpClient) { //injection de dépendance pour le getApi
    this.messages = [];
    this.auteurs = [];
  }

  public ajouterMessage(nouveauMessage: Message): void {
    this.messages.push(nouveauMessage);
    this.auteurs.push(nouveauMessage.auteur);
  }

  public effacerMessage(): void {
    if (this.messages.length > 0) {
      this.messages.pop();
      this.auteurs.pop();
    }
  }

  public getApi(): Observable<any>{
    return this.http.get('https://api.kanye.rest');
  }
}
