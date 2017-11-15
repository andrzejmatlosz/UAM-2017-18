import { Component } from '@angular/core';

@Component({
  selector: 'root-shop',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public appTitle: string = 'Title from APP component';
  public navigation: string = 'basket';

  public changeNavigationHandler(newNavigationValue: string): void {
    this.navigation = newNavigationValue;
  }
}
