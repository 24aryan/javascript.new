//JavaScript is a dynamically typed language, which means it can be changed through out the program.
// and don't need to define the type of variable assigning 

// data-types are basically divided into two types
//1. primitive
//2. non-primitive

// primitve data types are generally called by value

// there are almost 7 types of primitive datatypes
// string 
// number
//  boolean
//  null(empty)
//  undefined(variable assigned but not its value) 
//  symbol(usually used to make a variable unique)
//  BigInt (to store scientific values)



//and non-primitive data types are called by reference 
//they are also known as reference types
// Arrays
// objects
// Functions

// array declaration 
const heros=["ironman","thor"]

// object 
 let myobj={
    name:"Aryan",
    age: 19
 }

 // function can be treated as variable in js 
 let myfunction =function(){
    console.log("hello world");
 }


 // data-type return by checking type of 
 
// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function (its object function)
//        Object  =>  object