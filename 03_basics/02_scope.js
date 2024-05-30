function one(){
    const username="sumanta"


    function two(){
        const website ="youtube"
        console.log(username);

    }
    //console.log(website);   // here we can not access the website bcz we in outside of the scope
    two()
}
//one()

if (true) {
    const username="sumanta"
    if (username==="sumanta ") {
        const website =" youtube"
        console.log(username + website);
        
    }
    //console.log(website);   // here we can not access bcz out of scope
    
}
//console.log(username);    // also here we can not access bcz out of scope




//============= intresting =============


function addone(num){
    return num + 1
}

addone(5)


const addTwo= function(num){    // here we declare a function and hold that function in a variable
    return num + 2
}
addTwo(5)