import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
//import {FlashMessage} from 'angular-flash-message';
//import { FlashMessagesModule } from 'angular2-flash-messages';
import { NgFlashMessageService } from 'ng-flash-messages';
import {Router} from '@angular/router';
import {ValidationService} from '../../service/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:String;
  index:String;
  email:String;
  password:String;

  constructor(
    private authService: AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
    private validationService:ValidationService
  ){}

  ngOnInit() {
  }

  registerData(){
    const user ={
      name:this.name,
      index:this.index,
      email:this.email,
      password:this.password
    };
/*    if(this.validationService.validateEmail(user.email)){
      this.ngFlashMessageService.showFlashMessage({messages: ["Required fields are missing"], 
      // Whether the flash can be dismissed by the user defaults to false
      dismissible: true, 
      // Time after which the flash disappears defaults to 2000ms
      timeout: 3000,
      // Type of flash message, it defaults to info and success, warning, danger types can also be used
      type: 'danger'});
    return false;
      //this.router.navigate(['/login']);
    }
    */

    this.authService.registerUser(user).subscribe(res=>{
   /*   if(this.validationService.validateEmail(user.email)){
        this.ngFlashMessageService.showFlashMessage({messages: ["Required fields are missing"], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: 3000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'danger'});
      return false;
        //this.router.navigate(['/login']);
      }
      else{*/

      if(res.state){
        this.ngFlashMessageService.showFlashMessage({messages: ["You are registered"], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: 3000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'success'});
      
        this.router.navigate(['/login']);

      }else{

        this.ngFlashMessageService.showFlashMessage({messages: ["Something went wrong"], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: false,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'danger'});
     // }
     this.router.navigate(['/register']);
      }
    //}
    });
  }
}
