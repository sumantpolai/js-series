// for of

const arr = [ 1,,2,3,4,5]
for (const num of arr ){
    console.log(num);
}


const greetings = "hello world"
for (const greet of greetings) {
 console.log(`each char is ${greet}`);    // here it print all the char with space
}

// === maps   => is known for unique values print based on enterd order

const map = new map()
map.set('IN'," india")
map.set('USA',"America")
//console.log(map);


for (const [key, value] of map) { // by using [] we can take two itterate
console.log(key, ':-', value);    // 
    
}

const myObject = {
    'game1': 'NFS',
    'gme2' : 'spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);      // error bcz here myobject is not a itirable
    
// }