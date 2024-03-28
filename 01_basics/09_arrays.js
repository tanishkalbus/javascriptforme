// we want to save some realted infromation like marks of a class we wont' use the approach of objects 
// because we knew that first marks are going to be student number one so on to store this kind related
// information we use arrays 

let marks = [98, 8767, 89, 87 , 87];
/*console.log(marks);*/
// now arrays has some property like length 
// properties                          methods 
// give some value                 do some work
/*console.log(marks.length);*/

// arrays is also a type of object 
// assumme we want to change a value in arrys like we want 97 on the place of 98
// then we can do marks[1] = 97 
// then the value will be 97 BECAUSE ARRAYS ARE MUTTABLE AND STRINGS ARE IMMUTABLE SO WE CAN'T DO THIS 



// now we want to start a loop on array to do this first we must know the length of array 

/*for(idx = 0;idx <marks.length; idx++){
    console.log(marks[idx])
}*/


// by using for of 

/*for (let mark of marks){
    console.log(mark);
}*/


// now there is a question in which we need to calculate the average marks of a studnet usinng array 
/*let sum = 0;
for(idnx = 0 ; idnx < marks.length; idnx++){
    console.log(marks[idnx])
    sum = sum + marks[idnx]
    

}*/
//console.log(sum);
/*
for(let val of marks){
    sum = sum + val
}

console.log(sum);*/



// now the question to apply an offer of 10 onn every item of array 

/*let itemsprice = [98, 9765, 6523, 453, ];
let ind = 0;


for(ind = 0 ; ind< itemsprice.length; ind++){
    console.log(`the price of index ${ind} is ${itemsprice[ind]}`);
    let offer = 
}*/






// now we had a question regarding arrays in which a array is given and we need to find its aveage value 
/*
let stumarks = [98, 87 , 89 , 67 ];
let index = 0;
// for loop method 
let sum = 0; 
for(index = 0 ; index < stumarks.length; index++){
    sum = sum + stumarks[index]
    
}
let avg = sum / stumarks.length
console.log(avg);
*/

// for of loop 

// now the second question to apply a offer on every indexs of arrays of a given arrays 
/*
let items = [87, 65, 52, 37, 99]
let index2 = 0;
let offer; 
for(index2 = 0 ; index2 < items.length ; index2++){
    console.log(`the price of item ${index2 + 1 } is ${items[index2]}`);
    offer = items[index2] / 10;
    items[index2] = items[index2] - offer; 
    console.log(`the discounted price of item ${index2 + 1 } is ${items[index2]}`); 


}
*/


// arrays method 

// method are things which do some work on arrays 
// there are two types of method in arrays one which change arrays and second on which give new array  

// 1. push to something new in end 
let fooditems = ["potato" , "tomato"]
//fooditems.push("chips")
//console.log(fooditems);

fooditems.pop(); // according to me for right now it doesn't take any value 
//console.log(fooditems);


// now we have to tostring() which convert a array into string but it makes a new string doesn't change array 

fooditems.toString();
console.log(fooditems.toString());


// this is array file 










