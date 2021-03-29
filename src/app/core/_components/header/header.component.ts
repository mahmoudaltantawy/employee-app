import { Component, OnInit } from '@angular/core';
import{TranslateService} from '@ngx-translate/core';
import { StoreService } from '../../_services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  defaultDir:boolean =false ;
  showMenu:boolean =false ;
  hideSideNav:boolean;
  today: number = Date.now();
  constructor(public translateSer:TranslateService , private store:StoreService) { }

  ngOnInit(): void {
    this.store.getToggleSideNav().subscribe(res =>{
      this.hideSideNav = res
    })
  }
  loadLanguage() {
    let dir = this.defaultDir === true ? 'ltr' : 'rtl';
   document.getElementsByTagName('body')[0].setAttribute('dir', dir);
   this.defaultDir = !this.defaultDir ;
   this.defaultDir === true ? this.translateSer.use('ar') : this.translateSer.use('en');
  
 }
 toggleSideNav(){
   this.store.setToggleSideNav(!this.hideSideNav)
 }
}
