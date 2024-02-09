// here in this chapter we are going to learn about conversion and form of types of variables 

// here we are declaring two variables but the difference here is the one which is not in inverted commas is a number type of variable
// and the other one is defined as a string

let score = 33
let score2 ="33"

// now assume a situation when we don't know which variable type is this . so, to do this we can find it 

// m-1
console.log(typeof score);

//m-2
console.log(typeof (score2));

// both them are correct to determine the type of variable

// now the main lesson
// here we are doing type coversion using the word number converting string type of variable into number
// and the same can be done in other data types as well
let isnumber = Number(score2);
console.log(typeof isnumber);

// now special case 
let score3 ="123abc"

// it's a string type completely and it can'be converted in number completely bcoz of alphabets present in it
//as they will eventually be lost but give it a try and check what's the output

let valuenumber = Number(score3);
console.log(typeof valuenumber);

// the answer shows it  become a number 
// now just print the value to check what is remaining 

console.log(valuenumber);
// it states Nan which means not anumber 
// but still on checking it's type,it shows a number so be careful of this  in js
// same for null it shows 0 , for undefined and a pure alphabetic string NaN , for boolean 1 or 0

// now boolean type of conversion

let isboolean = "aryan"
let newboolean = Boolean(isboolean);
console.log(typeof newboolean);
console.log(newboolean);

// 0=> flase; 1=> true
//""=> false;"aryan"=>true
// here we can see for every reult there is a answer true or false but gets converted in boolean as a data type