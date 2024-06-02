const myNums =[1,2,3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc}, and curval: ${currval}`);
//     return acc + currval
// },0)   // after comma whatever value we gave that is acc

// console.log(myTotal);


const myTotal = myNums.reduce((acc, curval) => acc+curval,0)   //another way
console.log(myTotal);


const shoppingCart = [
 {
    itemName: "js course",
    price: 2999
 },
 {
    itemName: "mobile dev course",
    price: 4999
 },
 {
    itemName: "data science course",
    price: 12999
 }
]

const priceToPay = shoppingCart.reduce( (item) => acc + item.price,0)
console.log(priceToPay);  // here add all price and return that