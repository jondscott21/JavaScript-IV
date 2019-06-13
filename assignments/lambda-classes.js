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
        console.log(student.testTotal);
        student.testTotal += 1;
        console.log(student.testTotal);
        return student.grade += (((Math.floor(Math.random() * 101) + 1)) / student.testTotal)
    }
}

class Student extends People {
    constructor(attrs) {
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.favSubjects = attrs.favSubjects;
        this.grade = attrs.grade;
        this.testTotal = attrs.testTotal;
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
const fred = new Instructor({
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
console.log(fred);
fred.speak();
fred.demo('HTML');
fred.grade(jon, "HTML");
fred.gradeChange(jon);

// #### STUDENT TESTING ####
console.log(jon);
jon.speak();
jon.listSubjects();
jon.PRAssignment("Javascript");
jon.sprintChallenge("CSS");

console.log(jon.grade);

// #### PROJECT MANAGER TESTING ####
bob.speak();
bob.demo('java');
bob.speak(jon, 'java');
bob.standUp('Web21');
bob.debugsCode(jon, 'java');