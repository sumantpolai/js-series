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