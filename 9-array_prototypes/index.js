/**
 * // built in Array Prototypes( array methods)
 * ---------------------------------
// fill()
// map()    -- returns array
// reduce()
// length
// --------------------------------
// below methods modifies the original array 
// ---------------------------------
// sort()
// reverse()
// pop()
// shift()
// push()
// unshift()
// splice()
// ---------------------------------
// concat()
// join()
// slice()
// includes()
// indexOf()
// lastindexof
// ------------------------------
// forEach()   -- donot returns
// every()
// some()
// filter()
// -----------------------------
// find()
// findIndex()
// at
// ----------------------------------------------------------/////////////////////
 */




let fruits=['apple','orange','mango'];

// fill
newfruits=fruits.fill("kiwwi");
console.log(newfruits);

// ----------------------------------------------------------

 // map
 fruits.map((m)=>{
  console.log(m);
 })

//  ------------------------------------------------------------

// reduce
let a=[1,2,3,4,5,6];
b=a.reduce((a,b)=>a+b,0)
console.log(b);

// reduce method
let a1=[3,4,5,6];
let initialValue=0;
let r=a1.reduce((previousValue,currentvalue)=>previousValue+currentvalue,initialValue);
console.log(r);
let s=a1.reduce((previousValue,currentvalue)=>previousValue-currentvalue,initialValue);
console.log(s);

console.log(a1);
// ------------------------------------------------------------------


// sort

// The sort () method is used to sort 
// the elements of an array alphabetically
//  To get the items in reverse order
// we may use the reverse () method.
const arr6 = ['s', 'e', 'i', 'a'];
console.log(arr6.sort());
console.log(arr6.reverse());



// Sort the elements of an array numerically: 
// a-b
// Negative Value ( b < a) => a will be Place after b
// zero value (a == b) => No Change
// Positive Value (b > a ) => a will be place before b
let num = [75, 4, 8, 1, 3, 10, 30, 50, 53, 22];
let arr_num = num.sort();
console.log(arr_num);
let asc_arr = num.sort((a, b) => { return a - b; });
console.log(asc_arr);
let desc_arr = num.sort((a, b) => { return b - a; });
console.log(desc_arr);

console.log(num);

// --------------------------------------------------

// reverse
let num2= [75, 4, 8, 1, 3, 10, 30, 50, 53, 22];
console.log(num2.reverse());
console.log(num2);

// ------------------------------------------------

// for each 

fruits.forEach((e)=>{
 console.log(e);
})

// ---------------------------------------------------

  // filter


  let favItems = ['piza','AppLe','cars','CRICKET','COmputer','PLAystation','RaIN', 'Piza'];
  let lowerCaseFavItems= [];
  let titleCaseFavItems= [];
  let myFilterItems = [];
  function makeLowerCaseFun(list){
    list.forEach(item => lowerCaseFavItems.push(item.toLowerCase()));
    console.log("lower case :",lowerCaseFavItems);
  }
  makeLowerCaseFun(favItems);
  
  function makeTitleCaseFun(list){
    list.forEach(item=> titleCaseFavItems.push(item.replace(item[0],item[0].toUpperCase())))
    console.log("Title Case :",titleCaseFavItems);
   
  }
  
  makeTitleCaseFun(lowerCaseFavItems);
  function makeFilterItemsFun(find,list){
    let filter= list.filter(item=> item.includes(find))  
  myFilterItems= [...filter]
  console.log(myFilterItems);
  
    }
  
  makeFilterItemsFun('cr',lowerCaseFavItems)
  
  
// -----------------------------------------------------------
  
// index of
var arr=['red','blue','green'];
var index=arr.indexOf("pink");
console.log(index);

// ---------------------------------------

let array4=[7,8,9,10];
let f1= array4.indexOf(8);
console.log(f1);
let f2= array4.indexOf(0);
console.log(f2);

// --------------------------------------

// because 7 cannot be found starting from 8

let f3= array4.indexOf(7,8);
console.log(f3);
let f4= array4.indexOf(10,2);
console.log(f4);
// ----------------------------------------



/* Creating an array with 100 elements and the last element is undefined. */
array=[];
array[100] = undefined;
arr[-1]=2
console.log(array.length);
console.log(array);


// ----------------------------------------------------------------------------

const aray=[];
aray[10]='test';
console.log(aray);
console.log(aray[2]);
console.log(aray.length);
aray.length=0;
console.log(aray[0]);
console.log(aray[6]);

// --------------------------------------------------------------

 
// pop

user_names22 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (i = 0; i<= user_names22.length; i++) {
 console.log(user_names22.length);
  user_names22.pop();
  console.log(user_names22);
}


// ------------------------------------------


user_names = [1, 2, 3, 4, 5, 6, 7, 8, 9];
x=user_names.length;
for (i = 0; i<= x; i++) {
 console.log(user_names.length);
  user_names.pop();
  console.log(user_names);
}
console.log(user_names);

if(user_names.length==0){
 console.log('empty');
}
else{
 console.log("not empty");
}

// --------------------------------------------------------

// find
arr1=[1,23,4,45];
console.log(arr1.find((e)=>e==10));
console.log(arr1.find((e)=>e==1));

// ------------------------------------------------

// lastindexof
console.log(array4.lastIndexOf(5));
console.log(array4.lastIndexOf(10));
console.log(array4.lastIndexOf(8));
// ----------------------------------------

// multi dimensional array
let array9=[1,2,3];
let arrays=[[1,2,3],array9,array9,array9];
console.log(arrays[0][2]);
console.log(arrays[2][1]);
console.log(arrays);
console.log( typeof arrays);

// -------------------------------------------

// join 
const aar3=[3,6,8,3,9,55,553,434];
console.log(aar3.join(" * "));
aar3.sort();
console.log(aar3);
aar3.length=0;
console.log(aar3[0]);
console.log(aar3[4]);
console.log(aar3);

// ----------------------------------------------

// at
const strarr = ["apple","ball", "cow", "dog", 
"elephant", "fish" ];
console.log(strarr.at(-1));
console.log(strarr.at(-3))
console.log(strarr.at(3))
console.log(strarr.at(2))

// -----------------------------------------

// push , pop, shift, unshift, splice

const thelist=['laurence','svekis',true,35,null,undefined,{test:'one',score:55},['one','two']];
thelist.pop();
thelist.shift();
console.log(thelist);
thelist.unshift('FIRST');
console.log(thelist);
thelist.splice(3,3,'hello world');
thelist[2]='MIDDLE';
console.log(thelist);
thelist[thelist.length-1]='LAST';
console.log(thelist);


// ---------------------------------------------

//some
let ages=[20,34,18,60,12];
function check_age(age){
  return age==18;
}
console.log(ages.some(check_age));
console.log(ages.some(x=>x==18));
// -------------------------------------------
// every
let ages_=[16,14,18,20,12,4];
function check_ages(age){
  return age>10;
}

console.log(ages_.every(check_ages));
console.log(ages_.every(m=>m>18));
console.log(ages_.filter(m=>m>16));

// ---------------------------------------------


