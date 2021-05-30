import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent {

  public currentNumber = 0;
  public pointsminus = 0;
  constructor () { }

  public minus () {
    if(this.currentNumber >= 10) {
      this.currentNumber = this.currentNumber - 10;
    }
    else {
      this.currentNumber;
    }
    
  }
}
