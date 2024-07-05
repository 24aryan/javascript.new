// control flow is a type of statements or condition used to check things and if they satisfy then only it will run

// if 


// if(condtion){
//    // if conditon is true it will run if false not 
// }else{

// }

// > , < .>=,<= ,!= , == , ===(Strict equal used to check the condition as well as the datatype) , !==

const score =200

// if(score > 100){
//     const power = "fly"
//     console.log(`User's power is to ${power}`);
// }

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("paisa hi paisa");

// }

const userloggedin =true
const debitcard = true
const loggedinfromgoogle =true
const loggedinfromemail =true

if(userloggedin && debitcard){
    //here && is used to check of both condititon is true
    console.log("Allow purchase");
}

if(loggedinfromemail || loggedinfromgoogle){
    // here ||  check if any one condition is true
    console.log("Register");
}
