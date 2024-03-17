// strings (sequences of character or text )

 //let str = "tanishk jain" // in  the counting of lenght starts form 1 or in indicies counting start from zero 
//console.log(str.length);// every string have some properties means every string have some internal 
// speical variables in which 1 is lenght 
// second is to reach or access any index of string 
 // console.log(str[0]);// t


// template literals 
// a way to embedded expression in strings 

// string interpolation 
// simple means is that as we know to put some variables in string we need to stop that string and put 
// coma then start our string again so to eliminate that we use template literals 
// and process of putting the values of varibles in between the strings is called the stirng interpolation 
// string${varible}strinng 

// to understand the template literal we use a example with object
 

let obj  = {
    item: "pen",
    price : 10,


}


// console.log("the price of ", obj.item, "is", obj.price, "rupees"); // this is normal way to writing 

// templeate literals 
let output = `the price of ${obj.item} is ${obj.price} rupees`

 // console.log(output);




// escape sequence characters 
// \n starts the new line and \t which give tab space between words and remember the escape sequence counted as one in lenght of strings 



// methods/ functions of strings 

// method - a block of code which do something on our strings 

// now there are built in method to manipulate the strings 
// NOW one thing to remember all the method dont change the string it creates a string with new value according to our method and then return the value of that 

let str = "   tanishk  jain   "
//let newstr = str.toUpperCase()
// console.log(newstr);

// STRINGS ARE IMMUTABLE IN JAVASCRIPT 


// there is str.tolowercase (works same as uppercase )
// now is str.trim()

newstr = str.trim(), str.toUpperCase()

console.log(newstr);




// now there are other methods in strings 

// 1. str.slice(start, end ) in this we tell the starting index and ending index(optional) and ending index is non inclusive


// 2. str1.concat(str2) this is the method which is use for joinging the two strings and also it returns a new string 

let str1 = "tanishk";
let str2 = "jain";

let strres = str1.concat(str2); // we can also do this by letstrres = str1 + str2 

console.log(strres);



// now we can also replace values in strings 

console.log(str.replace("t", "p"));



// now there is a find a charcter of 

console.log(str1[0]);// now the other method of this str.charAT(index)

