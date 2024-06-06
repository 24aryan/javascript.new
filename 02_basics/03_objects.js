// singleton
// when variable made with constructor its sinleton one of it's kind only

// object literals 
// they are different from sinleton
// declaring an object , object have key and values

// declaring a symbol

const sym =Symbol("ams")
// can add a key by it's name then declare a value for it 
const jsuser = {
    name:"aryan",
    // adding a symbol by name only
    // syntax for symbol [const name]
    [sym]:"alpha",
    age:19,
    location:"Ahmedabad",
    email_id : "aryanmishra570.com",
    loggedin: false,
    last_logs: ["monday","Wednesday","Saturday"]
}
// here name is the key and the aryan is value in it
// here the keys also acts as a string in backend 

// now how to access the object 

console.log(jsuser.email_id)
// not preferable to use

console.log(jsuser["email_id"])
// here using sqaure bracket value is accessed 
// here if the value is in string you need to access key as a string here also 
// and in any chance both are declared in string only you need to use this method only

//console.log(jsuser.sym);
// here it looks like symbol is working prperly but the value it's giving is string not symbol
// means the key gets declared but the data type didn't came  as expected so to do that use sqaure bracket to declare it in object and at access 
console.log(jsuser[sym]);


// now if we want to change the value in object just
jsuser.email_id= "aryanmishramicrosoft.com"
// by uisng eqauls can rewrite the value of the key 

// now if we want that no one can change the value just freeze the object 
// Object.freeze(jsuser)
// check 
jsuser.email_id="aryanhike.com"
console.log(jsuser);


// defining function
// here greeting property is assigned to jsuser
// in which a function is there without parameters and a message
jsuser.greeting = function(){
    console.log("Hello JS user")
}
jsuser.greeting2 = function(){
    // we can print it's other keys also 
    // ` ` is called interpolation in js and now to access  value of object use $ then this in curly
    console.log(`Hello JS user , ${this.age}`)
}
// calling the property which is now act as a method
console.log(jsuser.greeting())
console.log(jsuser.greeting2())