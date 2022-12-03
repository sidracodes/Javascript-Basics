// recursive function
function recursiveFunction(x) {
 console.log(`recursion started ${x}`);
  if(x>0){
   recursiveFunction(--x);
   
  }
else{
 console.log(`recursion stoped at ${x}`);
}
console.log(`function stopped at ${x}`);
}
recursiveFunction(5);





/**
 * If x is 0, return 1, otherwise return x times the factorial of x minus 1.
 */
function factorial(x){
  console.log(x);
  if(x===0){
   return 1;
  }
  else{
    return x * factorial(--x);
  }

}

console.table(factorial(2));





/**
 * It takes a number as an argument, and if the number is less than 10 or greater than or equal to 20,
 * it returns the string 'stop'. Otherwise, it calls itself with the number plus one.
 */
function ten(x){
  console.log(x);
  if(x<10 || x>=20){
   return 'stop';
  }
  else{
    return ten(++x);
  }

}

console.table(ten(12));





