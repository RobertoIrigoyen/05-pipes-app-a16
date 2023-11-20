import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.scss']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Roberto';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melisa';
    this.gender = 'female'
  }

  // i18n Plural

  public clients: string[] = ['Barri', 'Jorge', 'Victor', 'Dani', 'Roberto', 'Celia', 'Catalina'];

  public clientsMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': '1 cliente esperando',
    'other': ' # clientes esperando'
  }
  deleteClient(): void {
    this.clients.shift();
  }

  //keyValue Pipe

  public person = {
    name: 'Roberto',
    age: 28,
    address: 'Madrid, Españita'
  }

  //async Pipe
  public myObservableTimer: Observable<number> = interval(2000);
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data en la promesa')
    }, 3500);
  });
}
