import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import { Examdays } from '../../examdays';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-view-examdays-admin',
  templateUrl: './view-examdays-admin.component.html',
  styleUrls: ['./view-examdays-admin.component.css']
})
export class ViewExamdaysAdminComponent implements OnInit {
  private examdays:Examdays[];


  constructor(
    private authService:AuthService,
    private ngFlashMessageService:NgFlashMessageService
  ) { }

  ngOnInit() {
    this.ViewExamdays();
   
  }

  ViewExamdays(){
    this.authService.ViewExamdays().subscribe(
      data=>{
        console.log(data);
        this.examdays=data['msg'];

      
      },
      error=>{
        console.log(error);
      }
    )
  }

  doDelete(examday){
    this.authService.deleteExamDays(examday._id).subscribe(
      data=>{
        
        this.examdays.splice(this.examdays.indexOf(examday),1);

        this.ngFlashMessageService.showFlashMessage({messages: ["Successfully Deleted"], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: 2000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'success'});

      },
      
      error=>{

      }
    )

  }
  }

  


