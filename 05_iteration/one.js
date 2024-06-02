//=== for ==

for (let i = 0; i <=10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best");
        
    }
    console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    console.log(`outer value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(` ${i} * ${j} = ${i*j}`);   // to print 1 - 10 table
        
    }
}




//    === break  and  continue  =======


for (let i = 0; i < 20; i++) {
    if(i == 5){
    console.log(`Detected 5`);
    break                  // after break the loop is stop
}
console.log(`value of i is ${i}`);   
}




for (let i = 0; i < 20; i++) {
    if(i == 5){
    console.log(`Detected 5`);
    continue              // condition is skiped once     
}
console.log(`value of i is ${i}`);
    
}