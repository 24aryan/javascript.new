console.log( 2 >1);
console.log(2 < 1);
console.log(2 == 1);

// all of these examples of comparisons in same data type and quite normal

console.log("2" > 1);
console.log("2" >= 1);

// this examples are of comparisons between two different data types 
// but js willconvert them in one and give answer 

// but this isn't a good practice to do so avoid 

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// here null is a different data type and same for 0 also
//but it will give multiple ans for this  such as false,false,true
// this happens because comparison >= works differently from equality check > < = in js
// and in the last case it converts null in the zero so gives true as o/p


// so tackle this converting of data type problem we can use 
// strict check means === triple equals 
// it doesn't converts the datatype of give answer but instead check firast then proceed if it's valid to do so 
console.log("2" === 1);