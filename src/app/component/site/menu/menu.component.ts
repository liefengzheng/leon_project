import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd} from '@angular/router';

import { Menu, LevelOneMenu, LevelTwoMenu} from './menu.bean';
import { MenuService } from './menu.service'

@Component({
    selector: 'leon-menu',
    templateUrl: 'menu.component.html',
    providers: [MenuService]
})

export class MenuComponent implements OnInit{

    constructor(
        private menuService: MenuService,
        private router: Router,
        private location: Location,
        private activatedRoute: ActivatedRoute
    ){}

    @Output("onClickChildMenu")
    onClickChildMenu = new EventEmitter<any>();

    menu: Menu = new Menu();
    curNavLink: String = null;
    locationPath = this.location.path();

    ngOnInit(): void {
        this.menu = this.menuService.getMenu();
        this.router.events.subscribe(obj=>{
            if (obj instanceof NavigationEnd){
                let urlAfterRedirects = obj.urlAfterRedirects;
                let childMenu: LevelTwoMenu;
                let rootMenu = this.menu.levelOneMenus.find(value=>{
                    return value.levelTwoMenus.find(lTwoMenu => {
                        if (urlAfterRedirects.indexOf(lTwoMenu.link) > -1){
                            childMenu = lTwoMenu;
                            return true;
                        }
                    }) != null;
                });

                if (rootMenu != null){
                    rootMenu.isOpen = true;
                    let eventParam = {'rootMenu':rootMenu.name,'childMenu':childMenu.name,'link':childMenu.link};
                    this.onClickChildMenu.emit(eventParam);
                }
            }
        });
    }

    levelOneMenuClick(levelOneMenu: LevelOneMenu){
        if (levelOneMenu.isOpen){
            levelOneMenu.isOpen = false;
        }else{
            this.menu.levelOneMenus.forEach((obj,pos)=>{
                this.menu.levelOneMenus[pos].isOpen = false;
            })
            levelOneMenu.isOpen = true;
        }
    }

    isSelected(childMenuLink){
        return this.location.isCurrentPathEqualTo(childMenuLink);
    }
}
