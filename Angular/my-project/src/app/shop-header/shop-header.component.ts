import { StreamService } from '../stream.service';
import { UserService } from './user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.css']
})
export class ShopHeaderComponent implements OnInit {

  public userName: string;
  private i: number = 0;

  @Input()
  public title: string;

  constructor(private userService: UserService,
              private streamService: StreamService) {
    
  }

  ngOnInit() {
    this.userName = this.userService.getUserName() + 'abc';
  }

  public publishData(): void {
    this.streamService.publishData('A' + this.i++);
  }

}
