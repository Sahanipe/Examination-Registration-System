import { Injectable } from '@angular/core';
import { Http ,Headers } from '@angular/http';
//import 'rxjs/add/operator/map';
//import { map } from 'rxjs/operators';
//import { Observable } from "rxjs";
//import { from } from 'rxjs/observable/from';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any;
  authtoken:any;
  authIndex:any;
  
  
  constructor(
    private http:Http
  ) { }

  registerUser(user) {
    
   let headers= new Headers();
   headers.append('Content-Type','application/json');

    return this.http.post("http://localhost:3000/user/register",user,{headers:headers}).pipe(map(res=>res.json()));
  }

  loginUser(user){
    let headers= new Headers();
   headers.append('Content-Type','application/json');

    return this.http.post("http://localhost:3000/user/login",user,{headers:headers}).pipe(map(res=>res.json()));

  }

  logout(){
    this.authtoken=null;
    this.user=null;
    localStorage.clear();
  }


  getProfile(){
this.fetchToken();

    let headers= new Headers();
    headers.append('Authorization',this.authtoken);
   headers.append('Content-Type','application/json');

    return this.http.get("http://localhost:3000/user/profile",{headers:headers}).pipe(map(res=>res.json()));

  }

  fetchToken(){
    const token=localStorage.getItem("tokenid");
    this.authtoken=token;
    

  }

  fetchIndex(){
    const UserDetails=JSON.parse(localStorage.getItem("user"));
    const Index=UserDetails.index;
    this.authIndex=Index;
    console.log('ksnd');
    console.log(Index);
   // this.MyExamView(Index);
   let headers= new Headers();
   headers.append('Content-Type','application/json');
   console.log("lala");
   console.log(Index);

   return this.http.get("http://localhost:3000/exam/MyexamView?Index="+Index,{headers:headers}).pipe(map(res=>res.json()));
    //console.log(Index);
  

  }


  storeData(token,userdata){
    localStorage.setItem("tokenid",token);
    localStorage.setItem("user",JSON.stringify(userdata));
    this.authtoken=token;
    this.user=userdata

  }

  

  registerExamUG(exam){
    let headers= new Headers();
   headers.append('Content-Type','application/json');
  // this.fetchIndex();
   

   return this.http.post("http://localhost:3000/exam/examUG",exam,{headers:headers}).pipe(map(res=>res.json()));
  }

  ViewExamUG(){
    let headers= new Headers();
   headers.append('Content-Type','application/json');

   return this.http.get("http://localhost:3000/exam/examViewUG",{headers:headers}).pipe(map(res=>res.json()));
  }

  deleteExamUG(id:String){
    let headers= new Headers();
   headers.append('Content-Type','application/json');

   return this.http.delete("http://localhost:3000/exam/examDelUG/"+id,{headers:headers}).pipe(map(res=>res.json()));
  }

 // MyExamView(Index){
   // this.fetchIndex();
   // let headers= new Headers();
   //headers.append('Content-Type','application/json');
   //console.log("lala");
   //console.log(Index);

   //return this.http.post("http://localhost:3000/exam/MyexamView"+Index,{headers:headers}).pipe(map(res=>res.json()));
  //}

  ExamDays(days){
    let headers= new Headers();
   headers.append('Content-Type','application/json');

    return this.http.post("http://localhost:3000/admin/examDays",days,{headers:headers}).pipe(map(res=>res.json()));
  }
  ViewExamdays(){
    let headers= new Headers();
   headers.append('Content-Type','application/json');

   return this.http.get("http://localhost:3000/admin/examViewDays",{headers:headers}).pipe(map(res=>res.json()));
  }

  deleteExamDays(id:String){
    let headers= new Headers();
   headers.append('Content-Type','application/json');

   return this.http.delete("http://localhost:3000/admin/examDelDay/"+id,{headers:headers}).pipe(map(res=>res.json()));

  }
  }

