class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, Students=[]) {
        this.name = name;
        this.level = level;
        this.Students = Students;
    }
    registerStudent(student){
        if(this.Students.filter(stud => stud.email === student.email).length){
            console.log(`This student ${student.email} is already registered!`);
        } else {
            this.Students.push(student);
            console.log(`Registering ${student.email} to the bootcamp ${this.name}.`);
        }
        return this.Students;
    }
}