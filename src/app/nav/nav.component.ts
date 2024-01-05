import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})

export class NavComponent { 
  currentRoute = ''
  searchResults: ShortProduct[] = []
  isFocused: boolean = false
  isResultFocused: boolean = false

  constructor(private router: Router, private productService: ProductService){}

  onBlur(){
    this.isFocused = false
  }

  onFocus(){
    this.isFocused = true  
  }

  onResultFocus(){
    this.isResultFocused = true
  }

  onResultBlur(){
    this.isResultFocused = false
  }

  ngDoCheck(){
    this.currentRoute = this.router.url
  }

  searchProduct(input: string):void{
    let found: ShortProduct[] = []
    input = input.toLowerCase()

    if(input === ' ' || input === ''){
      this.searchResults.length = 0
      return
    }

    this.productService.femaleProducts.forEach((x)=>{
      if (x.title.toLowerCase().includes(input) && x.id !== null){
        found.push({ id: x.id, title: x.title })
      }
    })

    this.productService.maleProducts.forEach((x)=>{
      if (x.title.toLowerCase().includes(input) && x.id !== null){
        found.push({ id: x.id, title: x.title })
      }
    })

    this.searchResults = found
  }

  shortResultText(text: string): string{
    if(text.length > 17){
      return text.slice(0, 17) + '...'
    }
    return text
  }

}

interface ShortProduct {
  id: number
  title: string
}