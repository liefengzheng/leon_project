import {Injectable} from '@angular/core';
import {OpenStackItem,OpenStackInstance} from '../../model/openstack.container';
import {RESTURI} from '../../model/resturi';

@Injectable()
export class OpenstackService{
    mockdata: {[url:string] : any} ={};
    constructor(){
        this.mockdata[RESTURI.OPENSTACK.OPENSTACKINSLIST] = [
            {
                instanceId: 'v1',
                instanceName: 'london'
            },
            {
                instanceId: 'v2',
                instanceName: 'lasvegas'
            }
        ];
        this.mockdata[RESTURI.OPENSTACK.OPENSTACKITEMLIST] = [
            {
                openStackId: 'uuid-001',
                openStackName: 'london-v1',
                openStackInsType: 'london',
                openStackAddr: '192.168.1.5',
                openStackSpace: 'CPU:5G,Memory:100T',
                accessMode: 'ReadOnly',
                accessUserName: 'Anonymous',
                accessPWD: '******'
            },
            {
                openStackId: 'uuid-002',
                openStackName: 'lasvegas-v2',
                openStackInsType: 'lasvegas',
                openStackAddr: '192.168.10.5',
                openStackSpace: 'CPU:5G,Memory:100T',
                accessMode: 'ReadOnly',
                accessUserName: 'Anonymous',
                accessPWD: '******'
            }
        ];
    }

    getOpenstackIns():Promise<OpenStackInstance[]>{
        return this.doGet<OpenStackInstance[]>(RESTURI.OPENSTACK.OPENSTACKINSLIST);
    }

    getOpenstackItems(){
        return this.doGet<OpenStackItem[]>(RESTURI.OPENSTACK.OPENSTACKITEMLIST);
    }

    doGet<T>(uri:string, placeholder?:object):Promise<T>{
        return new Promise<T>(resolve => {
            resolve(this.mockdata[uri] as T);
        });
    }
}