import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import { Exam } from '../../exam';
import { NgFlashMessageService } from 'ng-flash-messages';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-exam-view-ug',
  templateUrl: './exam-view-ug.component.html',
  styleUrls: ['./exam-view-ug.component.css']
})
export class ExamViewUgComponent implements OnInit {
  private exams:Exam[];

  @ViewChild('content') content:ElementRef;

 


  constructor(
    private authService:AuthService,
    private ngFlashMessageService:NgFlashMessageService
  ) { }

  ngOnInit() {
    this.ViewExamUG();
  }

  ViewExamUG(){
    this.authService.ViewExamUG().subscribe(
      data=>{
        console.log(data);
        this.exams=data['msg'];

      
      },
      error=>{
        console.log(error);
      }
    )
  }

  public downloadPDF(){
    let doc= new jsPDF();

    let specialElementHandlers= {
      "#editor": function(element, renderer){
        return true;
      }
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML,15,15,{
      'width':300,
      'elementHandlers':specialElementHandlers

    });

    doc.save('ExamReport.pdf');

  }



  doDelete(exam){
    
    this.authService.deleteExamUG(exam._id).subscribe(
      data=>{
        
        this.exams.splice(this.exams.indexOf(exam),1);

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
