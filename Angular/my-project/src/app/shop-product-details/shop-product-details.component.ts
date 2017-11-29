import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-product-details',
  templateUrl: './shop-product-details.component.html',
  styleUrls: ['./shop-product-details.component.css']
})
export class ShopProductDetailsComponent implements OnInit {

  public product: any;

  constructor(private productsService: ProductsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id: number = +params['id'];

      this.productsService.getProduct(id).subscribe((product: any) => {
        this.product = product;
      });
    })
  }

}
