// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser["firstname"]); // why this is undefined and this is only way of it 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
 
// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)   // in this there are two parameters first is target, and other is source and assign merge all sources in target  

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// now the things become interseting when the values come from databases so then 

let users = [
    {
        id : 2322,
        email : "tanishkjain@openai.com",


    }
    ,

    {
        id : 232,
        email : "komal@google.com"
    }
]

// console.log(users[1].id)
 

// now what we can do is to do the we can make a array of keys of object or values to perform some task 

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));


// now about the desturcting in my opinion the thing is object destructing is to make a our syntax more clean 

let course = {
    coursename : "js in hindi",
    price : 999,
    courseteacher : "tanishk"
}


// course.courseteacher // now what if we need this value many times and many places 
// then we can use object destructing 

const {courseteacher: teacher} = course
// by the help of this piece of code now we can use course.coursteacher only by teacher 

console.log(teacher);




// not a part of object destructing 
// now the thing when we want to knnow that is there any property that this object contains 

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
