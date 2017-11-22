import { UserService } from './shop-header/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopHeaderComponent } from './shop-header/shop-header.component';
import { ShopNavigationComponent } from './shop-navigation/shop-navigation.component';
import { ShopProductListComponent } from './shop-product-list/shop-product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopHeaderComponent,
    ShopNavigationComponent,
    ShopProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
