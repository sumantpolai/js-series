function sayMyName(){
    console.log("s");
    console.log("u");
    console.log("m");
    console.log("a");
    console.log("n");
    console.log("t");
}

sayMyName()        // only sayMyName is reference after aading () then it is execution 


function addTwoNumber(number1 ,number2){   // here number1 and number2 are called parameters
    console.log(number1+number2);
}

addTwoNumber(3,4)  // 7 if we not pass arguments/values then it shows NaN


// const result =addTwoNumber(3,5)
// console.log(result);  // it not give the 8 



function addNumber(num1,num2) {
    // let result= num1+num2
    // return result      // if after return any code is there then function do not execute that
                    // in function if we return something then only we can store in another variable

   return num1 + num2  // we can also use this method in steade of these two line                


    }
const result =addNumber(3,5)
console.log("result : ",result);   // here it print the result : 8



function loginUserMessage(username){

    // function loginUserMessage(username=sam){  // we can also gave a defult value      
                                              //if we pass any argument then it override
    return`${username} just logged in`
}
console.log(loginUserMessage("sumant"));  // it is a differenet way to take parameter


//====== if not gave the value then we use conditions

// function loginUserMessage(username){
//     if (!username) {
//         console.log("please enter a username");
//         return
//     }
//     return`${username} just logged in`
// }
// console.log(loginUserMessage());   //here it print Please enter a value 