import { Component } from '@angular/core';
import { UserService } from '../../user-service.service';
import { Router } from '@angular/router';
import { ProductService } from '../../product-service.service';
import { LikeProductService } from '../../like-product.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.sass']
})
export class UserPageComponent {
  currentRoute = ''
  constructor(public userService: UserService, 
    private router: Router, public productService: ProductService,
    public likeService: LikeProductService){ }

  ngDoCheck(){
    this.currentRoute = this.router.url
  }
}
