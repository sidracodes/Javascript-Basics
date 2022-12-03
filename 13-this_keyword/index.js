// 1.global level
// this refers to window 
  
    console.log(this);
    console.log(this === window );
  

    let x = this
    console.log(x) 

// 2.inside object
// this keyword refers to object
//" this "is not present in arrow function

const person={
 firstname: 'sidra',
 lastname:'khalid',
 fullname: function(){
  console.log(this.firstname + "" + this.lastname);
 }
}
person.firstname;
person.fullname;