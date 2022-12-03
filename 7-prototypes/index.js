
// data types:
// primtive datatypes(primtive value) -- number,string,boolean,null,undefind,symbol
// object datatypes(refrence value) -- objects,arrays,function,date,regex

// when the object property is used ,
// compiler  checks property in object
// if not found then checks prototypes
/*
*      objects,functions,arrays are derived from object prototypes
*/



// prototype inheritance

  const obj1={
  name: 'sidra khalid',
  roll:20,
  getName:function(){
   return this.name;
  },
  getRoll:function(){
   return this.roll;
  }
 }
  // console.log(obj1);
 const obj2={
//  name:'rida zaheer',
  age: 23,
  roll:100,

  __proto__:obj1
 }
//  console.log(obj2);
// console.log(obj2.name);
  // console.log(obj2.getName());
//  console.log(obj2.getRoll());

const obj3={
 class:'web 3.0',
 name:'maleeha zafar',
 __proto__:obj2
}
// console.log(obj3);
console.log(obj3.getName());



let arr=["sidra",23,true];
// console.log(arr);

const a3= new Object();
// console.log(a3);
const a1= new Array();
// console.log(a1);

Array.prototype.show=function(){
 return this;
}
const cities=['islamabad'];
// console.log(cities.show());


// ------------------------------------------------
  //  more prototype
const obj4={
  name: 'sidra khalid',
  roll:20,
  getName:function(){
   return this.name;
  },
  getRoll:function(){
   return this.roll;
  }
 }
function myFunction(student_name){
 return this.student_name=student_name;
}
myFunction.prototype=obj4;
const object_1= new myFunction("hania");
console.log(object_1);
console.log(object_1.roll);




