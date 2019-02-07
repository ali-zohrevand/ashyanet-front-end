import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './auth/login/login.component';
import {PanelComponent} from './panel/panel.component';
import {CreateDeviceComponent} from './panel/pagecontent/devices/create-device/create-device.component';
import {RecoveryComponent} from './auth/recovery/recovery.component';
import {RegisterComponent} from './auth/register/register.component';
import {MessageComponent} from './message/message.component';
import {DeviceComponent} from './panel/pagecontent/devices/device/device.component';
import {DeviceMainComponent} from './panel/pagecontent/devices/device-main/device-main.component';
import {LocationsMainComponent} from './panel/pagecontent/locations/locations-main/locations-main.component';
import {LocationCreateComponent} from './panel/pagecontent/locations/location-create/location-create.component';
import {LocationComponent} from './panel/pagecontent/locations/location/location.component';
import {TypesMainComponent} from './panel/pagecontent/types/types-main/types-main.component';
import {TypeCreateComponent} from './panel/pagecontent/types/type-create/type-create.component';
import {TypeComponent} from './panel/pagecontent/types/type/type.component';
import {DeviceListComponent} from './panel/pagecontent/devices/device-list/device-list.component';
import {TypeListComponent} from './panel/pagecontent/types/type-list/type-list.component';
import {LocationsListComponent} from './panel/pagecontent/locations/locations-list/locations-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/panel', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'recover', component: RecoveryComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'message', component: MessageComponent},
  {
    path: 'panel', component: PanelComponent, children: [
      {
        path: 'devices', component: DeviceMainComponent, children: [
          {path: '', component: DeviceListComponent},
          {path: 'create', component: CreateDeviceComponent},
          {
            path: 'types', component: TypesMainComponent, children: [
              {path: '', component: TypeListComponent},
              {path: 'create', component: TypeCreateComponent},
              {path: ':id', component: TypeComponent}
            ]
          },
          {path: ':id', component: DeviceComponent}
        ]   },
      {
        path: 'locations', component: LocationsMainComponent, children: [
          { path: '', component: LocationsListComponent},
          {path: 'create', component: LocationCreateComponent },
          {path: ':id' , component: LocationComponent}
        ]
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRout {

}
