import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LikeProductService } from '../like-product.service';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-like-product',
  templateUrl: './like-product.component.html',
  styleUrls: ['./like-product.component.sass']
})
export class LikeProductComponent {
  @Input() isVisible: boolean = false
  @Input() data: any

  constructor(public likeService : LikeProductService, 
    private userService: UserService){}

  selectedQuantity = 1
  selectedColor = ''
  selectedSize = ''
  isChanged = false

  ngDoCheck(){
    if (this.data.hasOwnProperty('id') && !this.isChanged){
      this.selectedColor = this.data.avaliableColors[0].title
      this.selectedSize = this.data.avaliableSizes[0]
    }
  }

  increase(){
    this.selectedQuantity += 1
    this.isChanged = true
  }

  decrease(){
    this.isChanged = true
    if(this.selectedQuantity != 1){
      this.selectedQuantity -= 1
    }
  }

  addToLikedProducts(){
    this.userService.userInfo.wishlist.push(
      {
        title: this.data.title,
        color: this.selectedColor,
        img: this.data.url,
        price: this.data.price,
        selectedProductId: this.data.id,
        size: this.selectedSize,
        shipping: 0,
        subtotal: this.data.price * this.selectedQuantity,
        cuantity: this.selectedQuantity
      }
    )
  }

  destroy(){
    setTimeout(() => {
      document.body.style.overflow = 'auto'
      this.selectedQuantity = 1
      this.selectedColor = ''
      this.selectedSize = ''
      this.isChanged = false
      this.data = {}
    }, 1000);
  }
}
