const myObject ={
    js: 'javascript',
    cpp: 'c++',
    rb: "rubby",
    swift:"swift by apple"
}

// forin loop
for (const key in myObject) {
    console.log(key);  // here only print the key not object
    console.log(`${key} shortkey is for ${myObject[key]}`);  // here it print all the keys withe the object or values
    
}

const programming =["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(key); // here in forin loop here it print only key means 0,,1,2,.. like
    console.log(programming[key]);  // here it print all the keys 


   
}



// const map = new map()
// map.set('IN'," india")
// map.set('USA',"America")

// for (const key in map) {
//     console.log(key);  // here it print nothing bcz map is nota iterable
// }