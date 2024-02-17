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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack(primitive)  heap(non-primitive)
// primitive -call by value(give copy)
// non-primitive - call by reference (give original)

let myname="Aryan";
//storing the value of one variable to another
let anothername=myname;
//now assigning new value to another name
anothername="Mishra"
// both the values for this log will be different 
// but we are calling same as another name stores my name and then we gave new value to it 
// it's because the value we are calling from another name was just a copy . so original don't get remove and returns 
// it's called call by value in this the value's copy is called not the original (primitive data-type)
console.log(anothername);
console.log(myname);

// now here we declared a object which is non-primitive 
let one={
   name:"Aryan",
   age:"19"
}
let two=one
// here the answer will be printed same and it should be because we didn't gave another value
//but the major difference is unlike the primitve data-type here the value will be called y reference
// and in this the original value will print not the copy
console.log(one);
console.log(two);

// now try changing and assigning new value
two.age="20"
// now unlike as we tried to assign value in primitive but the value didn't change because it was copy
// here the value is changed because both are coming by reference and changes simultaneously
console.log(one.age);
console.log(two.age);
