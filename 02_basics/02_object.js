// singleton  (when we use constroctor )



// object literals


const mySym=Symbol("key1");


const JsUser={
    name:"sumanta",
    "full name": "sumanta Kumar Polai",
    [mySym]:"key1",  // there is only way to access the symbol
    age:20,
    location:"bhubaneswar",
    isLoggedIn: false,
    lastLoginDay: ["monday","saturday"]

}
console.log(JsUser.age);
console.log(JsUser["age"]);  // both are doing same things and result was same 
                             // But it is more features then . method

console.log(JsUser["full name"]);// here the only to print full name 
                                // that's why we mostly use this method rather than . method


console.log(JsUser[mySym]) // there is only to represent symbol

JsUser.age= 22 // to override the value
Object.freeze(JsUser.age)  // here we freeze the  age variable or we lock the age variables value here we can not override 
//JsUser.name= "sk polai"
//console.log(JsUser["name"]);  // here we change the name var. bcz we don not freeze name var.



JsUser.greeting = function(){
    console.log("Hello js user");

}
 
console.log(JsUser.greeting); // here it print only function reference
console.log(JsUser.greeting()); // here it print the greets


JsUser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}`);
}
console.log(JsUser.greetingTwo()); // here it print greet with name var.