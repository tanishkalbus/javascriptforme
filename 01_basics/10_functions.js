// now read about functions so fuction is a block of code that perform any specific task and can be called 
// whenever needed 

// simple examples of fuctions is like console.log()


// now the simple structure of fuction would be 
// function myfuction(){       // and the input in fuction we defined as called parameter
//     console.log("l love js ");
// }
// and when our fuction is outside the then the parameter is called argument 




// function sum(x , y){
//       s = x + y 
// return s ;
// }

// console.log(s);    // now what happens that return to like to do the work return those value whenever the 
                  // the fuction is being called 
                // in more simple languague like imagine for a example 


            /*
            function calculatedarea(lenght, widht){
                area = length * widht;
                return area;
            }

            let rectangelearea = calculatedarea(length, widht);
            */


            // This function takes two arguments, length and width, representing the rectangle's dimensions.
            // Inside the function, area = length * width calculates the area.
            // The crucial part is the return area; statement. It sends the calculated area back to the code that called the function.
            // The returned value (stored in rectangleArea) is then printed to the console.


// now the concept of arrow fuction (compact way of writing a fuction )


// const fucntionname = (param1 , param2) => {
//     do some work
// }


// this function name can be used as anywhere 









// function sum(a , b){
//     s = a + b 
//     return s ;
// }


// sum(3,3)



// now the question is to create a fucntion which can count the number of vowels in string 

/*
function countvowels(str){
    let count = 0;
    for(let char of str){
        if(char === "a"|| char === "e" || char === "i"  || char === "o" || char ==="u"){
            count++;
        }
    }

    return count
}

let vowelsnumber = countvowels("tanishk")
console.log(vowelsnumber);
*/



// foreach loop (method of array )

// arr.foreach(callbackfunction)

// now in js those that we make can be used as also parameters and this is called callbackfunction
// a callback is a fuction passed as argument in another function 


// remember foreach loop only work for arrayssss


// we can pass three paramters in foreach 
// generally we use arrow function in foreach 
/*
let arr = [1, 2, 4, 5, 5 ];

arr.forEach(function everyval(val){
    console.log(val);
})
*/

// generally we use arrow function in this 


/*
let arr = [1, 2, 4, 5, 5 ];

arr.forEach((val , idx , arr) => {
    console.log(val , idx , arr);
})
*/


// 




// now a good question is in interview about what is higher order function / methods 
// those which take another functions as parameters or return function 



// question - create a function to print square of every number 
/*
let array = [2 , 3, 4, 5];

array.forEach((val)=>{
    console.log(val * val);
})  */


/*
let array = [2 , 3, 4, 5];

let newarray = array.forEach((val)=>{
    return val ;
})

console.log(newarray);
*/

// this doesn't work beacuse foreach doesn't make any new array 



// now some advanced array methodsss 


// now the method maps in js create a new array and perform operation 
//
/* 
let array = [2 , 3, 4, 5];

let newarray = array.map((val)=>{
    return val  ;
})

console.log(newarray);
*/




/*let array = [2 , 3, 4, 5];

let newarray = array.map((val)=>{
    return val % 2 === 0 ;
})

console.log(newarray);
*/

// now to apply a filter to a array we use filter method 


let array = [2 , 3, 4, 5];

let newarray = array.filter((val)=>{
    return val % 2 === 0 ;
})

console.log(newarray);





// now we use a reduce method to reduce it only to a single value use for task like sum, avg 

// we create a questio by using reduce 

// in reduce what happen is that prev and cur are assigned to first twoo values of arrays and then their result again stored in prev and cur move one step further and that's how it flows 




let arr = [ 5, 3, 2 , 90];

let bignum = arr.reduce((prev , cur) =>{
     if(prev > cur){
        return prev 

    } else{
        return cur
    }
})


console.log(bignum);




// practice question 
// question 1 = to make a program using filter to make filter out students which scored 90 above marks 

let studentsmarks = [98, 76 , 34 , 98 , 90 , 23 , 97 , 96 , 95 ];


let filteredstudents = studentsmarks.filter((val) => {
    if (val > 90){
        return val;
    }

        
    
})

console.log(filteredstudents);



// question 2 = to ask user for a number n and then to create a array from 1 to n and then to find the  sum and factorial of the number 


let n = prompt("enter your number ");


let array1 = [];


for( i= 1; i <=n ; i++){
    array1[i -1] = i ;

}


let sum = array1.reduce((prev , cur) => {
    return prev + cur;
})


let factorial = array1.reduce((prev , cur) => {
    return prev * cur;
})

console.log("sum " , sum);
console.log("factorial", factorial);



