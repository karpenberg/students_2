import { Results } from "./result";

export interface IStudent {
    averageMark: number;
    averagePresence: number;
    lastName:string;
    absent();
    present();
    summary:string;   
}

export class Student implements IStudent {
    marks: number[];
    absence: boolean[];
    absenceIndex: 0;

    firstName: string;
    lastName: string;
    birthDay: string;
    age: number;
    averageMark: number;

    readonly presenceFactor = 0.9;
    readonly goodMarksMin = 90;

    private getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    constructor(firstName: string, lastName: string, birthDay: string, marks: number[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        this.marks = marks;
        this.absence = new Array(25);
        this.absenceIndex = 0;
        this.age = this.getAge(birthDay);
        this.averageMark = this.marks.reduce((r, m) => r + m) / this.marks.length;
    }

    get averagePresence(): number {
        var precenceCount = this.absence.slice(0, this.absenceIndex).filter(x => x).length;
        return precenceCount / this.absenceIndex;
    }


    absent() {
        if (this.absence.length > this.absenceIndex) {
            this.absence[this.absenceIndex] = false;
            this.absenceIndex++;
        }
    };

    present() {
        if (this.absence.length > this.absenceIndex) {
            this.absence[this.absenceIndex] = true;
            this.absenceIndex++;
        }
    };

    get summary(): string {
        if (this.averageMark < this.goodMarksMin && this.averagePresence < this.presenceFactor) {
            return Results.Bad;
        } else if (this.averageMark < this.goodMarksMin || this.averagePresence < this.presenceFactor)
            return Results.Normal;
        else
            return Results.Good;
    }
}


