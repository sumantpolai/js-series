const promiseOne = new Promise(function(resolve,reject){     // in promise there are two part is present resolve and reject
        // hwere we do async task
        // database calls, cryptography , network call
   setTimeout(function(){
    console.log('Async task is complete');
    resolve()  // here we connect the resolve with .then()
   },1000)     

})    // here promise creation is end

promiseOne.then(function(){       // here promise is consumed
    console.log('promisw is consumed');
})



new promise(function(resolve,reject){    // another way
    setTimeout(function(){
        console.log('async 2');
        resolve()
    },1000)
}).then(function(){
       console.log('async 2 resolved');
})


const promiseThree = new promise(function(resolve,reject){
         setTimeout(function(){
            resolve({username: 'chai', email : 'chai@example.com'})   // here we pass the value on resolve which is connecct with then in array format
         },1000)
})
promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : 'sumanta', password: '123'})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

 promiseFour.then((user) => {
    console.log(user);   //here if errro is not there then it print the the username and pass. and dont print the error msg if there then print the catch part or  reject part
    return user.username  // here  we return user name 
 }).then((username) => {   // here we do chaining
    console.log(username);  // here we print the user name
 }).catch(function(error){   // here we catch the error
    console.log(error);   
 }).finally(() => console.log('the promise is finally either resolved or rejected'))   // this part is must print either is resolve or reject



  const promiseFive = new promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : 'javascript', password: '123'})
        }else{
            reject('ERROR: js went wrong')
        }
    },1000) 

  })
  // async await    // is type of then and catch but here we use try catch block
                    // async await not directly handled the error
    async  function consumePromiseFive(){
        try {
            const response = await consumePromiseFive
            console.log(response);
        } catch (error) {
            console.log(error);
            
        }
    }
    consumePromiseFive()


    // async function getAllUser (){
    //   try {
    //     const response1 = await fetch('https://jsonplaceholder.typicode.com/users')
    //   const data = await response1.json()   // here we use await bcz responce take time to convert into json
    //   } catch (error) {
    //     console.log('E:', error);
    //   }
    // }
    // addEventListener()


    // same thing in then and catch way

    fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
       return response.json()  // here we return the json 
    }).then((data)=>{      // here we handel the json
        console.log(data);
    }).catch((error)=> console.log(error))
    
