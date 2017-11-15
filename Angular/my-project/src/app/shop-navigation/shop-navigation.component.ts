import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shop-navigation',
  templateUrl: './shop-navigation.component.html',
  styleUrls: ['./shop-navigation.component.css']
})
export class ShopNavigationComponent implements OnInit {

  @Output()
  private navigationChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  goToBasket() {
    this.navigationChange.emit('basket');
  }

  goToContact() {
    this.navigationChange.emit('contact');
  }

}
