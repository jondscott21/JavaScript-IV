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
}

class Student extends People {
    constructor(attrs) {
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        //make sure favSubjects ends up being an array
        this.favSubjects = attrs.favSubjects
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
        console.log(`${this.name} debugs ${student.name}`)
    }
}