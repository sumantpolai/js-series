    //  primitive

// 7 types : String , Number , Boolean , undefined , null , Symbol , BigInt

const score =234;
const scoreValue =234.0;
const isLoggedIn =false;
let userEmail;
const outsideTemp=null;
const id =Symbol('123');
const anotherId =Symbol('123')    // here id /= anotherId
const bigNumber=12345443223345252525262n;



    // Reference (Non primitive) 
    
// Array , Objects , Functions 

const heros =["saktiman","nagraj","doga"];

let myObj ={
    name :"sumant",
    age: 21,
}
const myFunction=function(){
    console.log("Hello World");
}
      



//=====================================================================================================


// Stack(primitive) , Heap (non primitive)

let myYoutubeName="polaisgaming.com"
let anotherName=myYoutubeName
anotherName="chaiorcode"
console.log(myYoutubeName); //polaisgaming
console.log(anotherName);   //chaiorcode

let userOne ={
    email:"user@gmail.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="sumantpolai@gmail.com";
console.log(userOne.email);  //sumant@gmail.com
console.log(userTwo.email);  //sumant@gmail.com