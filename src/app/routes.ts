import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {PanelComponent} from './panel/panel.component';
import {CreateDeviceComponent} from './pagecontent/devices/create-device/create-device.component';

const routes: Routes = [
  {path: '', redirectTo: '/panel', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
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
