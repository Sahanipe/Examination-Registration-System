import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import {Router} from '@angular/router';


@Component({
  selector: 'app-exam-days',
  templateUrl: './exam-days.component.html',
  styleUrls: ['./exam-days.component.css']
})
export class ExamDaysComponent implements OnInit {
  date:String;
  time:String;
  subject:String;


  constructor(
    private authService: AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  ExamDays(){
    const days={
      date:this.date,
      time:this.time,
     subject:this.subject

    }

    this.authService.ExamDays(days).subscribe(res=>{

      if(res.state){

        this.ngFlashMessageService.showFlashMessage({messages: ["Exam is registered"], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: 2000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'success'});
      
        this.router.navigate(['/admin']);

      }else{
        this.ngFlashMessageService.showFlashMessage({messages: ["Something went wrong"], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: 2000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'failure'});
     // }
     this.router.navigate(['/admin']);
      }
    });
  }


}
