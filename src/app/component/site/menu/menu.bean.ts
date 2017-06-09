export class Menu {
    levelOneMenus:  Array<LevelOneMenu> = [];
}

export class LevelOneMenu {
    name: string = null;
    type: number = null;
    isAccess: boolean = null;
    isOpen: boolean = false;
    iconClass: string = null;
    levelTwoMenus: Array<LevelTwoMenu> = [];
    show:boolean=null;
}

export class LevelTwoMenu {
    name: string = null;
    type: number = null;
    isAccess: boolean = null;
    link: string = null;
    show:boolean = null;
}