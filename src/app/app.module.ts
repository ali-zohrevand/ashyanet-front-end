import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TopNavigationComponent} from './top-navigation/top-navigation.component';
import {FooterComponent} from './footer/footer.component';
import {PagecontentComponent} from './pagecontent/pagecontent.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ProfileInfoComponent} from './sidebar/profile-info/profile-info.component';
import {LogoComponent} from './sidebar/logo/logo.component';
import {SidebarMenuComponent} from './sidebar/sidebar-menu/sidebar-menu.component';
import {SidebarFooterComponent} from './sidebar/sidebar-footer/sidebar-footer.component';
import {MenuSectionComponent} from './sidebar/sidebar-menu/menu-section/menu-section.component';
import {LoginComponent} from './login/login.component';
import {PanelComponent} from './panel/panel.component';
import {AppRout} from './routes';
import {APP_BASE_HREF} from '@angular/common';
import {CreateDeviceComponent} from './pagecontent/devices/create-device/create-device.component';

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
    CreateDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRout
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
  , bootstrap: [AppComponent]
})
export class AppModule { }
