/* 
setinterval() works like timeout()
but it prints multiple times
so we have to kill interval by clearinterval() 
*/

count = 0;
setInterval(() => {
 console.log(`asynchronous message`);
 count= count +1;
 while(count>=5){
  clearInterval();
 }
 
},2000);
console.log(`synchronous message`);

