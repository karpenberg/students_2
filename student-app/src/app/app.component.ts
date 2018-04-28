import { Component } from '@angular/core';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title;
  constructor(){    
    var course = new Course();
    this.title = "var course = new Course();";
    this.title +="<br/>course.getAttendance()<br/>"+course.getAttendance();  
    this.title +="<br/>course.getAttendance('karpovich')<br/>"+course.getAttendance('karpovich');
    this.title +="<br/>course.getPerformance()<br/>"+course.getPerformance();
    this.title +="<br/>course.getPerformance('andrey')<br/>"+course.getPerformance('andrey');   
  }
}
