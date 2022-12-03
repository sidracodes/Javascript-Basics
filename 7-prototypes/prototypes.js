/**
 * The Student function is a constructor function that creates a new object with the properties
 * firstname and lastname.  
 * 
 * The Student function is also a prototype function that creates a new object with the properties
 * nationality and name. 
 */
// function prototypes
function Student(first_name, last_name) {
  this.firstname = first_name;
  this.lastname = last_name;
}
Student.prototype.nationality = "pakistani";
Student.prototype.name = function () {
  return this.firstname + " * " + this.lastname;
};
var student1 = new Student("sidra", "khalid");
console.log(student1.name());
console.log(student1.nationality);
console.log(student1);



/* The above code is adding all the elements of the array. */
// array prototypes
let arr = [4, 6, 3, 2, 5, 7, 1, 8];
Array.prototype.add = function () {
  return (result = arr.reduce((a, b) => a + b, 0));
};
console.log(arr.add());



/* Adding a new property to the Array prototype. */
let num = [4, 6, 3, 2, 5, 7, 1, 8];

Object.defineProperty(Array.prototype, "addAllNums", {
  value: function () {
    let a = this.reduce((a, b) => a + b, 0);
    return a;
  },
});
console.log(num.addAllNums());





// object prototypes
/* Adding a new property to the object1. */
const object1 = {};
Object.defineProperty(object1 ,'property1', {
  value: 42,
 });

/* Adding a new property to the object1. */
object1.property1 =77;
// // throws an error in strict mode,

 console.log(object1.property1);

// built in Array Prototypes methods
// fill()
// reverse()
// pop()
// shift()
// push()
// unshift()
// sort()
// splice()
// concat()
// join()
// slice()
// includes()
// indexOf()
// map()
// forEach()
// reduce()
// filter()
// find()
// every()
// some()

//  ---------------------------------------------------------------------------------------------------


// classname = class1, 
/* Creating a constructor function. */
// prototypes are the additional properties

  var class1 = function (first_name, last_name) {
    // instance member
    this.firstname = first_name;
    this.lastname = last_name;
  };

var object2 = new class1('samsung','galaxy');
console.log(object2);

let array=[1,2,3,4,5]
class1.prototype.sum =function(){
  return (array.reduce((a,b)=> a+b,0)); 
}
class1.prototype.full_name = function(){
  return this.firstname + " " + this.lastname;
} 
class1.prototype.color="white";

console.log(object2);
console.log(object2.color);
console.log(object2.sum());
console.log(object2.full_name());

// prototypes
// dynamic dispatch
/* if u want to access any property or object ; which doesnot exist , 
javascript then check object  prototypes if it exits there
*/
let f= function(){
  this.a=1;
  this.b=2;
}

/* Creating a new object and adding a new property to it. */
const o= new f();
o.d=5;

f.prototype.b=3;
f.prototype.c=4;

console.log(o.a);
console.log(o.b);
console.log(o.c);
console.log(o.d);
console.log(o);
console.log(f);
console.log(f.prototype);