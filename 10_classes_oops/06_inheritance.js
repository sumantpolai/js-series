class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);   // give the value of username
    }
}

class Teacher extends User{             // here we inherit the property of user
    constructor(username, email, password){
        super(username)    // behind the seen    here it see which  class is extended then go to user class and go to the constructer and take automatically with a this , and then set the username and then we can directly get access
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()  // here we call the logme function

const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);