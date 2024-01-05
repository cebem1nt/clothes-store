import { Component } from '@angular/core';
import { UserService } from '../../../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.sass']
})
export class MyOrderComponent {
  currentRoute = ''
  constructor(public userService: UserService, 
              private router: Router){ }

  ngDoCheck(){
    this.currentRoute = this.router.url
  }

  viewDetails(order: any): void{
    this.userService.orderToView = {...order}
  }

  orderSubtotal(order: any[]): number{
    let sbttl = 0
    order.forEach(product => {
      sbttl += product.subtotal
    })
    return sbttl
  }

  subtotalItems(order: any[]): number{
    let items = 0 
    order.forEach(product => {
      items += product.cuantity
    })
    return items
  }
}
