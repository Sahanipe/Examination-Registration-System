import { Component, OnInit } from '@angular/core';
//import {FileSelectDirective,FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 // uploader:FileUploader=new FileUploader({url:'http://localhost:3000/admin/upload'});
 // attachmentList:any=[];
  

  constructor() {
   // this.uploader.onCompleteItem=(item:any, response:any, status:any, headers:any)=>{
    //  this.attachmentList.push(JSON.parse(response));
   // }
   }

  ngOnInit() {
  }

  
  
}
