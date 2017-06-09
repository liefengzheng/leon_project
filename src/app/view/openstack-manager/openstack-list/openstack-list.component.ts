import { Component, OnInit, OnDestroy } from '@angular/core';
import {OpenStackItem, OpenStackInstance} from '../../../model/openstack.container';
import {PageInfo} from '../../../model/common.container';
import {OpenstackService} from '../openstack.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
    selector: 'openstack-list',
    templateUrl: 'openstack-list.component.html'
})
export class OpenstackListComponent implements OnInit,OnDestroy{

    constructor(private openstackService: OpenstackService,
                private router: Router,
                private activatedRoute: ActivatedRoute){}

    instanceId : String = "";
    openstackIns: OpenStackInstance[] = [];
    openstackItems: OpenStackItem[] = [];
    pageInfo: PageInfo = new PageInfo();

    ngOnDestroy(): void {
    }
    ngOnInit(): void {
        this.getOpenstackList();
        this.openstackService.getOpenstackIns().then(res => {
            this.openstackIns = res;
        });
    }

    goCreateOpenstackPage(): void{
        this.router.navigate(['../create'],{relativeTo:this.activatedRoute,skipLocationChange:true});
    }

    getOpenstackList(): void{
        this.openstackService.getOpenstackItems().then(res=>{
            this.openstackItems = res;
        });
        this.pageInfo.currentPage = 1;
        this.pageInfo.pageSize = 7;
        this.pageInfo.totalPage = 1;
        this.pageInfo.totalRecords = 2;
        this.pageInfo.currentFirstRecordNumber = (this.pageInfo.currentPage-1)*this.pageInfo.pageSize+1;
        this.pageInfo.currentLastRecordNumber = Math.min(this.pageInfo.currentPage*this.pageInfo.pageSize,this.pageInfo.totalRecords)

    }

    pageChange(event) {
        this.pageInfo.currentPage = event.page;
        this.getOpenstackList();
    }
}
