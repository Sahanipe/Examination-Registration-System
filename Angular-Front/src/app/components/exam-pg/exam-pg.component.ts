import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-exam-view-pg',
  templateUrl: './exam-pg.component.html',
  styleUrls: ['./exam-pg.component.css']
})
export class ExamPgComponent implements OnInit {
  name:String;
  index:String;
  years = ["First Year","Second Year","Third Year","Fourth Year"];
  year:String;
  subject:String;

  constructor(
    private authService: AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  registerExamPG(){
    const exam={
      name:this.name,
      index:this.index,
      year:this.year,
     subject:this.subject

    }
    this.authService.registerExamUG(exam).subscribe(res=>{

      if(res.state){

        this.ngFlashMessageService.showFlashMessage({messages: ["Exam is registered"], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: 2000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'success'});
      
        this.router.navigate(['/exam']);

      }else{
        this.ngFlashMessageService.showFlashMessage({messages: ["Something went wrong"], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: 2000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'failure'});
     // }
     this.router.navigate(['/exam']);
      }
    });
  }

}



