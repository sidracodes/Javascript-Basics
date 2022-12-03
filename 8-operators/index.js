// types of operators:
/**
 * assignment operator : =
 * typeof operator : typeof
 * equals to operator : ==
 * plus operator(coercion)(coverts string into number) : + 
 * arithmetic operators : +,-,*,/,%
 * logical operators : &&,||,!
 * spread operator(separates values of array)(used with function arguments) : (...x)
 * rest parameter(makes array of values)(used with function parameters) : (...x) 
 * unary operator(prefix and postfix): increment: ++, decrement: --
 * exponentiation operator: **
 * comparison operator: >=,<=,<,>,!=,===,!==
 */
// rest parameter allows us to represent indefinite no of arguments as an array

// ------------------------------------------------------------------------------


add=(a,b)=>{
 console.log(a+b);
}
add(1,5,3,2,1,99,7);

// precsedence operator
// -left to right 
// 2/4*5
// 0.2*5
/* It's the result of the calculation. */
// 2.5
console.log(2/(2+2)*5);

// --------------------------------------------------------------------------
// rest parameter makes array of values
Sum=(...b)=>{
 console.log(b);
 console.log(...b);
 total=0;
 for (const i of b) {
  total+=i;
 }
 console.log(total);
}
Sum(1,2,3,4);
// -----------------------------------------------------------------------
// spread operator separates values and remove array
sum2=(a,b,c)=>{
 console.log(a);
 console.log(b);
 console.log(c);
}
let array=[1,2,3]
console.log(...array);
sum2(...array);
// --------------------------------------------------------------
// rest parameter 
Summ=(a,b,...c)=>{
 console.log(a);
 console.log(b);
 console.log(c);
 console.log(c[0]);
 console.log(c.length);
}
Summ(1,2,3,4,5,6);

// ---------------------------------------------------------------

// spread arguments
add=[3,5,9];
sum=(a,b,c)=>{
 console.log(a+b+c);
}

sum(...add);

// -------------------------------------------------------------------- 

// rest parameter/rest operator : ...c
// spread operator/ spread arguments: ...arr
summ=(a,b,...c)=>{
 console.log(a);
 console.log(b);
 console.log(c);
}
let arr=[1,2,3,4,5,6];
summ(...arr); 

// ------------------------------------------------------------------


// concatenate vs spread operator
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=arr1.concat(arr2);
console.log(arr3);
let arr4=[arr1,arr2];
console.log(arr4);
let arr5=[...arr1,...arr2];
console.log(arr5);
let arr6=[...arr1,...arr2,7,8,9,10];
console.log(arr6);


