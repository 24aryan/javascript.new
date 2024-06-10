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

console.log(a);
// when a is printed it gives error as we are printing it outside the scope which is let
console.log(b);
// same happens with b which is const
// both of them are declared in  block scope or local scope  as they are valid inside them only
console.log(c);
// but the c is printed even it is declared inside the scope as it acts as a global variable which gives value wherever declared 
// which leads to overwrite of values and bugs

// and we can variable of same name but they will be valid in their scope only if declared as global then like it 
// and if in ablock of scope valid for that only

// the scope in browser cors and in the node acts differently
