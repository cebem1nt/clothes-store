import { Component } from '@angular/core';
import { ProductService } from '../../product-service.service';
import { Router } from '@angular/router';
import { UserService } from '../../user-service.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.sass']
})
export class CartPageComponent {

  constructor(public userService : UserService, 
    private productService: ProductService, 
    private router: Router) { }

  ngDoCheck(){
    if(this.userService.shoppingCart.length === 0){
      this.router.navigate(['/emptycart'])
    } 
  }

  removeFromShoppingCart(id: number): void{
    const productToDelete = this.userService.shoppingCart.find(product => {
      return product.selectedProductId === id
    })
    if (productToDelete === undefined){
      console.error('damn something is realy broken', 500)
      return
    }
    const index = this.userService.shoppingCart.indexOf(productToDelete)
    this.userService.shoppingCart.splice(index, 1)
  }

  increase(id: number){
    const productToIncrease = this.userService.shoppingCart.find(product => {
      return product.selectedProductId === id
    })

    if (productToIncrease === undefined){
      console.error('damn something is realy broken', 500)
      return
    }

    productToIncrease.cuantity += 1
    productToIncrease.subtotal += productToIncrease.price
  }

  decrease(id: number){
    const productToDecrease = this.userService.shoppingCart.find(product => {
      return product.selectedProductId === id
    })

    if (productToDecrease === undefined){
      console.error('damn something is realy broken', 500)
      return
    }

    if (productToDecrease.cuantity === 1){
      productToDecrease.cuantity = 1
      productToDecrease.subtotal = productToDecrease.subtotal
    } else {
      productToDecrease.cuantity -= 1
      productToDecrease.subtotal -= productToDecrease.price
    }
  }
}
