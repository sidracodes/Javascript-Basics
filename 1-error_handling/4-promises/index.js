/* callback->callback hell->promises->async await->error handling*/

/* 
promise is an object that keeps tracking 
either the operation performed or not,
 and if performed what happens

three stages in promises:
1. pending
2. resolve
3. reject


  ***** steps to use promises *****
1.create object of promises with new keyword
2.inside object Promise call a function executor and pass two parameters resolve,reject
3.object of promises has three methods
     1. promise.then()
     2. promise.catch()
     3. promise.finally()

     produce promise 
if condition fulfills resolve the promise -- resolve
if condition not fulfills reject the promise -- reject
     consume promise
show output of promise which is resolved  -- then    
show output of promise which is rejected  -- catch    


 */
// ----------------------------------------------------------------------
// promises as a function constructor
// ----------------------------------------------------------------------
let array=[1,2,3,4,5];
// produce promise
const promise_object = new Promise((resolve,reject)=>{
 setTimeout(()=>{
  resolve(array);
 },2000 );
});
// consume promise
promise_object.then((rollno)=>{
     console.log(rollno);
}).catch((error)=>{
console.log(error);
})
// ------------------------------------------------------------------------
// produce promise
const promise_object1 = new Promise((resolve,reject)=>{
     setTimeout(()=>{
      reject('error') 
     },2000 );
    });
    // consume promise
    promise_object1.then(
     (rollno)=>{
    console.log(rollno);
     }
    ).catch((error)=>{
    console.log(error);
    })
    
// -------------------------------------------------------------------------
//  promises as an object
// -------------------------------------------------------------------------
// produce promise
const getBioData= (indexdata)=>{
 return new Promise((resolve,reject)=>{
  setTimeout((indexdata)=>{
   let biodata={
    name: 'sidra',
    age: 23
   }
   resolve(` my roll no is ${indexdata} and my name is ${biodata.name} having age ${biodata.age}`);
   reject('error');
  },7000,indexdata)
 })};
//  consuming promisesss
promise_object.then(
 (rollno)=>{
console.log(rollno);
return getBioData(rollno[3]);
 }
).then((data)=>{
 console.log(data);
 }).catch((error)=>{
console.log(error);
})
