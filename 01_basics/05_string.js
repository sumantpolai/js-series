const name="sumanta"
const repoCount=50

// console.log(name+repoCount+"value");

console.log(`my name is ${name} and my repo count is${repoCount}`);     // morden way or string interpolation


//another way to represent string

const gameName= new String('sumant')    //benifit is that we can get some extra information like we print each char. or we know about some fun.

console.log(gameName[0]);  // h


console.log(gameName.length);  // 7
console.log(gameName.toUpperCase());  //SUMANTA
console.log(gameName.indexOf(`t`));    //5
console.log(gameName.charAt(2));  // m


const newString=gameName.substring(0,4);  
console.log(newString);   //suma

const anotherString=gameName.slice(-5,5);   //
console.log(anotherString);   //

const newStringOne="    sumanta    ";
console.log(newStringOne);     //"      sumanta     "
console.log(newStringOne.trim());   //"sumanta"

const url="https://sumant.com/sumant%20polai"
 
console.log(url.replace('%20','-'));    //"https://sumant.com/sumant-polai"

console.log(url.includes('sunita'));    //false

console.log(gameName.split('-'));   //  
