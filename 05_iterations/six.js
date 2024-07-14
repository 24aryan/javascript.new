// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

// now we get to know that we can't feturn anything from for each loop
// we can print only

const mynums =[1, 2, 3 ,4 ,5 , 6 ,7 ,8 ,9 ,10];

// filter work kinda same but returns the result
// declare acall back function and then store it in a variable to get it
// here explicit return works directly write conditon or write it paranthesis no need to write return 

const newnum = mynums.filter((num)=> {
   return num > 4
    // now here if we have curly brackets the value inside will be treated as object need to write return to return anything
})
console.log(newnum);


// here by using foreach doing the same 
// created a empty array then with a if condition
// iterating the my nums array and by cinditon pushing into our empty arrays


// const newNums =[]

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  // now we have an user and according to his needs we will fetch the data from array

  let userbooks = books.filter((bk)=> bk.genre === 'Non-Fiction') // checking a condition if genre is Non-Fiction or not
  // using let as we can re write according to demands

userbooks = books.filter((bk) => {
    return bk.publish > 2010 && bk.genre === 'Science'
})

  console.log(userbooks);


