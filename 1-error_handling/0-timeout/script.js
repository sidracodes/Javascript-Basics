/**
 * timeout
 * event loop
 * callback
 * callback hell
 * promises
 * async await
 * error handling
 */

// javascript is single threaded

// ***** synchronous vs asynchronous
// synchronous - task by task execution
// asynchronous - doing multiple tasks at one time
// asynchronous - more prreferable

// concurrency means doing multiple tasks

// ***** event loop
// stack vs queue
// stack last in first out
// queue first in first out

// event loop-
// execution stack, web apis , message queue, event loop
// time out has a web api environment
// console log has execution stack environment
// timeout goes to web api and after completing time goes to message queue
// when execution stack becomes empty
// event loop takes things from message queue and put it into execution stack
// then execution stack run those things and gives output

// callback is a function which is used as a parameter inside other function
// the best usecase of callback is a timeout function

// ----------------------------------------------------------------------------

const funC = () => {
  setTimeout(function () {
    console.log(`welcome to function C `);
  }, 3000);
};
const funD = () => {
  console.log(`welcome to function D `);
};

funC();
funD();

// ----------------------------------------------------------------------

setTimeout(() => console.log(1), 2000);
console.log(2);
setTimeout(() => console.log(3), 0);
console.log(4);

// ---------------------------------------------------------------/////////////



