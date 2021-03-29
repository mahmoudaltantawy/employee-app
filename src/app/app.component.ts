import { Component } from '@angular/core';
import{TranslateService} from '@ngx-translate/core';
import { StoreService } from './core/_services/store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employee-app';
  hideNav:boolean; 
  constructor(public translateSer:TranslateService , private store:StoreService){
    translateSer.addLangs(['en' , 'ar']);
    translateSer.setDefaultLang('en')
    this.store.getToggleSideNav().subscribe(res =>{
      this.hideNav = res;
    })
  }


}
