//needed to declare routing modules
import { NgModule } from '@angular/core';
//the routes is used to create route configuration
//RouterModule needs to be imported by every routing module
import { Routes, RouterModule} from '@angular/router';

// define router rules
const routes: Routes=[
  {path:'',pathMatch:'full',redirectTo:'openstack'},
  {path:'openstack',loadChildren:'app/view/openstack-manager/openstack.module#OpenstackModule'},
  {path:'vmware',loadChildren:'app/view/vmware-manager/vmware.module#VmwareModule'}
];

@NgModule({
  imports: [
    //The forRoot method call is placed inside the imports array
    //only be used 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
