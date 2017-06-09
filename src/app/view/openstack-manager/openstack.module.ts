import {NgModule} from "@angular/core"
import {OpenstackRoutingModule} from "./openstack-routing.module"
import {OpenstackService} from "./openstack.service"
import {OpenstackCreateComponent} from "./openstack-create/openstack-create.component"
import {OpenstackListComponent} from "./openstack-list/openstack-list.component"
import {FormsModule} from "@angular/forms"
import {CommonModule} from "@angular/common"
import {PaginationModule} from 'ng2-bootstrap';

@NgModule({
    imports:[OpenstackRoutingModule,CommonModule,FormsModule,PaginationModule.forRoot()],
    declarations:[OpenstackCreateComponent,OpenstackListComponent],
    providers:[OpenstackService]
})

export class OpenstackModule{
    
}