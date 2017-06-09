import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {PipeModule} from './pipe/pipe.module';
import { ModalModule, PaginationModule,TooltipModule} from 'ng2-bootstrap';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PipeModule,
    PaginationModule,
    TooltipModule
  ],
  providers: []
})
export class SharedModule { }
