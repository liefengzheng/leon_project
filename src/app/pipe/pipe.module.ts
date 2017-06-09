import {NgModule} from '@angular/core';
import {FMenuPipe} from './menu/fmenu.pipe'

@NgModule({
    declarations: [FMenuPipe],
    exports: [FMenuPipe]
})

export class PipeModule{}