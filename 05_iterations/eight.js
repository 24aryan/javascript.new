// reduce 

const myNums = [1, 2, 3]

//  here reduce is used we require an accumulator(acc) and current value and an initial value is passed to start the acc

// everytime the result of the function willl store in acc and will kove to next element for the operation with the stored value

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// here 0 is the initial value
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total = shoppingCart.reduce((acc,curr)=> acc + curr.price , 0)
console.log(total);