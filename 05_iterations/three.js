// for of

// [] [] []
// [{} , { } , {}]

const arr = [1, 2 ,3 , 4 , 5]

for (const num of arr) {
    // here iterator is the variable name and the object doesn't mean this loop works on object only
    // but it mean the thing on which looping is done 

    // just declare the variable then of and on which the loop we want 
    // no nedd of the limit and incrementer

    // console.log(num);
}

const greeting ="World Cup"
for(const greet of greeting){
    if( greet == " "){
        // console.log("space detected");
        continue;
    }

    // console.log(`each char at ${greet}`);
}

const map = new Map
map.set('IN' , "INDIA") 
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const key of map){
    // console.log(key);

    // here we are printing the each key of the map
    // but it will give us the whole object in array form not only the keys
}

// in order to get only key or value we need to destructure the array
for (const [key , value] of map) {
    // console.log(value);
    
    console.log(`key is ${key} and the value is ${value}`);
    
} 