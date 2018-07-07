import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import { Exam } from '../../exam';

@Component({
  selector: 'app-myexams',
  templateUrl: './myexams.component.html',
  styleUrls: ['./myexams.component.css']
})
export class MyexamsComponent implements OnInit {
  private exams:Exam[];
  index;

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.ViewExamUG();
  }

  ViewExamUG(){
    this.authService.fetchIndex().subscribe(
      data=>{
        console.log(data);
        this.exams=data['msg'];

      
      },
      error=>{
        console.log(error);
      }
    )
  }

}
