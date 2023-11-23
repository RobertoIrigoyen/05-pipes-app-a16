import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/heroe.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  
  public orderBy?: keyof Hero | undefined;

  public order: boolean = true

  public heroes: Hero[] = [
    {
      name: 'Ironman',
      canFly: true,
      color: Color.yellow
    },
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: true,
      color: Color.black
    },
    {
      name: 'Hulk',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Plastic Man',
      canFly: true,
      color: Color.red
    }
  ]

  public toogleUppercase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
  changeOrder(value: keyof Hero): void {
    this.orderBy === value
      ? this.order = !this.order
      : (this.orderBy = value, this.order = true)
  }


}
