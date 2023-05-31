//Write a function which takes your students array as an input. In the function, use a for loop 
//to iterate over the array and print the name of each student to the console.

function printStudentName(studentArray){
    
    for (let i = 0; i < studentArray.length; i++) {
        const student = studentArray[i];
        console.log(student.name);
      }
}  