import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { firstPageComponent } from './website/first-page/first-page.component'
import { HomeComponent } from './website/home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './website/list/list.component';
import { ProductComponent } from './website/product/product.component';
import { SignInComponent } from './website/first-page/sign-in/sign-in.component';
import { SignUpComponent } from './website/first-page/sign-up/sign-up.component';
import { ResetPasswordComponent } from './website/first-page/reset-password/reset-password.component';
import { CartPageComponent } from './website/cart-page/cart-page.component';
import { NotFoundComponent } from './special pages/not-found/not-found.component';
import { EmptyCartComponent } from './special pages/empty-cart/empty-cart.component';
import { AuthGuard } from './auth.guard';
import { CheckoutComponent } from './website/checkout/checkout.component';
import { UserPageComponent } from './website/user-page/user-page.component';
import { MyInfoComponent } from './website/user-page/my-info/my-info.component';
import { AddAddressComponent } from './website/user-page/add-address/add-address.component';
import { OrderConfirmedComponent } from './special pages/order-confirmed/order-confirmed.component';
import { WishlistComponent } from './website/user-page/wishlist/wishlist.component';
import { MyOrderComponent } from './website/user-page/my-order/my-order.component';
import { OrderDetailsComponent } from './website/user-page/my-order/order-details/order-details.component';

const routes: Routes = [
  { 
    path: '', 
    component: firstPageComponent,
    children: [
      {path: '', component: SignInComponent },
      {path: 'sign_up', component: SignUpComponent },
      {path: 'reset_password', component: ResetPasswordComponent }
    ],
  },
  {
    path: 'notfound404',
    component: NotFoundComponent,
  },
  {
    path: 'emptycart',
    component: EmptyCartComponent,
    // canActivate: [AuthGuard],
  },
  { 
    path: 'shop', 
    component: HomeComponent, 
    // canActivate: [AuthGuard],
  },
  {
    path: 'products/men',
    component: ListComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'products/women',
    component: ListComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'products/women/product/:id', 
    component: ProductComponent,
    // canActivate: [AuthGuard], 
  },
  {
    path: 'products/men/product/:id', 
    component: ProductComponent, 
    // canActivate: [AuthGuard],
  },
  {
    path: 'products/product/:id', 
    component: ProductComponent, 
  },
  {
    path: 'cart', 
    component: CartPageComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'cart/checkout', 
    component: CheckoutComponent,
  },
  {
    path: 'account',
    component: UserPageComponent,
    children: [
      {path: 'info', component: MyInfoComponent},
      {path: 'info/address', component: AddAddressComponent},
      {path: 'wishlist', component: WishlistComponent},
      {path: 'orders/active', component: MyOrderComponent},
      {path: 'order-details', component: OrderDetailsComponent}
    ]
  },
  {
    path: 'cart/confirmed',
    component: OrderConfirmedComponent
  },
  {
    path: '**', redirectTo: 'notfound404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
