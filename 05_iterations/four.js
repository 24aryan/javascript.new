// object 

// for in

const myobj ={
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myobj) {
   
    // console.log(key);

    // if we only print the iterator it will print only key in for-in loop
    // so to print it's value variablename[iterator]
    // this way of declaring will give you value of the key

    // console.log(myobj[key]);
}

//let's try this for array

const myarr = ["js", "rb", "py", "java", "cpp"]

for (const key in myarr) {
//   console.log(key);

  // here it printed the index values bcoz in array index value is its key only

  console.log(myarr[key]);
  // this will print elements of array
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

// the for-in loop don't work for maps bcoz of it's different functionalities