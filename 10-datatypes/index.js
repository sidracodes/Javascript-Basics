

/**
 * 
 * Whenever you create a variable in JavaScript,
 *  that variable can store one of two types of data,
 *  a primitive value or a reference value. 
 * If the value is a number , bigint, string , boolean , undefined , null , or symbol ,
 *  it's a primitive value. 
 * If it's anything else (i.e. typeof object )(OBJECT,ARRAY,FUNCTION), 
 * it's a reference value
 */
// ------------------------------------------------------------------

// refrence value
// REFRENCE VALUE MEANS PASSING ADRESS ALSO 

let arr=[1,2,3]
arr2=arr
console.log(arr===arr2)
arr2[0]='changed';
console.log(arr2);

// ---------------------------------------------


let age = 30;
let age1 = age; // Pointing to age

console.log(`age = ${age} age1 = ${age1}`);

age = 31; // Pointing to new address

console.log(`age = ${age} age1 = ${age1}`);


// ------------------------------------------------------

// add index in array

 let array=[1,2,3,]; 
 array[-1]="ABC ";
console.log(array);
 array[-2]="xyz ";
console.table(array);
console.log(array[2]);
console.log(array[3]);
console.log(array.length);
// adding temporary index to array


// ---------------------------------------------------


// closure
// inner function can have access to outer function variables,parametrs and global variables

const outer_fun = (a) => {
 let b = 3;
 const inner_fun = () => {
   let sum = a + b;
   console.log(sum);
 };
 inner_fun();
};

outer_fun(4);


// lexical scoping + closure
const outer_func = (a) => {
let b = 3;
const inner_func = () => {
  let sum = a + b;
  console.log(sum);
};
return inner_func;
};

let x= outer_func(4);
console.dir(x);
x();


// -------------------------------------------

var flash = [8,8,8];
var quicksilver = flash;   //assign-by-reference
quicksilver.push(0);
console.log(flash);        //[8,8,8,0]
console.log(quicksilver); 

// -------------------------------------------
 
var firestorm = [3,6,3];
var atom = firestorm;   //assign-by-reference
console.log(firestorm); //[3,6,3]
console.log(atom);      //[3,6,3]
atom = [9,0,9];         //value is reassigned (create new reference)
console.log(firestorm); //[3,6,3]
console.log(atom); 

// ----------------------------------------------

var magneto = [8,4,8];
(function(x) {        //IIFE
    x.push(99);
    console.log(x);   //[8,4,8,99]
    x = [1,4,1];      //reassign variable (create new reference)
    x.push(88);
    console.log(x);   //[1,4,1,88]
})(magneto);
console.log(magneto);

// ---------------------------------------------------

var wolverine = [8,7,8];
(function(x) {              //IIFE
    x.length = 0;           //make empty array object
    x.push(1,4,7,2);
    console.log(x);         //[1,4,7,2]
})(wolverine);
console.log(wolverine);

// ----------------------------------------------------------

var cisco = [7,4,7];
var zoom = cisco.slice();  //create shallow copy
cisco.push(77,33);
console.log(zoom);         //[7,4,7]
console.log(cisco);        //[7,4,7,77,33]

// -----------------------------------------------------------

var flash = { speed: 88 };
(function (x) {             //IIFE
    x.speed = 55;
})(flash);
console.log(flash.speed);  

// -----------------------------------------------------------

// symbol data type means:
// two variables having same value with same data type are not equal
string1=Symbol('sidra') ;
string2=Symbol('sidra');
console.log(string1 === string2);

// ------------------------------------------
