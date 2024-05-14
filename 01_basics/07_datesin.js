// Dates


let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// let myCreateDate =new Date(2023, 0, 23)
// console.log(myCreateDate.toDateString());

let myCreateDate =new Date("01-14-2023")
console.log(myCreateDate.toLocaleString());   // 1/14/2023, 12:00:00


let myTimeStamp =Date.now()
console.log(myTimeStamp);   // showing the time in mili seconds

console.log(myCreateDate.getTime());     // showing in mili second from created date to current date


console.log(Math.floor(Date.now()/1000));     // showing in second and math.floor is used to remove the after decimal

let newDate =new Date()
console.log(newDate.getMonth()+1);  //show the current month
newDate.toLocaleString('default',{
    weekday:"long",
})