import { Routes, RouterModule } from '@angular/router';
// Front Desk block

import { FrontdeskComponent } from '../views/frontdesk/frontdesk.component';
// configure block
import { ConfigureComponent } from '../views/configure/configure.component';

import { UsersComponent } from '../views/configure/users/users.component';
import { PropertyComponent } from '../views/configure/property/property.component';
import { ProductsComponent } from '../views/configure/products/products.component';
import { RatesanddiscountComponent } from '../views/configure/ratesanddiscount/ratesanddiscount.component';
import { CrmprofilesComponent } from '../views/configure/crmprofiles/crmprofiles.component';
import { AccessComponent } from '../views/configure/access/access.component';
import { BillingaccountComponent } from '../views/configure/billingaccount/billingaccount.component';
import { OnlinepaymentsComponent } from '../views/configure/onlinepayments/onlinepayments.component';
import { ListusersComponent } from '../views/configure/users/listusers/listusers.component';
import { CreateuserComponent } from '../views/configure/users/createuser/createuser.component';
import { RoomtypesComponent } from '../views/configure/products/roomtypes/roomtypes.component';
import { ViewpropertyComponent } from '../views/configure/property/viewproperty/viewproperty.component';
import { EditpropertyComponent } from '../views/configure/property/editproperty/editproperty.component';
import { UploadimageComponent } from '../views/configure/property/uploadimage/uploadimage.component';
import { EditimagesComponent } from '../views/configure/property/editimages/editimages.component';
import { RoomlistComponent } from '../views/configure/property/roomlist/roomlist.component';



export const routes: Routes = [
  { path: '', redirectTo: 'app-frontdesk', pathMatch: 'full' },
  { path: 'app-configure', component: ConfigureComponent,
    children: [
      { path: '', redirectTo: 'app-users', pathMatch: 'full' },
      { path: 'app-users', component: UsersComponent,
      children: [
      { path: '', redirectTo: 'app-createuser', pathMatch: 'full' },
      { path: 'app-createuser', component: CreateuserComponent },
      { path: 'app-listusers', component: ListusersComponent}

      ],
       },
      { path: 'app-property', component: PropertyComponent,
      children: [
      { path: '', redirectTo: 'app-viewproperty', pathMatch: 'full' },
      { path: 'app-viewproperty', component: ViewpropertyComponent },
      { path: 'app-editproperty', component: EditpropertyComponent },
      { path: 'app-roomlist', component: RoomlistComponent },
      { path: 'app-uploadimage', component: UploadimageComponent },
      { path: 'app-editimages', component: EditimagesComponent }
      ],
      },
      { path: 'app-products', component: ProductsComponent,
            children: [
      { path: '', redirectTo: 'app-viewroomtypes', pathMatch: 'full' },
      { path: 'app-viewroomtypes', component: RoomtypesComponent }
     // { path: 'app-createroomtyes', component: ListusersComponent}

      ],
            },
      { path: 'app-ratesanddiscount', component: RatesanddiscountComponent },
      { path: 'app-crmprofiles', component: CrmprofilesComponent },
      { path: 'app-access', component: AccessComponent },
      { path: 'app-billingaccount', component: BillingaccountComponent },
      { path: 'app-onlinepayments', component: OnlinepaymentsComponent }
    ]
  },
  { path: 'app-frontdesk', component: FrontdeskComponent,
    children: [
      // { path: '', redirectTo: 'app-indiprofile', pathMatch: 'full' },
    ]
  }
];
export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
