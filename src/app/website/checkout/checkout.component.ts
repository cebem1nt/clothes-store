import { Component } from '@angular/core';
import { UserService } from '../../user-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})

export class CheckoutComponent {
  form: FormGroup
  shippingAdres: FormGroup
  paymentMethods: FormGroup
  isFirstFormDone: boolean = false

  constructor(public userService: UserService, private fb: FormBuilder) {
    this.form = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ] ),
      lastName: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
      ]),
      countryRegion: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      companyName: new FormControl('',[
        Validators.minLength(2)
      ]),
      streetAdress: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      aptSuite: new FormControl('', [
        Validators.minLength(5)
      ]),
      city: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      state: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      postalCode: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      saveMyInfo: new FormControl(true)
    })

    this.shippingAdres = new FormGroup({
      same: new FormControl(true),
      different: new FormControl(false)
    })

    this.paymentMethods = this.fb.group({
      creditCart: [true],
      cash: [false],
      cardInfo: this.fb.group({
        cardNumber: ['', [
          Validators.required, 
          Validators.minLength(8)
        ]],
        cardDate: ['', [
          Validators.required, 
          Validators.minLength(4), 
        ]],
        cardName: ['', [
          Validators.required
        ]],
        securityCode: ['', [
          Validators.required,
          Validators.maxLength(3) 
        ]]
      })
    })
  }

  onCashOptionChange() {
    const cashControl = this.paymentMethods.get('cash');

    if (cashControl && cashControl.value) {
      this.paymentMethods.get('cardInfo.cardNumber')?.disable();
      this.paymentMethods.get('cardInfo.cardDate')?.disable();
      this.paymentMethods.get('cardInfo.cardName')?.disable();
      this.paymentMethods.get('cardInfo.securityCode')?.disable();
    } else {
      this.paymentMethods.get('cardInfo.cardNumber')?.enable();
      this.paymentMethods.get('cardInfo.cardDate')?.enable();
      this.paymentMethods.get('cardInfo.cardName')?.enable();
      this.paymentMethods.get('cardInfo.securityCode')?.enable();
    }
  }

  submitData(){
    if (this.form.valid){
      setTimeout(() => {
        alert('imagine that it works')
        this.isFirstFormDone = true
      }, 5000) // someday it will be a server request  
    }
  }

  pay(){
    if (this.paymentMethods.valid && this.form.valid && this.isFirstFormDone){
      const deliveryData = {...this.form.value}
      const shippingData = {...this.shippingAdres.value}
      const paymentData = {...this.paymentMethods.value}
      if (this.form.get('saveMyInfo')!.value){
        this.userService.savedData.deliveryData = deliveryData
        this.userService.savedData.shippingData = shippingData
        this.userService.savedData.paymentData = paymentData
      }
      this.userService.manageSavedData(deliveryData, paymentData)

      let order = {
        products: [...this.userService.shoppingCart],
        orderDate: new Date(),
        estimatedTime: new Date(),
        paymentMethod: paymentData.creditCart ? 'Credit cart' : 'Cash on delivery',
        orderNumber: Math.floor(Math.random()*99999),
        orderStatus: 'Inprogress'
      }
      order.estimatedTime.setDate(order.orderDate.getDate() + 31)
      console.log(this.userService.savedData, order)

      this.userService.shoppingCart.length = 0
      setTimeout(() => {
        alert('imagine that it works')
        this.userService.orders.active.push(order)
      }, 2000) // someday it will be a server request
    }
  }

  inputPatterns(event: Event, param: string){
    const input = event.target as HTMLInputElement
    if (param === 'regular'){
      input.value = input.value.replace(/[^a-zA-Z0-9_\-\s]/g, '')
    } else if (param === 'abc'){
      input.value = input.value.replace(/[^a-zA-Z]/g, '')
    } else if (param === 'num'){
      input.value = input.value.replace(/[^0-9]/g, '')
    } else if (param === 'phone'){
      input.value = input.value.replace(/[^0-9+]/g, '')
    } else if (param === 'cardnum'){
      input.value = input.value.replace(/[^0-9]/g, '').slice(0, 19)
    } else if (param === 'carddate'){
      input.value = input.value.replace(/[^0-9/]/g, '').slice(0, 5)
    } else if (param === 'code'){
      input.value = input.value.replace(/[^0-9]/g, '').slice(0, 3)
    }
  }

  changePasVis(event: any, pas: any): void{
    if(pas.type === 'password'){
      event.target.src = 'assets/img/hide-show/hide.svg'
      pas.type = 'text'
    } else {
      event.target.src = 'assets/img/hide-show/show.svg'
      pas.type = 'password'
    }
  }
}
