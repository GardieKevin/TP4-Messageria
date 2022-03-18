import {Component, OnInit} from '@angular/core';
import {messagesService} from "../../services/messages.service";
import {Message} from "../../modeles/Message";

@Component({
  selector: 'app-nouveau-message',
  templateUrl: './nouveau-message.component.html',
  styleUrls: ['./nouveau-message.component.css']
})
export class NouveauMessageComponent implements OnInit {

  constructor(private svc: messagesService) {
  } //injection de service

  ngOnInit(): void {
  }

  public submitForm(valeurDuForm: any): void {
    //console.log(valeurDuForm);
    let nouveauMessage = new Message(valeurDuForm.pseudo, valeurDuForm.message);
    this.svc.ajouterMessage(nouveauMessage);
    valeurDuForm.pseudo = '';
    valeurDuForm.message = '';
  }

  public annuler(): void {
    this.svc.effacerMessage();
  }

}
