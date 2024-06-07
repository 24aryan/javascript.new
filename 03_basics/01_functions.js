// syntax to declare function 
// function name of function parameter if any 

function sayname(){
    console.log("a");
    console.log("r");
    console.log("y");
    console.log("a");
    console.log("n");
}

// refering a function is declaring it's name 
//and calling is 
// sayname()

// function addtwonumber(number1 , number2){
//     console.log(number1+number2)
// }
// pass the argument 
// addtwonumber(4 , 8)

// now let us store this value in a variable
// const result = addtwonumber(4,7)
// and check the anser stored in result specifically

// console.log("result" , result);
// it gives result undefined because the console is printing the value
// but the value isn't getting stored in the variable bcoz we are not returning anything which can be stored just printing

function addtwonumber2(number1 , number2){
    let result2 = number1 + number2
    return result2
    // now as we are returning it will gives ans
}
 const result2 = addtwonumber2(47 , 5)


 // let write a fucnction which take username and a msg
 function justloggedin(username = "aryan"){
    //can just predefine a value in parameter as above
    // here if no value is entered it will show aryan or if any value is passed it will be overwrite
    // and if want to prevent the undefined parameter by not predefining 
    if(!username){
        console.log("Enter username");
        return
    }
    return `${username} just logged in `
 }

 console.log(justloggedin("suresh"));
//  but if we don't pass argument it will give undefined so how to detect that if name is there or not use if else 

//////////////////next lecture ///////////////////////////////////////

// now assume we have a shopping cart we need to add elements and add their prices
// but the problem is we don't know how many parameters or say items will be there 

// here this function have one argument and can return only one value
function calculatecart(num1){
    return num1
}

// now using rest method which is same in declaration of spread
// with rest method we can pass as many parameter we want and it will give the values in an array on which further methods can be applied
function calculatecartprice(...num1){
    return num1
}
console.log(calculatecartprice(200,400,800,450));

// let us use object in function

const user ={
    name:"Aryan",
    price:199
}
// creating a function and passing anyobject as paramter
function handleobject(anyobject){
    // now we are printing with string polarize and fetching object key value 
    // but we need to be very specific with key name as change in it result to undefined values
      console.log(`the user ${anyobject.name} has a bill of ${anyobject.price}`)
}
handleobject(user)
// we can directly pass the value of object in parameter only 

// passing array
const myarray = [12,84,75,78]

function givesecondindex(anyarray){
    return anyarray[1]
}
console.log(givesecondindex(myarray))
