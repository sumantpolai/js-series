console.log("2">1); //true
console.log(2>1); //true
console.log("02">1); //true


console.log(null>0); //false
console.log(null == 0); // false
console.log(null >= 0); //true
                       // The reason is that an equality check and the comparisions check work differently ,
                       // Comparision convert null to a number treting it as a 0. That's why (null >= 0) is true and (null > 0) is false
                       