import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductService } from '../../product-service.service';
import { LikeProductService } from '../../like-product.service';
import { UserService } from '../../user-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
  providers: [ProductService]
})

export class ListComponent {

  constructor( private router: Router, 
    public productService: ProductService,
    public likeService: LikeProductService,
    public userService: UserService) { }
  
  newOrRecomended:boolean = true
  isMenuHiden = true

  currentRoute:string = ''

  filterMenParams:filter = {
    Joggers: true,
    PrintedTShirts: true,
    Classic: true,
    Casual: true,
    Sport: true
  }

  filterWomenParams:filter = {
    Tops: true,
    PrintedTShirts: true,
    Classic: true,
    Casual: true,
    Sport: true
  }

  filterColorParams:filter = {
    Black: true,
    Red: true,
    Purple: true
  }

  filterSizeParams:filter = {
    XXS: true,
    XL: true
  }

  filterPriceParams = {
    start: 50,
    end: 300
  }

  get filteredProducts(): Product[] {
    
    let tmpFirst: Product[]

    if(this.currentRoute === '/products/men'){
      tmpFirst = this.productService.maleProducts.filter(product => {
        return this.filterMenParams[product.type] || this.filterMenParams[product.dressStyle]
      })
    } else {
      tmpFirst = this.productService.femaleProducts.filter(product => {
        return this.filterWomenParams[product.type] || this.filterWomenParams[product.dressStyle]
      })
    }
    return this.filterByPrice(this.filterBySize(this.filterByColor(tmpFirst)))
  }

  hideMenu(){
    this.isMenuHiden = true
  }

  openMenu(){
    this.isMenuHiden = false
  }

  filterByColor(productArr: Product[] = this.currentRoute === '/products/men' ? 
  this.productService.maleProducts : 
  this.productService.femaleProducts): Product[] {
    const filteredProducts: Product[] = productArr.filter(product => {
      return product.avaliableColors.some(color => this.filterColorParams[color.title]);
    });
    return filteredProducts;
  }
  
  filterBySize(
    productArr: Product[] = this.currentRoute ===  '/products/men' ? 
    this.productService.maleProducts : this.productService.femaleProducts
  ): Product[]{
    const filteredProducts: Product[] = productArr.filter(product => {
      return product.avaliableSizes.some(size => this.filterSizeParams[size])
    })
    return filteredProducts
  }

  filterByPrice(productArr: Product[] = this.currentRoute ===  '/products/men' ? 
  this.productService.maleProducts : this.productService.femaleProducts
  ): Product[]{
   const filteredProducts: Product[] = productArr.filter(product => {
     return product.price <= this.filterPriceParams.end && product.price >= this.filterPriceParams.start
    })
    return filteredProducts
  }

  setPriceFilter(start: string, end:string): void {
    this.filterPriceParams.start = Number(start)
    this.filterPriceParams.end = Number(end)
  }

  AddToMenParams(param: string) {
    if (!this.filterMenParams.hasOwnProperty(param)) {
      this.filterMenParams[param] = true
    } else {
      delete this.filterMenParams[param]
    }
  }

  AddToColorParams(param: string){
    if (!this.filterColorParams.hasOwnProperty(param)) {
      this.filterColorParams[param] = true
    } else {
      delete this.filterColorParams[param]
    }
  }

  AddToSizeParams(param: string){
    if (!this.filterSizeParams.hasOwnProperty(param)) {
      this.filterSizeParams[param] = true
    } else {
      delete this.filterSizeParams[param]
    }
  }

  AddToWomenParams(param: string) {
    if (!this.filterWomenParams.hasOwnProperty(param)) {
      this.filterWomenParams[param] = true
    } else {
      delete this.filterWomenParams[param]
    }
  }

  ngOnInit(){
    this.currentRoute = this.router.url
  }

}

interface filter{
  [key: string | number]: boolean;
}