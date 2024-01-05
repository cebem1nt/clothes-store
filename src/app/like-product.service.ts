import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeProductService {
  constructor() { }

  isLikeVisible: boolean = false
  likedProductData: any = {}

  likeProduct(event: any, likedProduct: any): void{
    const afterElement = event.target as HTMLElement;
    if (afterElement.classList.contains('product-img') && 
        event.offsetX > afterElement.offsetWidth * 0.85 && 
        event.offsetY < afterElement.offsetHeight * 0.15) {
      event.preventDefault()
      this.openModal()
      this.likedProductData = {...likedProduct}
    }
  }

  openModal() {
    this.isLikeVisible = true
    document.body.style.overflow = 'hidden'
  }

  closeModal(modal: HTMLElement) {
    modal.classList.add('animate__fadeOut')
    setTimeout(()=>{
      this.isLikeVisible = false
      document.body.style.overflow = 'auto'
    }, 1000)
  }

  completeModal(modal: HTMLElement){
    modal.classList.add('animate__fadeOutUp')
    setTimeout(()=>{
      this.isLikeVisible = false
      document.body.style.overflow = 'auto'
    }, 1000)
  }
}
