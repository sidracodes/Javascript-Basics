// arrow functions/fat arrow function/function expression/anonymous function
// arrow function:
// advantage: reduces code, refers to -- this -- keyword
// if arrow function is stored in a variable it is called function expression
// variable name =( function parameters ) => { function body }
// if arrow function is not stored in a variable it is called anonymous function
// anonymous function(IIFE immediately invoked function) means function with no name 
// ( function parameters ) => { function body }


// types of functions:
// Function declaration(function definition with function keyword) are hoisted ( they can be invoked before defining because javascript takes declarations to top 
// Function expressions(functions stored in variable) are not hoisted

 // ------------------------------------------------------------
 // **So best way is to invoke functions after function definition **
 // -------------------------------------------------------------


//  function definiton/declaration:
// inside function definiton we have three things
// function name,function parameters,function body

// default parametrs :
// the parametrs whose value is given at time of function definiton

//  invoke function/function call:
// invoking means when function is called 
//  function arguments

// -------------------------------------------------------


// default parameter : b
 function function_name(b=2){
  console.log(b);
 }
function_name(7);


// function arguments have higher prescedence than default value of function

let result=2009;
const fun7=(x=262)=>{
 result=x;
 console.log(result);
}
fun7(null)


 // ---------------------------------------------------------------------



// function declaration
 sum();
 function sum(){
 return 2 ;
 } 
 // it works 


 // --------------------------------------------------------------

 Sum( );
 var Name = "sid";
 function Sum(){
 return ` ${Name}  khalid`;
 } 

 // not works because var name is not defined yet...




// ---------------------------------------------------------------------------

// function expression

let add= (a,b) =>{
 console.log(a+b);
}
add(1,2);


// -----------------------------------------------------


 summ();
 let summ=( )=>{ console.log("hii"); }

 // error


 // ---------------------------------------------------------------------


 // to use variable c outside the function , we use return keyword
 // c is returned and stored in d

function fun(a,b){
 c=a+b
return c;
 }
 
 let d = fun(4,5);

 if(d%2 == 0){
  console.log('even');
 }
 else if(d%2==1){
  console.log('odd');
 }

