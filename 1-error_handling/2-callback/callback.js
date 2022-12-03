// when a function is call--
// the value that is passed at that timee  is called argument
// the function which is passed as an argument  is called callback function




  // simple functions
const funA = () => {

  console.log(`welcome to function A `);
};
const funB = () => {
  console.log(`welcome to function B `);
};

funA();
funB();

// callback function - (f1)

function f2(x){
  x();
  console.log('i am f2');
  }
  f1=()=>console.log(`hello i am f1`);
  f2(f1);




// ---------------------------------------

// funF is a callback function here
const funE = (a1,a2) => {
console.log(`hello ${a1}`);
a2();
};
const funF = () => {
 console.log(`welcome`);
};

funE("sidra",funF); 


// callback is used to ensure that f1 when completes execution then f2 executes 
// callback function works asynchronously means takes time to execute
// call me back when condition fulfills, wait for other function to execute


// -----------------------------------------------------------


/* call back with ARROW FUNCTION */

one=()=>console.log('one');
two=()=>console.log(`two`);
three=()=>{
  console.log(`three`);
  one();
  two();
}
four=()=>{
  console.log(`four`);
setTimeout(one,0);
three();
};

four();

