// when control flow statements are checked some values are considered to be true directly and
// some are considered false

// this affects a lot in the result of the overall control flow and change the answers

const userEmail = []
// here this empty array is considered true but an "" (empty string) would be considered as false

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// in general there are somwe predefined values which are true or false
// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN (not an number)

//truthy values
// "0" (zero in a string is truthy), 'false'(false in string is truthy), " "(space in string is truthy), [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

// now here checking if an obejct is empty or not
// at first calling object keyword and then getting all the keys of the object in the parathesis 
// the object written like this in paranthsis will give the value in array format 
// now it is an array so check it's length to get if it's empty or not
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

// mainly used ti handle errors
// used to check the value of a variable when fetching from db to ensure between multiple values which to assign 

let val1;
// val1 = 5 ?? 10
// here first value is assigned as there are options here
// val1 = null ?? 10
// here we are asking between the null and value so the value will be assigned
// val1 = undefined ?? 15
// same goes wuth this one

// in real projects between null and undefuned we will be given a complex function from where value is getting fetched if it happens then it will bw assigned
// or else the null or undefined will be used to move the process further

// val1 = null ?? 10 ?? 20
//here comparsion between multiple value is used 

// Terniary Operator
// uses the ? to check between multiple condition 
// whichever is true will be executed

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")