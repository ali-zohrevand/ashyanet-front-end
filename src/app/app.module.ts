import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TopNavigationComponent} from './top-navigation/top-navigation.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ProfileInfoComponent} from './sidebar/profile-info/profile-info.component';
import {LogoComponent} from './sidebar/logo/logo.component';
import {SidebarMenuComponent} from './sidebar/sidebar-menu/sidebar-menu.component';
import {SidebarFooterComponent} from './sidebar/sidebar-footer/sidebar-footer.component';
import {MenuSectionComponent} from './sidebar/sidebar-menu/menu-section/menu-section.component';
import {LoginComponent} from './auth/login/login.component';
import {PanelComponent} from './panel/panel.component';
import {AppRout} from './routes';
import {APP_BASE_HREF} from '@angular/common';
import {RegisterComponent} from './auth/register/register.component';
import {RecoveryComponent} from './auth/recovery/recovery.component';
import {MessageComponent} from './message/message.component';
import {PagecontentComponent} from './panel/pagecontent/pagecontent.component';
import {CreateDeviceComponent} from './panel/pagecontent/devices/create-device/create-device.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DeviceComponent} from './panel/pagecontent/devices/device/device.component';
import {DeviceMainComponent} from './panel/pagecontent/devices/device-main/device-main.component';
import { DeviceListComponent } from './panel/pagecontent/devices/device-list/device-list.component';
import { TypesMainComponent } from './panel/pagecontent/types/types-main/types-main.component';
import { LocationsMainComponent } from './panel/pagecontent/locations/locations-main/locations-main.component';
import { LocationCreateComponent } from './panel/pagecontent/locations/location-create/location-create.component';
import { TypeCreateComponent } from './panel/pagecontent/types/type-create/type-create.component';
import { TypeComponent } from './panel/pagecontent/types/type/type.component';
import { LocationComponent } from './panel/pagecontent/locations/location/location.component';
import { LocationsListComponent } from './panel/pagecontent/locations/locations-list/locations-list.component';
import { TypeListComponent } from './panel/pagecontent/types/type-list/type-list.component';
import {ErrorInterceptor} from './services/Interceptors/error-interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './services/Interceptors/auth-interceptor';
import { LogoutComponent } from './auth/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    FooterComponent,
    PagecontentComponent,
    SidebarComponent,
    ProfileInfoComponent,
    LogoComponent,
    SidebarMenuComponent,
    SidebarFooterComponent,
    MenuSectionComponent,
    LoginComponent,
    PanelComponent,
    CreateDeviceComponent,
    RegisterComponent,
    RecoveryComponent,
    MessageComponent,
    DeviceComponent,
    DeviceMainComponent,
    DeviceListComponent,
    TypesMainComponent,
    LocationsMainComponent,
    LocationCreateComponent,
    TypeCreateComponent,
    TypeComponent,
    LocationComponent,
    LocationsListComponent,
    TypeListComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRout,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ]
  , bootstrap: [AppComponent]
})
export class AppModule { }
