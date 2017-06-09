import {NgModule} from '@angular/core'
import {RouterModule,Routes} from '@angular/router'
import {OpenstackListComponent} from './openstack-list/openstack-list.component'
import {OpenstackCreateComponent} from './openstack-create/openstack-create.component'

const routes:Routes =[{
    path:'',
    children:[{
        path:'list',
        component:OpenstackListComponent
    },
    {
        path:'create',
        component:OpenstackCreateComponent
    }]
}];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    declarations:[],
    exports:[]
})

export class OpenstackRoutingModule{
}