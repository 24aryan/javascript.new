

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object

const user ={
     
    username : "Aryan" ,
     price : 800 ,
     welcomemessage : function () {
        // here we created a function with message
        // using this.username to get the current context's reference of the variable as the username might get change 
        //and print it 
        console.log(`${this.username} , Welcome to the website`);
        // printing the this keyword alone
        // it is giving context reference means will give info about the whole object as it's inside the scope
        // console.log(this);
     }
}
// user.welcomemessage()
// // modifiying the value of username 
// user.username = "Mishra"
// user.welcomemessage()

// now if we eprint keyword this here it is will give us the o/p empty {} as we are using node environment
//a nd in  the close scope nothing is declare so context or reference exists
// console.log(this);
// but if we do same in browser it will give you window o/p as it's the browser engine in which is running
// and we can see context and features we can use in the browser from that

// function chai(){
//     const username ="Acer"
//     // now here comes the error and this will not work as it is a function not an object  and same will happen if declared as expression 
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


// here removing a=function keywordd and using => (arrow) to declare arrow function
const chai =  () => {
    let username = "hitesh"
    // even in arrow function you can't use this for reference of a variablr
    // and alone it will give {} only 
    console.log(this);
}

// declaring arrow function 
// using return as declaring in curly brackets
const add_Two = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(5 , 8) );
 

// implict return 
// no need to use return keyord as statement is of one line only 
// const addTwo = (num1, num2) =>  num1 + num2

// can use as wrapping variables in paranthesis 
// const addTwo = (num1, num2) => ( num1 + num2)

// even to print a object we can to wrap it inside paranthesis 
const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo());