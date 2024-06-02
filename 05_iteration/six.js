// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) =>{
//     console.log(item);
//     return item
// })
// console.log(values);  // foreach did not return any value after write return also


const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNum.filter( (num) => num > 4)
// const newNums = myNum.filter( (num) => {   // if we use ' {} ' then we must return that o.w it return empty []
//    return num > 4
// })

console.log(newNums);     // but in filter there is a callback function where we access all values but we need gave a condition   



const Books =[{
    title: 'Book One', genre: 'physics', publish: 1987, edition: 2010},
    {title: 'Book Two', genre: 'History', publish: 1988, edition: 2014},
    {title: 'Book three', genre: 'Fiction', publish: 1970, edition: 2015},
    {title: 'Book four', genre: 'history', publish: 1999, edition: 2016}
];

const userBooks = Books.filter ( (bk) => bk.genre === 'history')
console.log(userBooks);  // here we access the Book arr and check genre and print those whoe genre is history
