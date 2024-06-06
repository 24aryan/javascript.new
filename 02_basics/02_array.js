const marvel_heros = ["thor","ironman","captain"]
const dc_heros = ["superman","batman","flash"]

// now trying to push the dc in the marvel
  //marvel_heros.push(dc_heros)
//push modifies the original array itself

 //console.log(marvel_heros);

// here we can see in the o/p that the whole dc array gets inserted int the marvel array as a element
// but we expected to add elements only 
// this happend bcoz of the property of array adding elements of any data types 

// now concat()

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

// here two arrays is getting joined as the other array is not getting added as a array element 
// but all it's element gets added individually

// spread method 
// consider a glass and drop it what will happen it will spread into pieces same thing happens here
// spread is declared using ... in front of variable  in the square bracket it will create an array

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);
// does same work as concat but more preferable as can add multiple array at once

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// here multiple level of subarray array exist in an array and we need to combine them or say concat them
const new_another_array = another_array.flat(Infinity)
//here in such case flat os used to overcome such situation it solves the no.of depth defined 
//or you can simply declare infinity to solve all depths
console.log(new_another_array);


// now for example taking data from anywhere else and want to know it's type if it's array or not
// or want to convert it in array

console.log(Array.isArray("Aryan"))
// here using Array ds and with its method isarray() checking if its an array or not 

console.log(Array.from("Aryan"))
// here we can convert anything into array using from() method 

// in any situation when it can't convert it gives empty array [    ]
console.log(Array.from({name: "hitesh"})) // interesting like this 
// at this time we need to define the key which need to be converted


let score1 =100
let score2 = 200
let score3 = 300
// using of() method which uses a set of elements to include in the new array object.
//Returns a new array from a set of elements.
console.log(Array.of(score1,score2,score3))

