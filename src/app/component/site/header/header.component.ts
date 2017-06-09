import { Component } from '@angular/core';


@Component({
    selector: 'leon-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {
    loginName = "Leon";
    firstLetter = "";

    constructor(){
        this.firstLetter = this.loginName.slice(0,1);
    }
}
