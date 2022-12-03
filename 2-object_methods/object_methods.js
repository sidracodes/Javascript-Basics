// object methods
// object properties are static valuess

let object_length=()=>{

 object1={
  fistname:"sidra",
  lastname:"khalid",
  age:23,
  isStudent:true
 }

 object2={
  fistname:"sidra",
  lastname:"khalid",
  age:23,
  isStudent:true
 }

 object3={
  fistname:"sidra",
  lastname:"khalid",
  age:23,
  isStudent:true
 }

 object4={
  fistname:"sidra",
  lastname:"khalid",
  age:23,
  isStudent:true
 }

 object5={
  fistname:"sidra",
  lastname:"khalid",
  age:23,
  isStudent:true
 }

const x= Object.keys(object1);
console.log(x);
console.log(x.length);

Object.freeze(object2);
object2.age=24;
console.log(object2.age);

Object.seal(object3);
object3.age=24;
console.log(object3.age);

console.log(Object.entries(object4));
console.log(Object.values(object5));

}

object_length();

