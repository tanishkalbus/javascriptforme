// conditioal statements 


// 1. if statement 
// common syntax

// let a = "something"

// if (a = "something"){
//     console.log("this works ");
// }

// simplipily works checks the condition on variable and then exceute the code 

// to understand this better we want to switch the website layout to black color so exceute this on lower level

/*
let mode = "dark"
let color;

if (mode === "dark"){
    color = "black"
}

 console.log(color);
*/


// now the second statements are if else statements 
// so these are mostly use when we want to check that is this code we can execute or not mostly when we have only one condition 
/*
let age = 12

if (age >= 18){
    console.log("you can vote");
}  else{
    console.log("you cannoot vote ");
}
*/


// now the third statement are else if statements so this used when we need to check to multiple 
// conditions rather than using if statements we can use else if statments 


// TERNARY OPERATOR 
// speical operator works on 3 operants in which first one is condition and other are outputs 
// synatax - a ? b : c 
// it means first of all we need to check the condition is it true or false 
// if the condition is true then b will be excecuted and if not then c will be executed 


let age = 23;

let result = age>=18 ? "adult" : "not adult";

console.log(result);
