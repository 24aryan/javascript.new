let a =100
// var b =20
// const c =30


// now if we print they will get the value , but if all gives you value what's the need of three type of declaration of variable

// scope means {} whatever happens inside is state as in the scope
// this is valid for fuctions , if else and all not for objects 

if(true){
    let a =10
   const b =20
   console.log("inside :" , a);
//   var c =30
}
// now we have declared a condtion and declared variables inside it check there effect

// console.log(a);
// when a is printed it gives error as we are printing it outside the scope which is let
// console.log(b);
// same happens with b which is const
// both of them are declared in  block scope or local scope  as they are valid inside them only
// console.log(c);
// but the c is printed even it is declared inside the scope as it acts as a global variable which gives value wherever declared 
// which leads to overwrite of values and bugs

// and we can variable of same name but they will be valid in their scope only if declared as global then like it 
// and if in ablock of scope valid for that only

// the scope in browser cors and in the node acts differently


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function one(){
    const username = "Aryan"

    // declaring function in function

    function two(){
      const website ="Youtube"
      // printing the variable of first function we can do this
      console.log(username);
    }
    // using variable of two
    // but can't use it as it's out of scope
    // console.log(website);
    // calling two
    two() 
}

// one()

if(true){
    const username ="Aryan"
    if(username==="Aryan"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); it is an error
}
// console.log(username);it is an error

//++++++++++++++++++++++++++++++++++ interesting

//here we can call function before it's declarement
console.log(addone(5))
// one way to declare function
function addone(num){
   return num +1
}

// but here we can't call it 
// now declaring it as an expression
const numtwo = function (num){
    return num+2
}

console.log(numtwo(8))
