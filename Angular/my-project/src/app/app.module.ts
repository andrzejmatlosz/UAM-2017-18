import { HttpModule } from '@angular/http';
import { ProductsService } from './products.service';
import { Route, RouterModule } from '@angular/router';
import { StreamService } from './stream.service';
import { UserService } from './shop-header/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopHeaderComponent } from './shop-header/shop-header.component';
import { ShopNavigationComponent } from './shop-navigation/shop-navigation.component';
import { ShopProductListComponent } from './shop-product-list/shop-product-list.component';
import { ShopBasketComponent } from './shop-basket/shop-basket.component';
import { ShopContactComponent } from './shop-contact/shop-contact.component';
import { ShopProductDetailsComponent } from './shop-product-details/shop-product-details.component';

const routes: Array<Route> = [
  { path: '', pathMatch: 'full', redirectTo: '/product-list' },
  { path: 'basket', component: ShopBasketComponent },
  { path: 'contact', component: ShopContactComponent },
  { path: 'product-list', component: ShopProductListComponent, children: [
    { path: ':id', component: ShopProductDetailsComponent }
  ] }
];

@NgModule({
  declarations: [
    AppComponent,
    ShopHeaderComponent,
    ShopNavigationComponent,
    ShopProductListComponent,
    ShopBasketComponent,
    ShopContactComponent,
    ShopProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [ UserService, StreamService, ProductsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
