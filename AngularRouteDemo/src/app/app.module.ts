import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './routers/routes';
import {DataTableModule} from 'angular2-datatable';

import { AppComponent } from './app.component';
import { ConfigureComponent } from './views/configure/configure.component';
import { FrontdeskComponent } from './views/frontdesk/frontdesk.component';
import { UsersComponent } from './views/configure/users/users.component';
import { PropertyComponent } from './views/configure/property/property.component';
import { IndiprofileComponent } from './views/frontdesk/indiprofile/indiprofile.component';
import { NonindiprofileComponent } from './views/frontdesk/nonindiprofile/nonindiprofile.component';
import { ProductsComponent } from './views/configure/products/products.component';
import { RatesanddiscountComponent } from './views/configure/ratesanddiscount/ratesanddiscount.component';
import { CrmprofilesComponent } from './views/configure/crmprofiles/crmprofiles.component';
import { AccessComponent } from './views/configure/access/access.component';
import { BillingaccountComponent } from './views/configure/billingaccount/billingaccount.component';
import { OnlinepaymentsComponent } from './views/configure/onlinepayments/onlinepayments.component';
import { ListusersComponent } from './views/configure/users/listusers/listusers.component';
import { CreateuserComponent } from './views/configure/users/createuser/createuser.component';
import { RoomtypesComponent } from './views/configure/products/roomtypes/roomtypes.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigureComponent,
    FrontdeskComponent,
    UsersComponent,
    PropertyComponent,
    IndiprofileComponent,
    NonindiprofileComponent,
    ProductsComponent,
    RatesanddiscountComponent,
    CrmprofilesComponent,
    AccessComponent,
    BillingaccountComponent,
    OnlinepaymentsComponent,
    ListusersComponent,
    CreateuserComponent,
    RoomtypesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    DataTableModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
