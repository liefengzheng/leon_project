import {Injectable} from '@angular/core';
import {VmwareItem,VmwareInstance} from '../../model/vmware.container';
import {RESTURI} from '../../model/resturi';

@Injectable()
export class VmwareService{
    mockdata: {[url:string] : any} ={};
    constructor(){
        this.mockdata[RESTURI.VMWARE.VMWAREINSLIST] = [
            {
                instanceId: 'v1',
                instanceName: 'london'
            },
            {
                instanceId: 'v2',
                instanceName: 'lasvegas'
            }
        ];
        this.mockdata[RESTURI.VMWARE.VMWAREITEMLIST] = [
            {
                vmwareId: 'uuid-001',
                vmwareName: 'london-v1',
                vmwareInsType: 'london',
                vmwareAddr: '192.168.1.5',
                vmwareSpace: 'CPU:5G,Memory:100T',
                accessMode: 'ReadOnly',
                accessUserName: 'Anonymous',
                accessPWD: '******'
            },
            {
                vmwareId: 'uuid-002',
                vmwareName: 'lasvegas-v2',
                vmwareInsType: 'lasvegas',
                vmwareAddr: '192.168.10.5',
                vmwareSpace: 'CPU:5G,Memory:100T',
                accessMode: 'ReadOnly',
                accessUserName: 'Anonymous',
                accessPWD: '******'
            }
        ];
    }

    getVmwareIns():Promise<VmwareInstance[]>{
        return this.doGet<VmwareInstance[]>(RESTURI.VMWARE.VMWAREINSLIST);
    }

    doGet<T>(uri:string, placeholder?:object):Promise<T>{
        return new Promise<T>(resolve => {
            resolve(this.mockdata[uri] as T);
        });
    }
}