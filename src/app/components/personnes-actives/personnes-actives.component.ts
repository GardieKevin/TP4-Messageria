import {Component, OnInit} from '@angular/core';
import {messagesService} from "../../services/messages.service";
import {Message} from "../../modeles/Message";
import {Auteur} from "../../modeles/Auteur";

@Component({
  selector: 'app-personnes-actives',
  templateUrl: './personnes-actives.component.html',
  styleUrls: ['./personnes-actives.component.css']
})
export class PersonnesActivesComponent implements OnInit {

  ngOnInit(): void {
  }

  public auteurs: Auteur[];

  constructor(private svc: messagesService) {
    this.auteurs = this.svc.auteurs;
  }

}
