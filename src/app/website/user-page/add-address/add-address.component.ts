import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.sass']
})
export class AddAddressComponent {
  addressForm : FormGroup

  constructor(public userService: UserService, 
    private router : Router){
    this.addressForm = new FormGroup({
      firstName: new FormControl(
        this.userService.addressToEdit.firstName, [
        Validators.required,
        Validators.minLength(2)
      ]),
      lastName: new FormControl(
        this.userService.addressToEdit.lastName, [
        Validators.required,
        Validators.minLength(2)
      ]),
      countryRegion: new FormControl(
        this.userService.addressToEdit.countryRegion, [
        Validators.required,
        Validators.minLength(2)
      ]),
      companyName: new FormControl(
        this.userService.addressToEdit.companyName, [
        Validators.minLength(2)
      ]),
      streetAdress: new FormControl(
        this.userService.addressToEdit.streetAdress, [
        Validators.required,
        Validators.minLength(5)
      ]),
      aptSuite: new FormControl(
        this.userService.addressToEdit.aptSuite, [
        Validators.minLength(5)
      ]),
      city: new FormControl(
        this.userService.addressToEdit.city, [
        Validators.required,
        Validators.minLength(3)
      ]),
      state: new FormControl(
        this.userService.addressToEdit.state || 'NY'
      ),
      postalCode: new FormControl(
        this.userService.addressToEdit.postalCode, [
        Validators.required,
        Validators.minLength(4)
      ]),
      phone: new FormControl(
        this.userService.addressToEdit.phone, [
        Validators.required,
        Validators.minLength(5)
      ]),
      deliveryInstruction: new FormControl(
        this.userService.addressToEdit.deliveryInstruction
        ),
      defaultShipping: new FormControl(
        this.userService.addressToEdit.defaultShipping 
      ),
      defaultBilling: new FormControl(
        this.userService.addressToEdit.defaultBilling
      )
    })
  }

  get isEditAddress(): boolean{
    if (this.userService.addressToEdit === ''){
      return false
    } else {
      return true
    }
  }

  saveAddress(): void {
    const addressData = {...this.addressForm.value}
    if(this.addressForm.valid && !this.isEditAddress){
      console.log(addressData)
      let address = {
        firstName: addressData.firstName,
        lastName: addressData.lastName,
        countryRegion: addressData.countryRegion,
        companyName: addressData.companyName,
        streetAdress: addressData.streetAdress,
        aptSuite: addressData.aptSuite,
        city: addressData.city,
        state: addressData.state,
        postalCode: addressData.postalCode,
        phone: addressData.phone,
        deliveryInstruction: addressData.deliveryInstruction,
        defaultShipping: addressData.defaultShipping,
        defaultBilling: addressData.defaultBilling,
        id: this.userService.newAddressId
      }

      setTimeout(() => {
        this.userService.userInfo.addressInfo.push(address)
        this.router.navigate(['/account/info'])
      }, 5000);

    } else if (this.addressForm.valid && this.isEditAddress){ 
      const editAddressId = this.userService.addressToEdit.id
      let addressBefore = this.userService.addressById(editAddressId)
          addressBefore.firstName = addressData.firstName
          addressBefore.lastName = addressData.lastName
          addressBefore.countryRegion = addressData.countryRegion
          addressBefore.companyName = addressData.companyName
          addressBefore.streetAdress = addressData.streetAdress
          addressBefore.aptSuite = addressData.aptSuite
          addressBefore.city = addressData.city
          addressBefore.state = addressData.state
          addressBefore.postalCode = addressData.postalCode
          addressBefore.phone = addressData.phone
          addressBefore.deliveryInstruction = addressData.deliveryInstruction
          addressBefore.defaultShipping = addressData.defaultShipping

      this.userService.addressToEdit = ''
      setTimeout(() => {
        this.router.navigate(['/account/info'])
      }, 5000);
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
}
