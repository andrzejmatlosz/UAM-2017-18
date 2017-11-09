import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.css']
})
export class ShopHeaderComponent implements OnInit {

  public userName: string;

  constructor(private userService: UserService) {
    
  }

  ngOnInit() {
    this.userName = this.userService.getUserName() + 'abc';
  }

}
