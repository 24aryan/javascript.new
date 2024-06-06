let mydate =new Date();
// the date in js is calculated in ms 

//This line of code creates a new instance of the JavaScript Date object and assigns it to the variable `mydate`. Here's what each part does:

console.log(typeof mydate)
// - `new Date()`: This is a constructor function in JavaScript that creates a new Date object representing the current date and time.
// - `let mydate = ...`: This declares a new variable named `mydate` and assigns the newly created Date object to it.

// So, after executing this line of code, the variable `mydate` will contain the current date and time.

//console.log(mydate);
// 2024-04-27T08:10:16.299Z

// so here by printing this variables value we get something like this 
// and we can't get correct time 

// so do that we convert this datatype into other multiple methods 

console.log(mydate.toString());

// instead by converting it into string now we can read the date
// there can be multiple more functions for it

console.log(mydate.toISOString());
//2024-04-27T08:15:41.180Z

console.log(mydate.toLocaleString());
//27/4/2024, 1:45:41 pm

console.log(mydate.toDateString());
//Sat Apr 27 2024

console.log(mydate.toJSON());
// 2024-04-27T08:18:12.860Z

//      *******************************************************************************************************************************   //

// now what if we want to pass any specific date,time and hour also
//here we are taking  date 
let createdate = new Date(2004 , 6 ,24);
// we have passed a date in yyyy/mm/dd format here and it's in single digit seperated 
// and in js here  the month start from 0 -11 as it's an array

// we can declare it 
let newdate =new Date("2024-1-24");
// can write in mm/dd/yyyy
console.log(newdate.toDateString());
//here whole date is written and here months count from 1 as written in commas 

console.log(createdate.toDateString());
// Sat Jul 24 2004

// for exact time & date 
let createdate2 = new Date(2004 , 6 ,24, 8, 25, 30 );
console.log(createdate2.toLocaleString());
//24/7/2004, 8:25:30 am
// locale string gives you date along with time that too in hour min sec


//Time stamp mainly used for comparing the time in milisec

let timestamp = Date.now()
// Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).
console.log(timestamp);

let date = new Date(2024 , 5 ,6)
console.log(date.getTime());
// .gettime() Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
// but here we have date. as reference so it calculates the time from that period 

console.log(date.getMonth()+1)
// here +1 is used as month start from 0 in js bcoz of array
// basic more methods are there which we can access easily by referencing the object 

date.toLocaleString('default',{
    weekday:"short"
})
// as seen above the use of locale string  and we can further customize it here and for suggestion use ctrl+space 
