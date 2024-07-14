// maps

const newnums = [1, 2, 3 ,4 ,5 , 6 ,7 ,8 ,9 ,10];

// it will also return function but not on conditions

const num = newnums.map((item)=> item +15)
// console.log(num);

//  now trying chanong multiple function into each other

const aryan = newnums.map((item)=> item * 8 )
                     .map((item)=> item - 4)
                     .filter((item)=> item >16)

                     console.log(aryan);