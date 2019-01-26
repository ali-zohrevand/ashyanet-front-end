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
import {FormsModule} from '@angular/forms';
import {UpdateDeviceComponent} from './panel/pagecontent/devices/update-device/update-device.component';
import {DeviceMainComponent} from './panel/pagecontent/devices/device-main/device-main.component';

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
    UpdateDeviceComponent,
    DeviceMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRout,
    FormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
  , bootstrap: [AppComponent]
})
export class AppModule { }
