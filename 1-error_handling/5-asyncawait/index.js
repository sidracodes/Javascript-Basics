/**
 * the keyword async before function means
 * function always returns a promise rather than
 * returning a value
 * 
 * async await are use to consume promises 
 * 
 * async is used with a function 
 * await is used with a promise 
 * 
 * (promise resolve)await code is written inside try block
 * (promise reject) code is written inside catch block
 * 
 */



// produce promise 1

let array=[1,2,3,4,5];
const promise_object = new Promise((resolve,reject)=>{
 setTimeout(()=>{
  resolve(array);
  reject('error');
 },2000 );
});

// produce promise 2
const getBioData= (indexvalue)=>{
 return new Promise((resolve,reject)=>{
  setTimeout((indexdata)=>{
   let biodata={
    name: 'sidra',
    age: 23
   }
   resolve(` my roll no is ${indexdata} and my name is ${biodata.name} having age ${biodata.age}`);
   reject('error');
  },4000,indexvalue)
 })};
 
 // consume promises through async await

async function getData(){
const rollnodata =await promise_object;
console.log(rollnodata);
const biodatas = await getBioData(rollnodata[3]);
console.log(biodatas);
// return biodatas;
}

getData();
// const data=getData();
// console.log(data);