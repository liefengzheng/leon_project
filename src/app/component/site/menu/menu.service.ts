import { Injectable } from '@angular/core';
import { Menu } from './menu.bean'

@Injectable()
export class MenuService {
    private hardcodingMenu = {
        levelOneMenus: [
            {
                name: 'IAAS',
                isOpen: true,
                iconClass: 'fa-cubes',
                show:true,
                levelTwoMenus:[
                    {
                        name: 'OPENSTACK',
                        link: 'openstack/list',
                        show: true       
                    },
                    {
                        name: 'VMWARE',
                        link: 'vmware/list',
                        show: true                        
                    }
                ]
            },
            {
                name: 'CAAS',
                isOpen: false,
                iconClass: 'fa-cubes',
                show: true,
                levelTwoMenus: [
                    {
                        name: 'KUBERNETES',
                        link: 'kubernetes/list',
                        show: true                        
                    },
                    {
                        name: 'MARATHON',
                        link: 'marathon/list',
                        show: true                        
                    },
                    {
                        name: 'DOCKER SWARM',
                        link: 'swarm/list',
                        show: true                        
                    }
                ]
            }
        ]
    };

    getMenu(): Menu {
        return <Menu> this.hardcodingMenu;
    };

}