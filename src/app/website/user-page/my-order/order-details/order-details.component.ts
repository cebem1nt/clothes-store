import { Component } from '@angular/core'
import { UserService } from '../../../../user-service.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.sass']
})
export class OrderDetailsComponent {
  order: any = ''
  constructor(private userService: UserService, private router : Router){}

  ngDoCheck(){
    this.order = this.userService.orderToView
    if(typeof this.order === 'string'){
      this.router.navigate(['notfound404'])
    }
  }

  goBack(): void{
    this.router.navigateByUrl('/account/orders/active')
  }

  orderSubtotal(o: any[]): number{
    let sbttl = 0
    o.forEach(product => {
      sbttl += product.subtotal
    })
    return sbttl
  }
}
