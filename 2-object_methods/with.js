// <!-- with keyword -->

  var x=5,y=1  ;
var obj ={ x:10}  

/* A with statement. 
* It is used to make multiple property references without repeating the object name. */
with(obj){  
    console.log(y);
    console.log(x);
}  
