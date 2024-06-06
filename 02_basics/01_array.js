// array

const myarr = [1,2,3,4,5]
const sup = ["ironman","captain"]
const myarr2 =new Array(5,4,48,8,9)
// different methods to declare an array in js

// here array is a data structure which contains multiple element irrespective to their data type in a sinlge variable
// array is js are resizable can add or subtract element further
// array has zero based indexeding and accessed like that
// array in java on doing copy creates shallow copy
// means comes from same reference point i.e changing in copy changes the original
// not like deep copies which don't have same reference point
// can access a property prototype

//****************************************methods *******************************************************/
console.log(myarr.length);
// to find the length of Array

myarr2.push(57)
myarr2.push(7)
// to add element in array

myarr2.pop()
// no need to clarify it just removes the last element from array

myarr2.unshift(69)
// used to insert the element at start of array
//not used as in a large no.of data need to shift all elements 

myarr2.shift()
// opposite of shift removes from start no need to give argument 

console.log(myarr2);
// to print the whole array

// **************some question methods*********************

console.log(myarr.includes(8));
// here it is used to find of the element exists in array or not 
// it gives answer in boolean

console.log(myarr.indexOf(4));
// gives the index of the element
// and if not exists gives -1 as o/p

const newarr = myarr.join()
// here this function is used to join to variables or say array
// but after joining it converts the array into a string 
console.log(myarr);
console.log(newarr);


// slice and splice 
console.log("a" , myarr);

const myn1 = myarr.slice(1,3)
console.log(myn1);
console.log("b" , myarr);


const myn2 = myarr.splice(1,3)
console.log(myn2);
console.log("c" , myarr);

// here at first we printed the array

// then used slice method with 1,3 index in which last one is not considered 
// here the main thing is a part of the array gets printed but the original array remains unaffected 

// then use splice method with 1,3 index here the last range will be considered
// but here the spliced elements printed is part of array makung a completed ifferent array affecting the original one
// that maens the splice range of elements no longer exist in the original array any more  

