import {NgModule} from "@angular/core"
import {VmwareRoutingModule} from "./vmware-routing.module"
import {VmwareService} from "./vmware.service"
import {VmwareCreateComponent} from "./vmware-create/vmware-create.component"
import {VmwareListComponent} from "./vmware-list/vmware-list.component"
// import {FormsModule} from "@angular/forms"
import {CommonModule} from "@angular/common"

@NgModule({
    imports:[VmwareRoutingModule,CommonModule],
    declarations:[VmwareCreateComponent,VmwareListComponent],
    providers:[VmwareService]
})

export class VmwareModule{
    
}