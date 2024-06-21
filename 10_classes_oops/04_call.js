function setUsername(username){
    this.username = username
    console.log('called');
}

function createUsername (username,email, password){
    setUsername.call(this, username)   // call method pass the current exectation context to another function and hold the reference 
                                       // here setusernames context pass to the createusername function 
    this.email=email;
    this.password= password
}


const chai = new createUsername('chai','chai@123', '123')
console.log(chai);    