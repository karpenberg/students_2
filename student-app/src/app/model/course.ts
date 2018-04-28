import { Student, IStudent } from "./student";

export interface ICource<T extends  IStudent> {    
    students: T[];
    getAttendance(lastName?:string):number;
    getPerformance(lastName?:string):number;
}

export class Course<T extends  IStudent> implements ICource<T>
 {
    students: T[];
    constructor(students:T[]) {      
        this.students = students;
    }
    getAttendance(lastName?:string):number {        
        if (!lastName) {
            return this.students.reduce((r, s) => r + s.averagePresence, 0) / this.students.length;
        }
        return this.students.sort((a, b) => b.averagePresence - a.averagePresence).findIndex(s => s.lastName === lastName) + 1;
    }

    getPerformance(lastName?:string):number  {
        if (!lastName) {
            return this.students.reduce((r, s) => r + s.averageMark, 0) / this.students.length;
        }
        return this.students.sort((a, b) => a.averageMark - b.averageMark).findIndex(s => s.lastName === lastName) + 1;
    }
}