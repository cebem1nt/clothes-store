import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styles: [`
  .img-container
    display: flex
    justify-content: center
    img
        width: 50vh

  .text-container
    display: flex
    flex-direction: column
    align-items: center
    text-align: center
    h1
      color: black
      font-weight: 600
      font-size: 200%
    h6
      color: #807D7E
      font-weight: 500
      margin-bottom: 7vh
      font-size: 100%

  .back-to
    display: block
    background-color: #8A33FD
    border-radius: 0.5rem
    color: white
    padding: 2.5vh 10vh

  .special-container
    width: 100%
    margin-right: auto
    margin-left: auto
    padding: 16vh 5vh

  `]
})
export class NotFoundComponent {

}
