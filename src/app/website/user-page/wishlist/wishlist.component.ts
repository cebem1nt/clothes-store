import { Component } from '@angular/core';
import { UserService } from '../../../user-service.service';
import { ProductService } from '../../../product-service.service';
import { selectedProduct } from '../../product/product.component';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.sass']
})
export class WishlistComponent {
  constructor(public userService: UserService, public productService: ProductService){ }

  removeFromWishlist(wish: any, div: HTMLElement): void{
    div.classList.add('animate__animated', 'animate__fadeOutDown')
    setTimeout(()=>{
      const index = this.userService.userInfo.wishlist.indexOf(wish)
      if (index === undefined){
        console.error('unexpected error', 500)
        return
      }
      this.userService.userInfo.wishlist.splice(index, 1)
    }, 1000)
  }

  addToShoppingCart(wish: selectedProduct, div: HTMLElement): void{
    div.classList.add('animate__animated', 'animate__fadeOutRight')
    setTimeout(()=>{
      const product = {...wish}
      this.userService.shoppingCart.push(product)
      const index = this.userService.userInfo.wishlist.indexOf(wish)
      if (index === undefined){
        console.error('unexpected error', 500)
        return
      }
      this.userService.userInfo.wishlist.splice(index, 1)
    }, 1000)
  }
}
