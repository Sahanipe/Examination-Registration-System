import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {DataService} from '../../service/data.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    loggedin:string;
    ms:boolean=false;
    
  constructor(
    private router:Router,
    private login:LoginComponent,
    private data:DataService
  ) { }

  ngOnInit() {
    this.data.creentMessage.subscribe(loggedin=>this.loggedin=loggedin);
      console.log(this.loggedin);

      if(this.loggedin=="false"){
        this.ms=false;
      }
      else{
        this.ms=true;
      }
    }
   
  }


