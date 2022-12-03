// split
// trim

let str="to be or not to be";
console.log(str.indexOf("be"));
// last index of
console.log(str.lastIndexOf("be"));
// char at
console.log(str.charAt(4));
console.log(str.charAt(2));


// replace method
let string="MR Blue has a blue house and a blue car";
console.log(string.replace('blue','pink'));
// regex
console.log(string.replace(/blue/g,"green"));
console.log(string.toLowerCase().replace(/blue/g,"green"));
// -------------------------------------------------------------------



let num= 234.59;
// math.round
console.log(Math.round(num));
// math.ceil
console.log(Math.ceil(2.10));
console.log(Math.ceil(4.40));
console.log(Math.ceil(-4.40));
//Math.floor
console.log(Math.floor(4.40));
console.log(Math.floor(-4.40));
console.log(Math.floor(2.10));
// tofixed
let z= 477384.87483977694;
console.log(z.toFixed(2));

// math.random
console.log(Math.random());
console.log(Math.random()*8);
console.log(Math.round(Math.random()*8));

// -------------------------------------------------------

// parseint
console.log(parseInt("23"));
console.log(parseInt("23.45"));
console.log(parseInt("hello"));
// parsefloat
console.log(parseFloat("hello"));
console.log(parseFloat("23.00"));
console.log(parseFloat("334.56"));

// -----------------------------------------------------

// number
console.log(Number("23"));
console.log(Number("23.45"));
console.log(Number(true));
// string
let y= 76;
console.log(String(y));
console.log(y.toString());

// ---------------------------------------------------

// constructor function
const date = new Date();
console.log(date);
console.log(date.getMilliseconds());
const date1 = new Date(2001,1,23);
const date3 = new Date(2001,1,23,6,67,879);
const date2 = new Date("23-february-2001");
console.log(date1);
console.log(date2);
console.log(date3);


