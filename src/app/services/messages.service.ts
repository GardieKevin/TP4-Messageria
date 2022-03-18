import {Injectable} from '@angular/core';
import {Message} from "../modeles/Message";
import {Auteur} from "../modeles/Auteur";

@Injectable({
  providedIn: 'root'
})
export class messagesService {

  public messages: Message[];
  public auteurs: Auteur[];

  constructor() {
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
}
