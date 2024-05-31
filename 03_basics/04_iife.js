// Imediately Invoked Function Expression  (IIFE)
// we use 'IIFE' to avoide global scope pollution

(function chai(){    // it is called named IIFE
    console.log(`DB CONNECTED`);
})();   // it is called iife 
       // first '()' is used to wrape the function defination and second '()' is execution 
       // to end the iife we must write semicolon
       
// ( ()=>{
//     console.log(`DB CONNECTED`);
// })();                      // another way 


( (name)=>{          // unnamed IIFE
    console.log(`DB CONNECTED TO ${name}`);
})('sumanta')  