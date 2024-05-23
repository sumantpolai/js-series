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
console.log(myArr);   // 9 shift to 1st position and rest all right shift . But it is  very time consuming operation when we use for large no of element

myArr.shift()
console.log(myArr); // delet the 1st  element and rest all left-shift


console.log(myArr.includes(9));  // false
console.log(myArr.indexOf(9));  // -1

const newArr=myArr.join()

console.log(myArr);   
console.log(newArr);   // both are same but the typeof newArr is string

const marvel_heros =['thor','ironman','spiderman']
const dc_heros=['superman','flash','batman']

const all_new_heros=[...marvel_heros,...dc_heros]   //spreade operator simillar type of conacat but in case of concat we can concatinate only two variable 
                                                     // But here we cane use multiple variables
console.log(all_new_heros);  // ['thor','ironman',spiderman','superman',flash','batman']


const another_arry=[1,2,3,[4,5,6],7,5,[3,4,5,[6,7]]]
 const real_another_Arry=another_arry.flat(Infinity);  //eturns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_Arry);  // [1,2,3,4,5,6,7,5,3,4,5,6,7]


// ======  slice , splice  ====

console.log("A", myArr);

const myn1 = myArr.slice(1,3)  
console.log(myn1);       // take the element from index of 1-3 except index of 3
console.log(myArr);      // slice do not manipulate the original array

console.log("B",myArr);

const myn2= myArr.splice(1,3)
console.log(myn2);   // splice take the element from index of 1-3 including 3 also
console.log(myArr);  // but in case of splice it manipulate the original array 



console.log(Array.isArray("sumanta"));   // false ( it ask "sumanta " is a array or not)
console.log(Array.from("sumanta"));      // it convert into array  ['s','u','m','a','n','t','a'] 



