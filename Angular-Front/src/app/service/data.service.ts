import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource= new BehaviorSubject("default msg");
  creentMessage=this.messageSource.asObservable();
 


  constructor() { }
    changeMessage(loggedin:string){
      this.messageSource.next(loggedin);
   //console.log(loggedin);
    }
    
}
