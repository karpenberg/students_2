export class Student {
    private marks: number[];
    private absence: boolean[];
    private absenceIndex: 0;

    public firstName: string;
    public lastName: string;
    public birthDay: string;
    public age: number;
    public averageMark: number;

    readonly presenceFactor = 0.9;
    readonly goodMarksMin = 90;
    readonly results = {
        BAD: "Редиска!",
        NORMAL: "Норм, но можно лучше",
        GOOD: "Ути какой молодчинка!"
    };

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

    public get averagePresence(): number {
        var precenceCount = this.absence.slice(0, this.absenceIndex).filter(x => x).length;
        return precenceCount / this.absenceIndex;
    }


    public absent() {
        if (this.absence.length > this.absenceIndex) {
            this.absence[this.absenceIndex] = false;
            this.absenceIndex++;
        }
    };

    public present() {
        if (this.absence.length > this.absenceIndex) {
            this.absence[this.absenceIndex] = true;
            this.absenceIndex++;
        }
    };

    public summary() {
        if (this.averageMark < this.goodMarksMin && this.averagePresence < this.presenceFactor) {
            console.log(this.results.BAD);
        } else if (this.averageMark < this.goodMarksMin || this.averagePresence < this.presenceFactor)
            console.log(this.results.NORMAL);
        else
            console.log(this.results.GOOD);
    }
}


