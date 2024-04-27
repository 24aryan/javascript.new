const score = 400
// console.log(score);

// here we have declared a variable but didin't defined it's datat type but still 
// it detected as a number 

const balance = new Number(400);
// console.log(balance);

// now we have declared it using new and number which ensure that it's a number only
// and by doing declaration in this way we can apply  ultiple function on this value
// and to check the available function write the same code in the console 
// it's applicable for many datatypes such as number strings and etc

// console.log(balance.toString().length);
// now we converte this number into string and now it holds all the function of string and we can use them 

// console.log(balance.length);
// but here we are seeing withot using tostring we can't use that functions
// but we had converted the value in string 
/// so the answer is for that console only the value is still getting fetched from initial decleration 

// now multiple funtion of maths are as 

console.log(balance.toFixed(2));
// here it's a function to give fixed value for example in a decimal it will only show the number of values  after point it is restricted to


var number=new Number(100.234)
console.log(number.toPrecision(4));
// this function decide the numbers want to displayed regardless of the point 


var hundred = 100000000;
console.log(hundred.toLocaleString());
// here there's this function locale string wich takes a higher value and simplify it by adding commas to it 
// but default it's in US pattern but to convert it in indian number system use 'en-IN'

// to explore more functions explore the console