import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from './component/site/header/header.component';
import {MenuComponent} from './component/site/menu/menu.component';
import {AppRoutingModule} from './app.routing';
import { MenuService } from './component/site/menu/menu.service';

import {PipeModule} from './pipe/pipe.module';
import {OpenstackModule} from './view/openstack-manager/openstack.module';

// import {VmwareModule} from './view/vmware-manager/vmware.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PipeModule,
    AppRoutingModule,
    OpenstackModule
    
    // VmwareModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
