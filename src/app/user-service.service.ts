import { Injectable } from '@angular/core';
import { selectedProduct } from './website/product/product.component';
import { Product, ProductService } from './product-service.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  addressToEdit: any = ''
  orderToView: any = ''
  constructor(private productService: ProductService){}

  savedData = {
    deliveryData: {},
    shippingData: {},
    paymentData: {}
  }

  userInfo = {
    userName: 'Guest',
    emailAdres: '',
    phoneNumber: '',
    password: '',
    savings: 0,

    detailedInfo:{
      firstName: '',
      lastName:'',
      countryRegion:'',
      companyName:'',
      streetAdress:'',
      aptSuite: '',
      city:'',
      state:'',
      phone:'',
      postalCode:'',
      deliveryInstruction:''
    },

    cardData:{
      cardDate:'',
      cardName:'',
      cardNumber:''
    },

    addressInfo: [
      {
        aptSuite: "1st floor 2nd door",
        city: "New York",
        companyName: "",
        countryRegion: "USA",
        defaultBilling: false,
        defaultShipping: true,
        deliveryInstruction: "random instruction",
        firstName: "Paul",
        lastName: "Role",
        phone: "88005553535",
        postalCode: "123231",
        state: "NY",
        streetAdress: "Pushkina 39",
        id: 1
      }
    ],
    wishlist: [
      {
        title: 'Flower Pattern Black T-shirt',
        color: "Black",
        img: "assets/img/products/12.png",
        price: 79,
        selectedProductId: 12,
        size: "XL",
        shipping: 0,
        subtotal: 79,
        cuantity: 1
      }
    ]
  }

  recentlyViewed: Product[] = [
    {
      id:3, 
      title:'Black Shorts', 
      brand:"MM's  Brand", 
      url:'assets/img/products/3.png', 
      price:37.00,
      sex: 'f',
      type: 'Payjamas',
      avaliableSizes: ['XXS', 'XL', 'S'],
      avaliableColors: [
        {
          title: 'Purple',
          hex: '#8434E1'
        },
        {
          title: 'Black',
          hex: '#000000'
        },
        {
          title: 'Red',
          hex: '#F35528'
        }
      ],
      dressStyle: 'Casual'
    },
    {
      id:4, 
      title:'Black Sweatshirt', 
      brand:"Jhanvi's  Brand", 
      url:'assets/img/products/4.png', 
      price: 123.00,
      sex: 'f',
      type: 'Kurti',
      avaliableSizes: ['XXS', 'XL', 'S'],
      avaliableColors: [
        {
          title: 'Purple',
          hex: '#8434E1'
        },
        {
          title: 'Black',
          hex: '#000000'
        },
        {
          title: 'Red',
          hex: '#F35528'
        }
      ],
      dressStyle: 'Classic'
    },
    {
      id:5, 
      title:'Yellow Sweatshirt', 
      brand:"woden's  Brand", 
      url:'assets/img/products/5.png', 
      price:50.00,
      sex: 'f',
      type: 'Kurti',
      avaliableSizes: ['XXS', 'XL', 'S'],
      avaliableColors: [
        {
          title: 'Purple',
          hex: '#8434E1'
        },
        {
          title: 'Black',
          hex: '#000000'
        },
        {
          title: 'Red',
          hex: '#F35528'
        }
      ],
      dressStyle: 'Casual'
    },
    {
      id:6, 
      title:'Barboreal Gray Sweatshirt', 
      brand:"Priya's  Brand", 
      url:'assets/img/products/6.png', 
      price:70.00,
      sex: 'f',
      type: 'Kurti',
      avaliableSizes: ['XXS', 'XL', 'S'],
      avaliableColors: [
        {
          title: 'Purple',
          hex: '#8434E1'
        },
        {
          title: 'Black',
          hex: '#000000'
        },
        {
          title: 'Red',
          hex: '#F35528'
        }
      ],
      dressStyle: 'Sport'
    }
  ]

  shoppingCart: selectedProduct[] = [
    {
      title: 'Flower Pattern Black T-shirt',
      color: "Black",
      img: "assets/img/products/12.png",
      price: 79,
      selectedProductId: 12,
      size: "XL",
      shipping: 0,
      subtotal: 79,
      cuantity: 1
    }
  ]

  get recomendedProducts(): Product[]{
    let recomended: Product[] = []
    let userTypes: Set<string> = new Set()

    this.recentlyViewed.forEach((x)=>{
      userTypes.add(x.type)
    })

    this.productService.femaleProducts.forEach((x)=>{
      if(userTypes.has(x.type)){
        recomended.push(x)
      }
    })

    this.productService.maleProducts.forEach((x)=>{
      if(userTypes.has(x.type)){
        recomended.push(x)
      }
    })
    console.log(recomended)
    return recomended
  }

  orders: any = {
    active: [
      {
        products: [
            {
                isSelected: true,
                title: "Green Sweatshirt",
                selectedProductId: 18,
                price: 140,
                subtotal: 150,
                img: "assets/img/products/18.png",
                size: "XXL",
                color: "Black",
                shipping: 10,
                cuantity: 1
            },
            {
                isSelected: true,
                title: "Leaves Pattern White Shirt",
                selectedProductId: 8,
                price: 111,
                subtotal: 121,
                img: "assets/img/products/8.png",
                size: "XXS",
                color: "Purple",
                shipping: 10,
                cuantity: 1
            }
        ],
        orderDate: "2023-12-27T00:59:45.859Z",
        estimatedTime: "2024-01-27T00:59:45.859Z",
        paymentMethod: 'Credit cart',
        orderNumber: 87741,
        orderStatus: "Inprogress"
      }
    ],
    completed: []
  }

  addressById(id: number): any{
    const address = this.userInfo.addressInfo.find((address)=>{
      return address.id === id
    })
    if (!address){
      console.error('unexpected error', 500)
      return undefined
    } else {
      return address
    }
  }

  manageSavedData(deliveryData:any, paymentData:any){
    let detailedInfo = this.userInfo.detailedInfo,
        cardData = this.userInfo.cardData

    detailedInfo.aptSuite = deliveryData.aptSuite
    detailedInfo.city = deliveryData.city
    detailedInfo.companyName = deliveryData.companyName
    detailedInfo.countryRegion = deliveryData.countryRegion
    detailedInfo.firstName = deliveryData.firstName
    detailedInfo.lastName = deliveryData.lastName
    detailedInfo.phone = deliveryData.phone
    detailedInfo.postalCode = deliveryData.postalCode
    detailedInfo.state = deliveryData.state
    detailedInfo.streetAdress = deliveryData.streetAdress

    this.userInfo.phoneNumber = deliveryData.phone
    this.userInfo.userName = deliveryData.firstName + '' + deliveryData.lastName

    if (paymentData.creditCart){
      cardData.cardDate = paymentData.cardDate
      cardData.cardName = paymentData.cardName
      cardData.cardNumber = paymentData.cardNumber
    }
  }

  get newAddressId(): number{
    const lastAddress = this.userInfo.addressInfo[this.userInfo.addressInfo.length - 1]
    if (lastAddress === undefined){
      return 1
    } else {
      return lastAddress.id + 1
    }
  }

  get subtotalItems(): number{
    let items = 0 
    this.shoppingCart.forEach(product => {
      items += product.cuantity
    })
    return items
  }

  get subtotalShipping(): number{
    let shipping = 0 
    this.shoppingCart.forEach(product => {
      shipping += product.shipping
    })
    return shipping
  }

  get subtotal(): number {
    let subtotal = 0 
    this.shoppingCart.forEach(product => {
      subtotal += product.price
    })
    return subtotal
  }

  get subtotalALL(): number {
    let sbttl = 0
    this.shoppingCart.forEach(product => {
      sbttl += product.subtotal
    })
    return sbttl
  }
}
