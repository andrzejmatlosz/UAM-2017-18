import { StreamService } from '../stream.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-product-list',
  templateUrl: './shop-product-list.component.html',
  styleUrls: ['./shop-product-list.component.css']
})
export class ShopProductListComponent implements OnInit {

  private messages: Array<string> = [];

  constructor(private streamService: StreamService) { }

  ngOnInit() {
    this.streamService.getStream().subscribe((data: string) => {
      this.messages.push(data);
    });
  }

}
