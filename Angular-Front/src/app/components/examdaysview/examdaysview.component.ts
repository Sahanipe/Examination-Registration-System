import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import { Examdays } from '../../examdays';
import { NgFlashMessageService } from 'ng-flash-messages';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-examdaysview',
  templateUrl: './examdaysview.component.html',
  styleUrls: ['./examdaysview.component.css']
})
export class ExamdaysviewComponent implements OnInit {
  private examdays:Examdays[];


  @ViewChild('content') content:ElementRef;

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

  
  public downloadPDF(){
    let doc= new jsPDF();

    let specialElementHandlers= {
      "#editor": function(element, renderer){
        return true;
      }
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML,30,30,{
      'width':190,
      'elementHandlers':specialElementHandlers

    });

    doc.save('ExamTimeTable.pdf');

  }


}



