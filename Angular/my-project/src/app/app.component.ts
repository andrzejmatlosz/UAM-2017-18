import { Component } from '@angular/core';

@Component({
  selector: 'root-shop',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'MY-sjhop HELLO';

  public changeTitle() {
    this.title = "Title changed";
  }
}
