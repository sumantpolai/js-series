let score ="33abc"

console.log(typeof score); //string
console.log(typeof(score)); //string

let valueInNumber=Number(score)
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN


//"33" => converted and value is  number
// "33abc" =>converted but value is NaN
// true => 1 ,false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);  //true

// "" => false
//1 => true , 0 => false
// "sumanta" => true




// ************************************************* Operation **************************************************
     
let value = 3
let negValue = -value
console.log(negValue); // -3




let str1="hello"
let str2=" sumant"
let str3=str1 + str2
console.log(str3);  //hello sumant

console.log("1"+2); //12
console.log(1 +"2"); //12
console.log("1"+2+2); // 122
console.log(1+2+"2"); // 32