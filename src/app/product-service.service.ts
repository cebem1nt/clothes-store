import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  femaleProducts: Product[] = [
        {
          id:1, 
          title:'Levender Hoodie', 
          brand:"Nike's  Brand", 
          url:'assets/img/products/1.png', 
          price:119.00,
          sex: 'f',
          type: 'Joggers',
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
        },
        {
          id:2, 
          title:'line Pattern Black Hoodie', 
          brand:"AS's  Brand", 
          url:'assets/img/products/2.png', 
          price:37.00,
          sex: 'f',
          type: 'Full sleeve T-shirts',
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
        },
        {
          id:7, 
          title:'White Graphic Crop Top', 
          brand:"woden's  Brand", 
          url:'assets/img/products/7.png', 
          price:40.00,
          sex: 'f',
          type: 'Plain T-shirt',
          avaliableSizes: ['XXS', 'XL', 'S', 'L'],
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
          id:8, 
          title:'Leaves Pattern White Shirt', 
          brand:"paypal's  Brand", 
          url:'assets/img/products/8.png', 
          price: 111.00,
          sex: 'f',
          type: 'Plain T-shirt',
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
          dressStyle: 'Top'
        },
        {
          id:9, 
          title:'White T-shirt', 
          brand:"Helen’s  Brand", 
          url:'assets/img/products/9.png', 
          price:90.00,
          sex: 'f',
          type: 'Plain T-shirt',
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
          id:10, 
          title:'Blue Flower Print Crop Top', 
          brand:"Mellon's  Brand", 
          url:'assets/img/products/10.png', 
          price:71.00,
          sex: 'f',
          type: 'Plain T-shirt',
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
        },
        {
          id:11, 
          title:'I Don’t Graphic T-shirt ', 
          brand:"Nisargi's  Brand", 
          url:'assets/img/products/11.png', 
          price:69.00,
          sex: 'f',
          type: 'Plain T-shirt',
          avaliableSizes: ['XXS', 'XL', 'S', 'M'],
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
          id:12, 
          title:'Flower Pattern Black T-shirt', 
          brand:"MM’s  Brand", 
          url:'assets/img/products/12.png', 
          price:79.00,
          sex: 'f',
          type: 'Plain T-shirt',
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
            },
            {
              title: 'Green',
              hex: '#48BC4E'
            },
          ],
          dressStyle: 'Casual'
        }
  ]
  maleProducts: Product[] = [
          {
            id: 18,
            title: 'Green Sweatshirt',
            url: 'assets/img/products/18.png',
            brand: "Nike's  Brand",
            price: 140.00,
            sex: 'm',
            type: 'Joggers',
            avaliableSizes: ['XXS', 'XL', 'S', 'XXL'],
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
          },
          {
            id: 19,
            title: 'Red Square Patern Shirt',
            url: 'assets/img/products/19.png',
            brand: "AS's  Brand",
            price: 120.00,
            sex: 'm',
            type: 'Activewear',
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
          },
          {
            id: 20,
            title: 'Printed Oversize T-shirt',
            url: 'assets/img/products/20.png',
            brand: "ABS's  Brand",
            price: 70.00,
            sex: 'm',
            type: 'Plain T-shirts',
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
          },
          {
            id: 21,
            title: 'Polo T-shirt',
            url: 'assets/img/products/21.png',
            brand: "Polo's  Brand",
            price: 130.00,
            sex: 'm',
            type: 'Plain T-shirts',
            avaliableSizes: ['XXS', 'XL', 'S', ],
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
            id: 22,
            title: 'Kapa Train Costume',
            url: 'assets/img/products/22.png',
            brand: "KAPA's  Brand",
            price: 112.00,
            sex: 'm',
            type: 'Activewear',
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
          },
          {
            id: 23,
            title: 'Pink Boxers',
            url: 'assets/img/products/23.png',
            brand: "Sise's  Brand",
            price: 50.00,
            sex: 'm',
            type: 'Boxers',
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
            dressStyle: 'Business'
          },
          {
            id: 24,
            title: 'Brown T-shirt',
            url: 'assets/img/products/24.png',
            brand: "Red's  Brand",
            price: 60.00,
            sex: 'm',
            type: 'Plain T-shirts',
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
            dressStyle: 'Business'
          },
          {
            id: 25,
            title: 'Blue shirt',
            url: 'assets/img/products/25.png',
            brand: "Red's  Brand",
            price: 70.00,
            sex: 'm',
            type: 'Jeans',
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
            dressStyle: 'Elegant'
          },
          {
            id: 26,
            title: 'Oversize Cotton Bomber',
            url: 'assets/img/products/26.png',
            brand: "Red's  Brand",
            price: 121.00,
            sex: 'm',
            type: 'Plain T-shirts',
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
            dressStyle: 'Formal (evening)'
          },
  ]
  sizes: string[] = [
    'XXS','XL','XS','S','M','L','XXL','3XL','4XL'
  ]
  colors: Color[] = [
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
          },
          {
            title: 'Orange',
            hex: '#F16F2B'
          },
          {
            title: 'Navy',
            hex: '#345EFF'
          },
          {
            title: 'White',
            hex: '#8A8989'
          },
          {
            title: 'Broom',
            hex: '#D67E3B'
          },
          {
            title: 'Green',
            hex: '#48BC4E'
          },
          {
            title: 'Yellow',
            hex: '#FDC761'
          },
          {
            title: 'Grey',
            hex: '#E4E5E8'
          },
          {
            title: 'Pink',
            hex: '#8A8989'
          },
          {
            title: 'Blue',
            hex: '#3FDEFF'
          },
  ]

  recomendedProducts: any = [
    this.productById(Math.floor(Math.random()* (13 - 1) + 1)),
    this.productById(Math.floor(Math.random()* (25 - 18) + 18)),
    this.productById(Math.floor(Math.random()* (13 - 1) + 1)),
    this.productById(Math.floor(Math.random()* (25 - 18) + 18))
  ]

  menTypes = [
    {
      img: 'assets/img/for-men/5.png',
      name: 'Activewear',
      codeName: 'Activewear'
    },
    {
      img: 'assets/img/for-men/4.png',
      name: 'Printed T-shirts',
      codeName: 'PrintedTShirts'
    },
    {
      img: 'assets/img/for-men/8.png',
      name: 'Plain T-shirt',
      codeName: 'PlainTShirts'
    },
    {
      img: 'assets/img/for-men/2.png',
      name: 'Jackets',
      codeName: 'Jackets'
    },
    {
      img: 'assets/img/for-men/7.png',
      name: 'Boxers',
      codeName: 'Boxers'
    },
    {
      img: 'assets/img/for-men/9.png',
      name: 'Full sleeve T-shirts',
      codeName: 'FullSleeveTShirts'
    },
    {
      img: 'assets/img/for-men/1.png',
      name: 'Joggers',
      codeName: 'Joggers'
    },
    {
      img: 'assets/img/for-men/6.png',
      name: 'Payjamas',
      codeName: 'Payjamas'
    },
    {
      img: 'assets/img/for-men/3.png',
      name: 'Jeans',
      codeName: 'Jeans'
    },
  ]

  womenTypes = [
    {
      img: 'assets/img/for-women/3.png',
      name: 'Tops',
      codeName: 'Tops'
    },
    {
      img: 'assets/img/for-women/4.png',
      name: 'Printed T-shirts',
      codeName: 'PrintedTShirts'
    },
    {
      img: 'assets/img/for-women/2.png',
      name: 'Plain T-shirts',
      codeName: 'PlainTShirts'
    },
    {
      img: 'assets/img/for-women/1.png',
      name: 'Kurti',
      codeName: 'Kurti'
    },
    {
      name: 'Boxers',
      codeName: 'Boxers'
    },
    {
      name: 'Full sleeve T-shirts',
      codeName: 'FullSleeveTShirts'
    },
    {
      name: 'Joggers',
      codeName: 'Joggers'
    },
    {
      name: 'Payjamas',
      codeName: 'Payjamas'
    },

    {
      name: 'Jeans',
      codeName: 'Jeans'
    },
  ]


  dressStyles = [
    'Classic',
    'Casual',
    'Business',
    'Sport',
    'Elegant',
    'Formal'
  ]

  limelight: Product[] = [
    this.productById(5),
    this.productById(12),
    this.productById(6),
    this.productById(24)
  ]

  textShortner(str: string): string {
    if (str.length > 13){
      return str.slice(0,13) + '...'
    } else {
      return str
    }
  }



  productById(id: number): Product{
    let findedProduct = this.femaleProducts.find(product => product.id === id)
    
    if (findedProduct === undefined){
      findedProduct = this.maleProducts.find(product => product.id === id)
    }

    if (findedProduct === undefined){
      console.error('product not found', 404)
      return {
        id: null,
        title: '',
        url: '',
        brand:'',
        price: 0, 
        sex: '',
        type:'',
        avaliableSizes: [''],
        avaliableColors: [{title: '', hex: ''}],
        dressStyle: ''
      }
    } else {
      return findedProduct
    }
  }
}

export interface Product{
  id:number | null
  title:string
  url:string
  brand:string
  price:number
  sex: string
  type: string
  avaliableSizes: string[]
  avaliableColors: Color[]
  dressStyle: string
}

export interface Color{
  title:string
  hex:string
}


