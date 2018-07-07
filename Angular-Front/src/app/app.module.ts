import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes} from '@angular/router';
//import {FlashMessageModule} from 'angular-flash-message';
//import { FlashMessagesModule } from 'angular2-flash-messages';
import { NgFlashMessagesModule } from 'ng-flash-messages';
//import {FileUploadModule}  from 'ng2-file-upload';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';


import {AuthService} from './service/auth.service';

import { ExamsComponent } from './components/exams/exams.component';
import { ExamUGComponent } from './components/exam-ug/exam-ug.component';
import { ExamViewUgComponent } from './components/exam-view-ug/exam-view-ug.component';
import { MyexamsComponent } from './components/myexams/myexams.component';
import { AdminComponent } from './components/admin/admin.component';
import { ExamPgComponent } from './components/exam-pg/exam-pg.component';
import { RepeatComponent } from './components/repeat/repeat.component';
import { ExamDaysComponent } from './components/exam-days/exam-days.component';
import { ViewExamdaysAdminComponent } from './components/view-examdays-admin/view-examdays-admin.component';
//import { ExamviewComponent } from './components/examview/examview.component';
import { ExamdaysviewComponent } from './components/examdaysview/examdaysview.component';



 const applicationRoutes:Routes = [
   {path:'login',component:LoginComponent},
   {path:'register',component:RegisterComponent},
   {path:'exam',component:ExamsComponent},
   {path:'examUG',component:ExamUGComponent},
   {path:'ViewexamUG',component:ExamViewUgComponent},
   {path:'examPG',component:ExamPgComponent},
   {path:'examRepeat',component:RepeatComponent},
   {path:'Myexams',component:MyexamsComponent},
   {path:'profile',component:ProfileComponent},
   {path:'admin',component:AdminComponent},
   {path:'examdays',component:ExamDaysComponent},
   {path:'examdaysviewadmin',component: ViewExamdaysAdminComponent},
   {path:'examdaysview',component:ExamdaysviewComponent}
 ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ExamsComponent,
    ExamUGComponent,
    ProfileComponent,
    ExamViewUgComponent,
    MyexamsComponent,
    AdminComponent,
    ExamPgComponent,
    RepeatComponent,
    ExamDaysComponent,
    ViewExamdaysAdminComponent,
   // ExamviewComponent,
    ExamdaysviewComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(applicationRoutes),
    NgFlashMessagesModule.forRoot(),
    //FileUploadModule,
  
  ],
  providers: [AuthService,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
