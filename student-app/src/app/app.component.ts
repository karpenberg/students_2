import { Component } from '@angular/core';
import { Course, ICource } from './model/course';
import { Student, IStudent } from './model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title;
  course:ICource<IStudent>;
  constructor(){   
    var sergey = new Student('sergey', 'karpovich', '01/20/1993', [90, 60, 90]);
    var andrey = new Student('karpovich', 'andrey', '03/28/1986', [90, 80, 90]);

    sergey.present();
    sergey.present();
    sergey.absent();

    andrey.present();
    andrey.present();
    andrey.present(); 

    this.course = new Course([sergey, andrey]);

    var str = "var course = new Course();";
    str +="<br/>course.getAttendance()<br/>"+this.course.getAttendance();  
    str +="<br/>course.getAttendance('karpovich')<br/>"+this.course.getAttendance('karpovich');
    str +="<br/>course.getPerformance()<br/>"+this.course.getPerformance();
    str +="<br/>course.getPerformance('andrey')<br/>"+this.course.getPerformance('andrey');  
    
    this.course.students.forEach(student => {
      str+="<br/>student.lastName<br/>"+student.lastName;  
      str+="<br/>student.summary<br/>"+student.summary;  
    });

    this.title = str;
  }
}
