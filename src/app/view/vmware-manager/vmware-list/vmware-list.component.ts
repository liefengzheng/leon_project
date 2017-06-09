import { Component, OnInit, OnDestroy } from '@angular/core';
import {VmwareItem, VmwareInstance} from '../../../model/vmware.container';
import {VmwareService} from '../vmware.service';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
    templateUrl: 'vmware-list.component.html'
})
export class VmwareListComponent implements OnInit,OnDestroy{

    constructor(private vmwareService: VmwareService,
                private router: Router,
                private activatedRoute: ActivatedRoute){}

    vmwareIns: VmwareInstance[] = [];
    ngOnDestroy(): void {
    }
    ngOnInit(): void {
        this.vmwareService.getVmwareIns().then(res => {
            this.vmwareIns = res;
        });
    }

    goCreateVmwarePage(): void{
        this.router.navigate(['../create'],{relativeTo:this.activatedRoute,skipLocationChange:true});
    }
}
