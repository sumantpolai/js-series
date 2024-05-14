// array


const myArr =[0,1,2,3,4,5]
const myArr2=new Array(1,2,3,4)    // another way to represent  array which have many feature in console 
console.log(myArr[1]);


//Array methods

myArr.push(6)
console.log(myArr);  //push 6 into the myArr (1,2,3,4,5,6)
myArr.pop()     
console.log(myArr);   // pop or delete last element from the array


myArr.unshift(9)
console.log(myArr);   // 9 shift to 1st position and rest all right shift . But it is  ery time consuming operation when we use for large no of element

myArr.shift()
console.log(myArr); // delet the 1st  element and rest all left-shift


console.log(myArr.includes(9));  // false
console.log(myArr.indexOf(9));  // -1

const newArr=myArr.join()

console.log(myArr);   
console.log(newArr);   // both are same but the typeof newArr is string

const marvel_heros =['thor','ironman','spiderman']
const dc_heros=['superman','flash','superman']




// ======  slice , splice  ====

console.log("A", myArr);

const myn1 = myArr.slice(1,3)  
console.log(myn1);       // take the element from 1-3 except index of 3
console.log(myArr);      // slice do not manipulate the original array

console.log("B",myArr);

const myn2= myArr.splice(1,3)
console.log(myn2);   // splice take the element from 1-3 including 3 also
console.log(myArr);  // but in case of splice it manipulate the original array



