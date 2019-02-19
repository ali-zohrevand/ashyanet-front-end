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
import {LoginGaurd} from './services/guard/login-gaurd.service';
import {LogoutComponent} from './auth/logout/logout.component';
import {MainComponent} from './panel/pagecontent/main/main.component';
import {resolve} from 'q';
import {DeviceResolve} from './models/device/device-resolve';
import {TypesResolve} from './models/Types/types-resolve';
import {LocationsResolve} from './models/Locations/locations-resolve';
import {ShowDataComponent} from './panel/pagecontent/Data/MainData/router-component/show-data.component';
import {ListTopicComponent} from './panel/pagecontent/Data/Mqtt/list-topic/list-topic.component';
import {MainMqttComponent} from './panel/pagecontent/Data/Mqtt/main-mqtt/main-mqtt.component';
import {TopicSubComponent} from './panel/pagecontent/Data/Mqtt/topic-sub/topic-sub.component';
import {MainPageDataComponent} from './panel/pagecontent/Data/MainData/main-page-data/main-page-data.component';
import {TopicSubResolve} from './models/Data/mqtt/topic-sub-resolve';
import {EventRouterComponent} from './panel/pagecontent/Event/event-router/event-router.component';
import {EventMainComponent} from './panel/pagecontent/Event/event-main/event-main.component';
import {EventListComponent} from './panel/pagecontent/Event/event-list/event-list.component';
import {EventCreateComponent} from './panel/pagecontent/Event/event-create/event-create.component';
import {WizardFormComponent} from './Lab/WizardForm/wizard-form/wizard-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/panel', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'recover', component: RecoveryComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'message', component: MessageComponent},
  {path: 'logout', component: LogoutComponent},

  {
    path: 'panel', component: PanelComponent , canActivate : [LoginGaurd], children: [
      {path: '', component: MainComponent},
      {
        path: 'devices', component: DeviceMainComponent, children: [
          {path: '', component: DeviceListComponent , resolve: {devicesList: DeviceResolve}},
          {path: 'create', component: CreateDeviceComponent},
          {
            path: 'types', component: TypesMainComponent, children: [
              {path: '', component: TypeListComponent, resolve: {types: TypesResolve}},
              {path: 'create', component: TypeCreateComponent},
              {path: ':id', component: TypeComponent}
            ]
          },
          {path: ':id', component: DeviceComponent}
        ]   },
      {
        path: 'locations', component: LocationsMainComponent, children: [
          { path: '', component: LocationsListComponent,  resolve: {locations: LocationsResolve}},
          {path: 'create', component: LocationCreateComponent },
          {path: ':id' , component: LocationComponent}
        ]
      },
      {path: 'data', component: ShowDataComponent , children: [
          {path: '', component: MainPageDataComponent},
          {path: 'mqtt', component: MainMqttComponent , children: [
              { path: '' , component: ListTopicComponent },
              { path: ':topic' , component: TopicSubComponent, resolve: {messages: TopicSubResolve}}
            ] }
        ]},
      {path: 'event' , component: EventRouterComponent , children: [
          {path: '', component: EventMainComponent},
          {path: 'list' , component: EventListComponent},
          {path: 'create', component: EventCreateComponent}
        ]},
      {path: 'lab', component: WizardFormComponent}


    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRout {

}
