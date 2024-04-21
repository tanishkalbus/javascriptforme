// if it is made from constructor then it is singleton 
// Object.create            this is the method for creating from constructor 

// object literals 

// singleton


const mySym = Symbol("key1")         // this is how symbol is created 


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",                          // to access symbol within the object [] needed 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 

// some important things regarding objects 
// js take every key as a string 





// console.log(JsUser.email)     // that's why this is not a good practice 
// console.log(JsUser["email"])        // that how we should access the value 
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])                      // from this we accessing symbol 
 





JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)         // use to freeze the object to avoid from further changes 
JsUser["email"]= "hitesh@microsoft.com"
 console.log(JsUser); 

JsUser.greeting = function(){                    // way of including a fuctionn in a object 
    console.log("Hello JS user");
}                                           // i am not able to get it how this is called as greeting 
JsUser.greetingTwo = function(){              // my second argument with myself would be this is the 
                                                  // way to declaring a function in object 
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());