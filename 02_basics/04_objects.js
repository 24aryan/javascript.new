// forming a singleton objecct using constructor
//const netflix_user = new Object()

// and with literal we declare a object like
 const netflix = {}
// both are same and a t this time will return empty

// now giving some properties 
// here eqauls to can be used to declare
netflix.id ="aryanmishra"
netflix.age=25
netflix.isloggedin = false

//console.log(netflix);

const figma = {
    email : "aryanmishra570 ",
    // here nesting object into object and further on
     username : {
        fullname: {
            firstname: "Aryan",
            lastname :"Mishra"
        }
    }
}
// here by referencing we can as deep as possible 
// console.log(figma.username.fullname.firstname);

// now adding two objects 
const obj1 ={
    1 : "a",
    2:"b"
}
const obj2 ={
    3 : "c",
    4:"d"
}
// Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// {} indicates the target object not compulsory to add but ensures to store in the target when values are more than 2
// mainly adds two objects
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);
// o/p { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// one ore easy way is to simply use spread method 
const obj4 = {...obj1,...obj2}
// console.log(obj4);

// now when we will fetch data from database it will come in an array of objects 

const data =[
    {
        3 : "c",
    4:"d"
},
{
    3 : "c",
4:"d"
},
{
    3 : "c",
4:"d"
},
{
    3 : "c",
4:"d"
},
]

// now if we want to feetch data same as array then for key reference with dot
// console.log(data[2][3])

// or to directly fetch a object values as an array
// syntax: object define then reference all the keys then object name
// this method gives key and values an array form on which multiple operations can be performed
// console.log(Object.keys(netflix));
// o/p [ 'id', 'age', 'isloggedin' ]
// gives value 
// console.log(Object.values(netflix));
// gives key value array in array 
// console.log(Object.entries(netflix));

//Determines whether an object has a property with the specified name.
//console.log(netflix.hasOwnProperty("isloggedin"));

//***************************************object deconstructor ****************************************

const course ={
    course_name: "js",
    course_price: 999 ,
    course_Instructor :"Hitesh sir"
}
// now to fetch value we use both are correct
course.course_Instructor 
course["course_Instructor"]

 // a new method const then key in curly equals to obejct name then no need to write object name again can dirctly do that
 // can give new name to key at that time
 const {course_Instructor : Instr} = course
 console.log(course_Instructor);


 // json (javascript object notation ) used for api 
 // syntax like object {} without name  or can be array also 
 // it's like a object w/o name 
 // here both the key and value will be in string form
 {

 }

//  or
[
    {

    },
    {

    }
]