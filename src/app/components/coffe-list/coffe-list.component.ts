import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffe-list',
  templateUrl: './coffe-list.component.html',
  styleUrls: ['./coffe-list.component.css']
})
export class CoffeListComponent  {

  public currentNumber = 0;
  constructor () { }
  
  public add () {
    this.currentNumber++;
  }
  

}
