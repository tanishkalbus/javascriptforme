 
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){      // sam will be in the case of user has typed nothing and the if statement will never get executed 
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


// now imagine we are creating a cart for an e-commerce in this case we don't know how much items 
// is user going to add then we use rest operator it's syntax is same as spread but it holds all the values which has been passed and return them as a form of array 


// in this below ex 200 is taken by val1 and 400 is taken by val2 and other are stored by num 1 
function calculateCartPrice(val1, val2, ...num1){ 
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);  // in this method we need to take care that objects that are going to come in this would have same key as named username and price 
}

// handleObject(user)    
handleObject({        // in this argument we can directly pass a whole object as a argument 
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
// now same as object we are dealing with arrays 
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));