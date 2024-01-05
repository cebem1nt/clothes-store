import { Component } from '@angular/core';
import { ProductService } from '../../product-service.service';
import { LikeProductService } from '../../like-product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  constructor(public productService: ProductService, public likeService : LikeProductService){}
  scrollBottom(){
    window.scrollTo(0, 2800)
  }
}
