import { Component } from '@angular/core';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../first-page.component.sass']
})
export class SignInComponent {
  constructor(public authService : AuthService) { }
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
