import { UserService } from './shop-header/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopHeaderComponent } from './shop-header/shop-header.component';
import { ShopNavigationComponent } from './shop-navigation/shop-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopHeaderComponent,
    ShopNavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
