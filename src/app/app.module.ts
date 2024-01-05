import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {firstPageComponent} from './website/first-page/first-page.component';
import { HomeComponent } from './website/home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './website/list/list.component';
import { ProductService } from './product-service.service';
import { ProductComponent } from './website/product/product.component';
import { SignInComponent } from './website/first-page/sign-in/sign-in.component';
import { SignUpComponent } from './website/first-page/sign-up/sign-up.component';
import { ResetPasswordComponent } from './website/first-page/reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartPageComponent } from './website/cart-page/cart-page.component';
import { NotFoundComponent } from './special pages/not-found/not-found.component';
import { EmptyCartComponent } from './special pages/empty-cart/empty-cart.component';
import { CheckoutComponent } from './website/checkout/checkout.component';
import { UserService } from './user-service.service';
import { UserPageComponent } from './website/user-page/user-page.component';
import { MyInfoComponent } from './website/user-page/my-info/my-info.component';
import { AddAddressComponent } from './website/user-page/add-address/add-address.component';
import { OrderConfirmedComponent } from './special pages/order-confirmed/order-confirmed.component';
import { WishlistComponent } from './website/user-page/wishlist/wishlist.component';
import { MyOrderComponent } from './website/user-page/my-order/my-order.component';
import { OrderDetailsComponent } from './website/user-page/my-order/order-details/order-details.component';
import { LikeProductComponent } from './like-product/like-product.component';

@NgModule({
  declarations: [
    AppComponent,
    firstPageComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ListComponent,
    ProductComponent,
    SignInComponent,
    SignUpComponent,
    ResetPasswordComponent,
    CartPageComponent,
    NotFoundComponent,
    EmptyCartComponent,
    CheckoutComponent,
    UserPageComponent,
    MyInfoComponent,
    AddAddressComponent,
    OrderConfirmedComponent,
    WishlistComponent,
    MyOrderComponent,
    OrderDetailsComponent,
    LikeProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
