
// callback
// callback hell-nested callbacks
// the solution to callback hell is promises

const getRollno = () => {
  setTimeout(() => {
    console.log(`getting  roll no's:`);
    let arr = [1, 2, 3, 4];
    console.log(arr);
    setTimeout(
      (rollno) => {
        const obj = {
          name: "sid",
          age: 23,
        };
        console.log(
          `my rollo no is ${rollno} and my name is ${obj.name} and my age is ${obj.age}`
        );

        setTimeout(
         (nm,ag)=>{
          obj.gender='female';
          console.log( `my rollo no is ${rollno} and my name is ${nm} and my age is ${ag} and i am ${obj.gender}`
          );
         }
         ,
         2000,obj.name,obj.age
        )
      },
      2000,
      arr[1]
    );
  }, 2000);
};
getRollno();
