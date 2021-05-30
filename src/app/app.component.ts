import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coffee';
  private currentNumber = 0;
constructor () { }

private add() {
  this.currentNumber++;
}


}
