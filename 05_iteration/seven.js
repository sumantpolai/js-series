const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNumbers.map( (num) => num+10)
// console.log(newNum);  

const newNum = myNumbers    // ===chaining
          .map( (num) => num*10)  // here mynumber * with 10
          .map( (num) => num+1)   // here add 1 with num which are come after multiplication
          .filter( (num) => num>=40) // here it check after addition and return
console.log(newNum);
