const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (item) {     // bcz of callback function dont have any name
//  console.log(item);
// })     


// coding.forEach( (item) => {  // another way
//     console.log(item);
// })


// function printMe(item){   // another way
//     console.log(item);
// }
// coding.forEach(printMe)   


// coding.forEach( (item, index, arr)=> {  // another way
//     console.log(item, index, arrr);     // here it print item and index and arr reference

// })


const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "python",
        languageFile: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);  // here we access the all arrays languagename
})