import {NgModule} from '@angular/core'
import {RouterModule,Routes} from '@angular/router'
import {VmwareListComponent} from './vmware-list/vmware-list.component'
import {VmwareCreateComponent} from './vmware-create/vmware-create.component'

const routes:Routes =[{
    path:'',
    children:[{
        path:'list',
        component:VmwareListComponent
    },
    {
        path:'create',
        component:VmwareCreateComponent
    }]
}];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    declarations:[],
    exports:[]
})

export class VmwareRoutingModule{
}