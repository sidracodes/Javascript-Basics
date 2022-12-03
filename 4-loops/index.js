/**
 * types of loops:
 * for
 * for in
 * for of
 * while
 * do while
 * 
 */






// for loop
const sentence= "Quick brown fox jumps over the lazy dog";
for(let i=0 ; i<sentence.length;i++){
       let x= sentence[i];
      
  console.log(x);
  
 
}
// for loop
var myWork= [];
for (let index = 1; index < 11; index++) {
 var lessonStatus = index % 2 ? true : false;
 var object={ 
  Name: `Lesson ${index}`,
  Status: lessonStatus
 }
myWork.push(object);
 
}
console.log(myWork);

// for of loop
// prints the value

const arr_1=['red','blue','orange','green'];
for( let i of arr_1){
  console.log(i);
  
}
// for in loop
// prints the key or index
const arr_2=['red','blue','orange','green'];
for( let i in arr_2){
  console.log(i);
  
}
// for in loop
// DEALS WITH OBJECT PROPERTIES 
const obj={
  yt: "youtube",
  insta: "instagram",
  fb: "facebook"
}
for( const i in obj){
  console.log(`key is ${i} and value is ${obj[i]}`);
  
}

// for of loop
let sen="The quick brown fox jumps over the lazy dog"
for( let any of sen){
  console.log(any);
}


// add new value in array 
// new value is added in array,added in object but array doesnot makes its index
// so loop also not works on the added value

let arr_3=["a","b","c"];
arr_3.fourth_value= "d";
console.log(arr_3);
console.log(arr_3[0]);
console.log(arr_3[1]);
console.log(arr_3[2]);
console.log(arr_3[3]);
console.log(arr_3.fourth_value);

for(let j in arr_3){
 console.log(j);
}
for(let j of arr_3){
 console.log(j);
}
for(let any in arr_3){
  console.log(any);
 }
for( let any of arr_3){
 console.log(any);
}


// while loop

let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;
while (notFound && someArray.length > 0) {
 if (someArray[0] === "Louiza") {
 console.log("Found her!");
 notFound = false;
 } else {
 console.log(`hi this is ${someArray[0]}, louiza not found`);
 someArray.shift();
 }
}


// -------------------------------------------------

