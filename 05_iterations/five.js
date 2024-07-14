// for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
// here using for each loop
// in which we require call back function means declare a function to do some task
//     console.log(val);
// } )

coding.forEach((item)=>{
    //  console.log(item);
})
// declaring as arrow function

function printme(item){
    // console.log(item);
}

// coding.forEach(printme)
// here referencing a pre declared function in the loop
// we need to only give reference not execute it

// now for each not only iterate to the elements and items 
// but can iterate to the index and to whole array

coding.forEach((item , index , coding)=>{
    console.log(item , index , coding);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// now wew have an array of objects and we need to iterate in them and get our values
// in order to do so we can use this loop

myCoding.forEach((item)=>{
console.log(item.languageFileName);
// here i can iterate the whole array and in that each object as ana item and to reach its property using a reference with (.) to access other 
// properties in that object
})