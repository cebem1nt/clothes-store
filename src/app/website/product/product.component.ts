import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Product, ProductService } from '../../product-service.service';
import { UserService } from '../../user-service.service';
import { LikeProductService } from '../../like-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
  productId: number
  product: Product
  currentRoute = ''
  spliedRoute :string[]

  constructor(private route: ActivatedRoute, 
    public userService: UserService, 
    private router: Router,
    public productService: ProductService,
    public likeServie: LikeProductService) { 

    this.currentRoute = this.router.url
    this.spliedRoute = this.currentRoute.split('/')
    this.productId = Number(this.route.snapshot.params['id'])
    this.product = productService.productById(this.productId)
  }

  ngOnInit(){
    this.selectedColor = this.product.avaliableColors[0].title
    this.selectedSize = this.product.avaliableSizes[0]
    if(this.product.id === null){
      console.error('unexpected error', 505)
      this.router.navigate(['/notfound404'])
    }

    if(this.userService.recentlyViewed.length == 4 && 
      !this.userService.recentlyViewed.includes(this.product)){
      this.userService.recentlyViewed.unshift(this.product)
      this.userService.recentlyViewed.pop()
    } else if(!this.userService.recentlyViewed.includes(this.product)) {
      this.userService.recentlyViewed.push(this.product)
    }
    console.log(this.product)
  }

  get similarProducts(): any[]{
    let reslut:any[] = []
    if(this.product.sex === 'f'){
      this.productService.femaleProducts.forEach((x)=>{
        if(x.type === this.product.type && x !== this.product){
          reslut.push(x)
        }
      })
    } else {
      this.productService.maleProducts.forEach((x)=>{
        if(x.type === this.product.type && x !== this.product){
          reslut.push(x)
        }
      })
    }
    return reslut
  }

  selectedColor: string = ''
  selectedSize: string = ''
  selectedNav: string =  'Description'
  
  addToProductCart(){
    if(this.product.id === null){
      console.error('unexpected error', 600)
      return
    }
    let selectedProduct: selectedProduct = {
      title: this.product.title,
      selectedProductId: this.product.id,
      price: this.product.price,
      subtotal: this.product.price + 10,
      img: this.product.url,
      size: this.selectedSize,
      color: this.selectedColor,
      shipping: 10,
      cuantity: 1
    }
    this.userService.shoppingCart.push(selectedProduct)
    console.log(this.userService.shoppingCart)
    alert('Added to shopping cart')
  }
}

export interface selectedProduct {
  selectedProductId: number
  price: number
  img: string
  title: string
  size: string
  subtotal: number
  color: string
  shipping: number
  cuantity: number
}