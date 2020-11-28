import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './home/category/add-category/add-category.component';
import { AddDeliveryBoysComponent } from './home/delivery-boys/add-delivery-boys/add-delivery-boys.component';
import { DeliveryBoysComponent } from './home/delivery-boys/delivery-boys.component';
import { AddGeneralMenuComponent } from './home/general-menu/add-general-menu/add-general-menu.component';
import { GeneralMenuComponent } from './home/general-menu/general-menu.component';
import { AddGeneralShopMenuComponent } from './home/general-shop-menu/add-general-shop-menu/add-general-shop-menu.component';
import { GeneralShopMenuComponent } from './home/general-shop-menu/general-shop-menu.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './home/orders/orders.component';
import { AddPincodesComponent } from './home/pincodes/add-pincodes/add-pincodes.component';
import { PincodesComponent } from './home/pincodes/pincodes.component';
import { AddRestaurantMenuComponent } from './home/restaurant-menu/add-restaurant-menu/add-restaurant-menu.component';
import { RestaurantMenuComponent } from './home/restaurant-menu/restaurant-menu.component';
import { AddShopMenuComponent } from './home/shop-menu/add-shop-menu/add-shop-menu.component';
import { ShopMenuComponent } from './home/shop-menu/shop-menu.component';
import { AddShopComponent } from './home/shop/add-shop/add-shop.component';
import { ShopComponent } from './home/shop/shop.component';
import { UsersComponent } from './home/users/users.component';
import { LoginComponent } from './login/login.component';
import { AddOffersComponent } from './offers/add-offers/add-offers.component';
import { OffersComponent } from './offers/offers.component';
import { DeliveryComponent } from './reports/delivery/delivery.component';
import { PurchaseComponent } from './reports/purchase/purchase.component';
import { ReportsComponent } from './reports/reports.component';
import { SalesComponent } from './reports/sales/sales.component';
import { AddSettingsComponent } from './settings/add-settings/add-settings.component';
import { MasteradminphonenumberComponent } from './settings/masteradminphonenumber/masteradminphonenumber.component';
import { SettingsComponent } from './settings/settings.component';
import { WalletpointsComponent } from './settings/walletpoints/walletpoints.component';

const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:"home"},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'addcategory',component:AddCategoryComponent},
  {path:'shop',component:ShopComponent},
  {path:'addshop',component:AddShopComponent},
  {path:'restaurantmenu',component:RestaurantMenuComponent},
  {path:'addrestaurantmenu',component:AddRestaurantMenuComponent},
  {path:'shopmenu',component:ShopMenuComponent},
  {path:'addshopmenu',component:AddShopMenuComponent},
  {path:'pincodes',component:PincodesComponent},
  {path:'orders',component:OrdersComponent},
  {path:'deliveryboys',component:DeliveryBoysComponent},
  {path:'users',component:UsersComponent},
  {path:'addpincodes',component:AddPincodesComponent},
  {path:'adddeliveryboys',component:AddDeliveryBoysComponent},
  {path:'generalmenu',component:GeneralMenuComponent},
  {path:'generalshopmenu',component:GeneralShopMenuComponent},
  {path:'addgeneralmenu',component:AddGeneralMenuComponent},
  {path:'addgeneralshopmenu',component:AddGeneralShopMenuComponent},
  {path:'offers',component:OffersComponent},
  {path:'addoffers',component:AddOffersComponent},
  {path:'settings',component:SettingsComponent},
  {path:'addsettings',component:AddSettingsComponent},
  {path:'masteradminphonenumber',component:MasteradminphonenumberComponent},
  {path:'walletpoints',component:WalletpointsComponent},
  {path:'reports',component:ReportsComponent},
  {path:'sales',component:SalesComponent},
  {path:'purchase',component:PurchaseComponent},
  {path:'delivery',component:DeliveryComponent},


 

 

  





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
