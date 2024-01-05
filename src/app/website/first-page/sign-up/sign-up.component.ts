import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../first-page.component.sass']
})
export class SignUpComponent {
  isHided = true
  changePasswordVis(pas: any, img: any){
    if (this.isHided == true){
      pas.type = 'text'
      this.isHided = false
      img.src = 'assets/img/hide-show/hide.svg'
    } else{
      pas.type = 'password'
      this.isHided = true
      img.src = 'assets/img/hide-show/show.svg'
    }
  }
}
