import { UserService } from './shop-header/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopHeaderComponent } from './shop-header/shop-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
