const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);  // 3
console.log(balance.toFixed(2));  //100.00

const otherNumber=23.8966

console.log(otherNumber.toPrecision(3));  //23.9

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000


//====================== math =====================


console.log(Math);
console.log(Math.abs(-4));  //convert all value to positive value 
console.log(Math.round(4.7));  // roundoff 5
console.log(Math.ceil(4.2));   //5
console.log(Math.floor(4,9));   // 4
console.log(Math.min(4,3,6,8));    //3
console.log(Math.max(4,3,7,5,9));   //9

console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);  


const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)));

