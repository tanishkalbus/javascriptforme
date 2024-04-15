// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)  take arguments and use to add element in last 
// myArr.push(7)
// myArr.pop()   don't take any arguments and use to remove element in last 

// myArr.unshift(9)      use to add element on first index of array 
// myArr.shift()         use to remove first index  of array 

// console.log(myArr.includes(9));      use to check whether this array includes 9 or not and answer would be in boolean 
// console.log(myArr.indexOf(3));       use to find the element at index 3 // output  3

// const newArr = myArr.join()          use to convert that array into string 
 
// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)       // doesn't bring changes in original array 

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)          // bring changes in original array 
console.log("C ", myArr);
console.log(myn2);