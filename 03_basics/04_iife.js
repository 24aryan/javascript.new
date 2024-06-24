// Immediately invoked function expression

// it is mainly used to directly invoke the function
// as sometimes the variable value gets polluted by the global variable so in order to save it iife is used

// so in iife we wrap the function in the paranthesis and write one more paranthesis outside it as we do when we call a function 
// it allows to directly invoke the function
(function chai(){
    console.log(`DB CONNECTED`);
})() ;
// this is known as named iife

 // now there is a limitation of iife that it don't know where to stop the function 
 // so if without stopping the current any other function is invoked it will not run 
 // in order to stop that we need to use ; 

 // we can use iife in arrow function also
 (()=>{
    console.log(`DB CONNECTED 2`);
 }) ();
 // known as unnamed iife
 // it acts as function only if given a parameter it can be passed in second paranthesis