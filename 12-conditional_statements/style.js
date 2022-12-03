// if-else
      var prompt= require('prompt-sync')();
      let total_marks = Number(prompt("Enter Total Marks: "));
      let obtained_marks = Number(prompt("Enter Obtained Marks: "));
      let percentage =Math.round(((obtained_marks / total_marks) * 100)) ;
      let grade;
      let remarks;

      if (percentage >= 80 && percentage <= 100) {
        grade = "A-one";
        remarks = "excellent";
      } else if (percentage >= 70 && percentage <= 79) {
        grade = "A";
        remarks = "good";
      } else if (percentage >= 60 && percentage <= 69) {
        grade = "B";
        remarks = "you need to improve";
      } else if (percentage >= 0 && percentage <= 59) {
        grade = "Fail";
        remarks = "Sorry";
      }

      console.log(
        `\nTotal Marks: ${total_marks}\nMarks Obtained: ${obtained_marks}\nPercentage:${percentage} \nGrade: ${grade}\nRemarks:${remarks}
      `);

  
      // switch case
      
      // ternary operator

      isStudent= false;
      isStudent ? console.log('true'): console.log('false');


      // and operator
      isStudent= true;
      isStudent && console.table("true");