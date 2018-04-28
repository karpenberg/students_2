import { Student } from "./student";

export class Course
 {
    private students: Student[];
    constructor() {      
        var sergey = new Student('sergey', 'karpovich', '01/20/1993', [90, 60, 90]);
        var andrey = new Student('karpovich', 'andrey', '03/28/1986', [90, 80, 90]);

        sergey.present();
        sergey.present();
        sergey.absent();

        andrey.present();
        andrey.present();
        andrey.present();

        this.students = [sergey, andrey];
    }
    public  getAttendance(lastName?:string):number {        
        if (!lastName) {
            return this.students.reduce((r, s) => r + s.averagePresence, 0) / this.students.length;
        }
        return this.students.sort((a, b) => b.averagePresence - a.averagePresence).findIndex(s => s.lastName === lastName) + 1;
    }

    public getPerformance(lastName?:string):number  {
        if (!lastName) {
            return this.students.reduce((r, s) => r + s.averageMark, 0) / this.students.length;
        }
        return this.students.sort((a, b) => a.averageMark - b.averageMark).findIndex(s => s.lastName === lastName) + 1;
    }
}