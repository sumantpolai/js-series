// object singleton





//const tinderUser=new Object()        // another type to write object (singleton obj.)



const tinderUser={}
tinderUser.id="123abc",
tinderUser.name="sumanta",
tinderUser.isLoggedIn=false

// console.log(tinderUser);   // print all the object 

console.log(Object.keys(tinderUser));   // it print all the keys in a array format  [ 'id','name','isLoggedIn']
console.log(Object.values(tinderUser)); // it print all the values in array format  
console.log(Object.entries(tinderUser));// it store all the keys and its values in an array [['id','123abc'],['name','sumanta'],['isLoggedIn','false']]

console.log(tinderUser.hasOwnProperty('name')); // it ask the tinderUser obj. name variable is there  and it gave ans. as boolean



const regulaerUser={
    email:"sumantpolai@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sumanta",
            lastname: "polai"
        }
    }
}

console.log(regulaerUser.fullname);  // here it go depth in fullname
console.log(regulaerUser.);


const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}
const obj3 ={5: "a", 6: "b"} 

//const obj4 = Object.assign({}, obj1,obj2,obj3)
//console.log(obj4);     // add obj 1,2,3 and store inthe empty obj

const obj4 = {...obj1,...obj2,...obj3} // spreade 
console.log(obj4); // add all object and store in obj4


const users = [
    {

    }
]