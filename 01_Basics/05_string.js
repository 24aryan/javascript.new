const name="Aryan"
const repovalue=4

// here this is the modern way to print string 
// the ` ` is used to write and ${} in this is to print values of the variable 

 console.log(`hello my name is ${name} and my repo count is ${repovalue}`);

//declaring string using string builder
const gamename=new String('Aryan  M')
//by declaring in such a way string values are stored in key value format and it starts from 0
//and with this we can use multiple methods of string

// here we printing the first key value of string
console.log(gamename[0]);

// in this all the method of string exists if printed it will empty but have methods
// console.log(gamename__proto__)

// nut we can access this method and to see this methods we can call 
//const gamename=new String('AryanM') in terminal.

//example of a method to find length if string
console.log(gamename.length);
// similarly different methods are uppercase(),charAt(),indexof()

// then we have .substring to print elements from specified indexies
// and a similar one slice and we can print reverse elements in this by giving negative index

// const newstring=gamename.slice(-5,2)
// console.log(newstring);
 // a bit of problem in understanding of this index

 const newone="    Aryan    "
 // now here in this string i have a lot of space which i don't need if i want to create a database so i will use trim to remove this spaces
 // and we have trim start and trim end methods also
 // it works on white spaces and line terminators
//  console.log(newone);
//  console.log(newone.trim());

 // now we have a method replace() 
 // for eg we have an url and we want space in it but its something else there so we can use this 
 const link='https://Aryanmishra%20Aryan.com'
 // here it asked us what to replace and with what
 console.log(link.replace('%20','-'))

 // with this link we can ask if any element is present in it or not
 console.log(link.includes('aryan'));

 // then we have a method split to split the string on basics of character space word an it will split the string
 console.log(gamename.split(' '));

 //check as many methods you can and try
