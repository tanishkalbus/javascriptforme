const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)     it brings changes in existing array and the problem of this 
                                // that it makes it includes array as a whole new index in marvel heros 
                                // so it become array in array that is not good practice 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)            concat returns a new array that why it stored in new variable which is allheros

// console.log(allHeros);

// now imagine what if we want to combine more than two arrays then this approach is not good 

// so to do this we use spread method 

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);  


// now what if we have many array inside of a single array 

let array1 = [1 , 3, 4, [4, 5, [3, 5 ]]]
// now to make this into a single array we  use flat method 
console.log(array1);
let array2 = array1.flat(Infinity)
console.log(array2);


// now we taking data form another site and if that comes in string format or obejct format but we want 
// in array 
// first we check 
console.log(Array.isArray("tanishk"))
// and to make it a array we use Array.form()
console.log(Array.from("tanishk"))
console.log(Array.from({name: "tanishk"}));   // it will give a empty array (intersting)

// now what happen when we have to much variable and we want them into an array then we use Array.of
let score1 = 200
let score2 = 300
let score3 = 400


console.log(Array.of(score1 , score2, score3));

