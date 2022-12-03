//  let vs var

// ////////////////////////--------------------------------------------//

// let has a block scoped

// for (let i = 0; i < 3; i++) {
//   setTimeout(function f1() { console.log(i); }, i * 1000);
// }

//--------------------------------------------------------------------------//

// var has a function scope 

// for (var i = 0; i < 3; i++) {
//   setTimeout( f1 , i * 1000 );
// }
// function f1() {
//     console.log(i);
//   }

//--------------------------------------------------------------------------//

// let is a block scope variable

// for (let i = 0; i < 3; i++) {
//   setTimeout( f1 , i * 1000 );
// }
// function f1() {
//     console.log(i);
//   }

//--------------------------------------------------------------------------//

// we can not redeclare let variable
// we can initialize value to let variable many times as we want
// let a=3;
// console.log(a);
// let a=4;
// console.log(a);
// a=5;
// console.log(a);
//--------------------------------------------------------------------------//

//we can redeclare var variable
//we can initialize value to var variable many times as we want

// var a=3;
// console.log(a);
// var a=4;
// console.log(a);
// a=5;
// console.log(a);
// var x=2;
// console.log(x);
// var x=4;
// console.log(x);

//------------------------------------------------------------------------ //

// var is function scoped

// for (var i = 0; i < 3; i++) {
//   setTimeout( function f1() { console.log(i); } , i * 1000) ;
// }

//------------------------------------------------------------------------- //
 
// when datatype is not defined,  it has global scope(free variable)
// for ( i = 0; i < 3; i++) {
//   setTimeout( function f1() { console.log(i); } , i * 1000 );
// }

//------------------------------------------------------------------------- //

// const a=[1,2,3,4,5];
// a.forEach(e=>{
//   console.log(e);
//     if(e ==2){
// console.log("matches 2 at this point");
//     }
//   }  )

//------------------------------------------------------------------------- //

// const b=[1,2,3,4,5];
// b.forEach(
//   e=>{
//     console.log(e);
//     if(e ==2){
// console.log(39466);
//     }
//   }  )

//------------------------------------------------------------------------- //

// const c=[1,2,3,4,5];
// c.forEach(
//   e=>{
//     console.log(e);
//     if(e ==2){
// return;
//     }
//   }  )

// --------------------------------------------------------------------

// function foo(){
//  var a=1;
//  let b=2;
//  function bar(){
//   var c=2;
//   console.log(d);
//   let d=2;
//   if( d==2 ){
//    var e=1;
//    let f=2;
//   }
//   console.log(a,b);
//   // function scope
//   console.log(e);
//   // block scope
//   console.log(f);
//  }
//  bar();
//  console.log(a);
// }
// foo();

// -------------------------------------------------------////////////////

// var can be redeclared and reassigned
// let cannot be redeclared but can be reassigned
// const nor be redeclared nor reassigned

// var a=7;
// var a=9;
// let b=6;
// b=8;
// const c=3;
