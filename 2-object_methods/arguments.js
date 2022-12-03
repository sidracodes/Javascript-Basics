
// argument object 

// how many arguments passed when function is invoked
function sum(){
 console.log(arguments);
}
sum();


// ----------------------------------

function sum1(){
 console.log(arguments);
 let total=0;
 for (const iterator of arguments) {
  total+=iterator;
 }
 console.log(total);
 console.log(`Arguments passed: ${arguments.length}`);
}
sum1(2,3,4,5);




