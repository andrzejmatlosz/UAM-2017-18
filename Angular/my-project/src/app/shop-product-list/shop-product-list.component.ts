import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { StreamService } from '../stream.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-product-list',
  templateUrl: './shop-product-list.component.html',
  styleUrls: ['./shop-product-list.component.css']
})
export class ShopProductListComponent implements OnInit {

  private messages: Array<string>;
  public products: Array<{name: string, id: number, details: string}>;

  constructor(private streamService: StreamService,
              private productsService: ProductsService,
              private router: Router) { 
                this.messages = [];
              }

  ngOnInit() {
    this.productsService.getProducts().subscribe((products: [any]) =>{
      this.products = products;
    });
  }

  goToDetails(product: {name: string, id: number, details: string}) {
    this.router.navigate(['product-list/' + product.id]);
  }

}
