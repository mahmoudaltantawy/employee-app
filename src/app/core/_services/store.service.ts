import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  toggled: Subject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }
  setToggleSideNav(hide:boolean){
    return this.toggled.next(hide)
  }
  getToggleSideNav():Observable<any>{
    return this.toggled.asObservable();
  }
}
