const user = {
    username: "sumanta",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);  // here it print the current context
                            
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()


//console.log(this);   // here it print {} bcz it present in node environment and in global there is no context is present
                       // In browser there is a global object is present that is window object

//  function chai(){
//     let username = "sumanta"
//  console.log(this)  
//  //console.log(this.username);  // here it shows undefined bcz  In 'function' we cant use 'this' in this type but we can use in object
//   }
//   chai()


// const chai = function() {
//     let username = "sumanta"
//     console.log(this.username); // here also it shows undefined 

// }
// chai()


// const chai =  () => {      // it is arrow function
//     let username = "sumanta"
//     console.log(this.username); // here also shows undefined
// }
// chai()




// const addtwo = (num1 , num2)=>{
//     return num1 + num2    // If '{}' is used then must write the return
                             // Also known as explicit return
// }

const addtwo = (num1, num2) => (num1 + num2)   // another way to represent arrow function . Also known as ' implicit return'
                                               // If '()' is used then no need to write return 

//const addtwo =(num1, num2) =>({username: "sumanta"})       // to return an object we must wrape the object with in the '()'                                        
console.log(addtwo(3,4));  // 7


