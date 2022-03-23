import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {messagesService} from "../../services/messages.service";

@Component({
  selector: 'app-en-tete',
  templateUrl: './en-tete.component.html',
  styleUrls: ['./en-tete.component.css']
})
export class EnTeteComponent implements OnInit {

  public recupereDeLApi: Observable<any>; //cet attribut contiendra le retour de l'appel à l'api

  constructor(private svc: messagesService) {
    this.recupereDeLApi = this.svc.getApi();
  }

  ngOnInit(): void {
  }

}
