// CODE here for your Lambda Classes

// #### CLASSES ####
class People {
    constructor(attrs) {
        this.name = attrs.name;
        this.location = attrs.location;
        this.age = attrs.age;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends People {
    constructor(attrs) {
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
        console.log(`${student.name} recieves a perfect score on ${subject}`)
    }
    gradeChange(student) {
        student.testTotal += 1;
        student.totalGrade += ((Math.floor(Math.random() * 100) + 20))
        student.grade = student.totalGrade / student.testTotal;
        student.grade = Math.floor(student.grade);
        console.log(student.totalGrade);
        console.log(student.testTotal);
        console.log(student.grade);
        return student.grade;
    }
}

class Student extends People {
    constructor(attrs) {
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.favSubjects = attrs.favSubjects;
        this.grade = attrs.grade;
        this.testTotal = attrs.testTotal;
        this.totalGrade = attrs.totalGrade;
    }
    listSubjects() {
        for(let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge for ${subject}`)
    }
    graduate() {
        if (this.grade >= 70) {
            console.log(`${this.name} is graduating!`)
        } else {
            console.log(`Flex time!`);
        }
    }
}

class ProjectManager extends Instructor {
    constructor(attrs) {
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

// #### CLASS INSTANCES ####
const tom = new Instructor({
    name: 'Tom',
    location: 'Seattle',
    age: 43,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `I have no idea`
});
const jon = new Student({
    name: "Jon",
    location: "Morgan Hill",
    age: 36,
    favSubjects: ["Ruby", "Javascript"],
    grade: 80,
    testTotal: 1,
    totalGrade: 80,
    previousBackground: "Retail"
});
const bob = new ProjectManager({
    name: "Bob",
    location: "Fargo",
    age: 29,
    gradClassName: "WEB21",
    favInstructor: "Tom"
})

// #### INSTRUCTOR TESTING
console.log(tom);
tom.speak();
tom.demo('HTML');
tom.grade(jon, "HTML");

tom.gradeChange(jon);
tom.gradeChange(jon);
tom.gradeChange(jon);

// #### STUDENT TESTING ####
console.log(jon);
jon.speak();
jon.listSubjects();
jon.PRAssignment("Javascript");
jon.sprintChallenge("CSS");

console.log(jon.grade);
console.log(jon.testTotal);
jon.graduate()

// #### PROJECT MANAGER TESTING ####
bob.speak();
bob.demo('java');
bob.speak(jon, 'java');
bob.standUp('Web21');
bob.debugsCode(jon, 'java');
bob.gradeChange(jon);