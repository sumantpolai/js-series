// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){    //here we go top heirerchi and add a property ,here array ,string and function can acess
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){  // herev we add a property in array
    console.log(`Hitesh says hello`);
}

heroPower.hitesh()  // 
myHeros.hitesh()    // here arr can acess bcz we add a property in object
myHeros.heyHitesh()  // here it print bcz we add a property in array
heroPower.heyHitesh() // here it can't print bcz we add a property in array thats why we can't access in object

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport   // syntax to write a prototype
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)  // setprototypeof is set the prototype of speicified object
                                                 // here teachingsupport is inherit the property of teacher  
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()