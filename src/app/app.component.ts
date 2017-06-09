import { Component, OnInit, AfterViewInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit,AfterViewInit{

  subMenuNm : String ='';
  selectedMenuNm: String='';
  link = '';

  ngAfterViewInit(): void {}

  ngOnInit(): void {}

  onClickChildMenu(clickedMenu: any){
    this.subMenuNm = clickedMenu.rootMenu;
    this.selectedMenuNm= clickedMenu.childMenu;
    this.link = clickedMenu.link;
  }

}
