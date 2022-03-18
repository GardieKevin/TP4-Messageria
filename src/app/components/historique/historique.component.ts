import {Component, OnInit} from '@angular/core';
import {Message} from "../../modeles/Message";
import {messagesService} from "../../services/messages.service";

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public leTableauRecupereParLeService: Message[];

  constructor(private svc: messagesService) {
    this.leTableauRecupereParLeService = this.svc.messages;
  }

  /*private message1 = new Message('Paul', 'Bonjour le monde');
  private message2 = new Message('Jean', 'Bonjour tout seul');
  private message3 = new Message('Max', 'Bonjour');

  public messages = [this.message1, this.message2, this.message3]; // je crée un tableau de messages*/

}


