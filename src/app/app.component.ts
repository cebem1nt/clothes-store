import { Component } from '@angular/core';
import { LikeProductService } from './like-product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(public likeService : LikeProductService){}
}
