const userEmail ="sumant@gmail.com"

if (userEmail) {
    console.log("got user email");
} else {
    console.log("don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN 


// truthy values

// "0", 'false', " ", [], {}, function(){}, 

const emptyArr =[]
if (emptyArr.length === 0 ) {    // to check the array is empty or not
    console.log("array is empty");
}


const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {   // to check the object is empty or not 
    console.log("object is empty");  
}

// 0 == ''  ( true) 


// Nullish Coalescing Operator (??) : null, undefined

// if we don't want to take null or undefined value there we use ?? operator and gave a value to print that value

let val1;val1= 5 ?? 10  // 5
val1 = null ?? 10       // 10
val1 = undefined ?? 15  // 15
val1 = null ?? 10 ?? 20 // 10

console.log(val1);    



// ==== terniary operator====

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("greater then 80 ");  // less then 80