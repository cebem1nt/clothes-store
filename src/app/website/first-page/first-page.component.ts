import {Component} from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-first',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.sass']
})
export class firstPageComponent {
  constructor(private router: Router){ }
  
  currentRoute = ''
  
  ngOnInit(){
    this.currentRoute = this.router.url
  }
}
