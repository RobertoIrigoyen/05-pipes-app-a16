import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss']
})
export class BasicsPageComponent {

  public nameLower: string = 'roberto';
  public nameUpper: string = 'ROBERTO';
  public fullName: string = 'iRIGoyen lopEz-baiSSon'
}
