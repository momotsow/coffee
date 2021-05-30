import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../models/product';
import { PRODUCTS } from '../../services/mock-products';

@Component({
  selector: 'app-coffe-list',
  templateUrl: './coffe-list.component.html',
  styleUrls: ['./coffe-list.component.css']
})
export class CoffeListComponent  {
  products = PRODUCTS;
  public currentNumber = 0;
  public pointNumber = 0;
  public pointsminus = 0;
  public oldcurrentNumber = 0;
  closeResult: string;

  constructor(private modalService: NgbModal) {}

    //Points gets added when a user buys 10 coffees
  public add () {
    this.currentNumber++;
    if(this.currentNumber == 10) {
      this.pointNumber++;
      this.oldcurrentNumber++;
      this.currentNumber = 0;
    }
  }
  
  //redeem points after the user has 5 points
  public minus (content, redeemcontent) {
    if(this.pointNumber >= 5) {
      this.pointNumber = this.pointNumber - 5;
      this.modalService.open(redeemcontent, { centered: true });
    }
    else {
      this.currentNumber;
      this.modalService.open(content, { centered: true });
    }
  }

    //History of all points
  public history (historycontent) {
    this.modalService.open(historycontent, { centered: true });
  }
}
