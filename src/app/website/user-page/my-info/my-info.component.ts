import { Component } from '@angular/core';
import { UserService } from '../../../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.sass']
})
export class MyInfoComponent {
  constructor(public userService: UserService, private router: Router){ }

  inputFlags: inputFlags = {
    isName: true,
    isEmail: true,
    isPhone: true,
    isPassword: true
  }

  changeValue(event: any, flag: string): void{
    if (this.inputFlags[flag]){
      event.target.innerText = 'Submit'
      this.inputFlags[flag] = false
    } else {
      event.target.innerText = 'Change'
      this.inputFlags[flag] = true
    }
    console.log(this.userService.userInfo)
  }

  get userAddresses(): any[] {
    let changedAddresses: any[] = []
    this.userService.userInfo.addressInfo.forEach((address) => {
      changedAddresses.push(
        {
          addressName: address.firstName + ' ' + address.lastName,
          addressPhoneNumber: address.phone ,
          address: `${address.countryRegion} ${address.state} ${address.city} 
          ${address.companyName} ${address.streetAdress} ${address.aptSuite}
          ${address.postalCode} ${address.deliveryInstruction}`,
          buildingInfo: 'Home',
          isDefaultShipping: address.defaultShipping,
          isDefaultBilling: address.defaultBilling,
          id: address.id
        }
      )
    })
    return changedAddresses
  }

  removeAddress(id: number):void {
    const addressToDelete = this.userService.addressById(id)
    if (!addressToDelete){
      console.error('unexpected error', 505)
      return
    }
    const index = this.userService.userInfo.addressInfo.indexOf(addressToDelete)
    this.userService.userInfo.addressInfo.splice(index, 1)
    this.userAddresses.splice(index, 1)
  }

  defaultAddress(id: number): void {
    const addressOne = this.userService.addressById(id)
    console.log(addressOne)
    if (!addressOne){
      console.error('unexpected error', 505)
      return
    }
    addressOne.defaultBilling = true
    addressOne.defaultShipping = true
  }

  editAddress(id: number): void {
    const address = this.userService.addressById(id)
    if (address === undefined){
      console.error('unexpected error', 500)
      return
    }
    this.userService.addressToEdit = address
    this.router.navigate(['account/info/address'])
  }
}

interface inputFlags {
  [key: string]: boolean;
}