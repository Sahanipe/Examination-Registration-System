import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import {Router} from '@angular/router';
//import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {DataService} from '../../service/data.service';
//import {ValidationService} from '../../service/validation.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  index:String;
  password:String; 
  loggedin:string;
// private messageSource= new BehaviorSubject<string>("default msg");
 // creentMessage=this.messageSource.asObservable();
 
  constructor(
    private authService:AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
    private data:DataService,
   // private validationService:ValidationService
  ) { }

  ngOnInit() {
    this.data.creentMessage.subscribe(loggedin=>this.loggedin=loggedin);
   // console.log(this.loggedin);
  }

  loginUser(){
    
    const user={
      index:this.index,
      password:this.password
    };

    

    
    
    this.authService.loginUser(user).subscribe(res=>{
      if(res.state){
        this.authService.storeData(res.token,res.user);
        this.data.changeMessage("false");
    // this.messageSource.next('false');
        this.ngFlashMessageService.showFlashMessage({messages: ["You are logged in"], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: 2000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'success'});
      
        if(user.index=="123"){

        this.router.navigate(['/admin']);
      }
        else{

        this.router.navigate(['/exam']);
        }

      }else{
        this.ngFlashMessageService.showFlashMessage({messages: ["Invalid User name or password"], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: 3000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'danger'});
     // }
  this.router.navigate(['/login']);
      }
    });
  }
}
