import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './auth/login/login.component';
import {PanelComponent} from './panel/panel.component';
import {CreateDeviceComponent} from './panel/pagecontent/devices/create-device/create-device.component';
import {RecoveryComponent} from './auth/recovery/recovery.component';
import {RegisterComponent} from './auth/register/register.component';
import {MessageComponent} from './message/message.component';

const routes: Routes = [
  {path: '', redirectTo: '/panel', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'recover', component: RecoveryComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'message', component: MessageComponent},
  {
    path: 'panel', component: PanelComponent, children: [
      {path: 'create-device', component: CreateDeviceComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRout {

}
