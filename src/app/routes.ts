import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './auth/login/login.component';
import {PanelComponent} from './panel/panel.component';
import {CreateDeviceComponent} from './panel/pagecontent/devices/create-device/create-device.component';
import {RecoveryComponent} from './auth/recovery/recovery.component';
import {RegisterComponent} from './auth/register/register.component';
import {MessageComponent} from './message/message.component';
import {UpdateDeviceComponent} from './panel/pagecontent/devices/update-device/update-device.component';
import {DeviceMainComponent} from './panel/pagecontent/devices/device-main/device-main.component';

const routes: Routes = [
  {path: '', redirectTo: '/panel', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'recover', component: RecoveryComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'message', component: MessageComponent},
  {
    path: 'panel', component: PanelComponent, children: [
      {
        path: 'device', component: DeviceMainComponent, children: [
          {path: 'create', component: CreateDeviceComponent},
          {path: ':id', component: UpdateDeviceComponent}
        ]   },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRout {

}
