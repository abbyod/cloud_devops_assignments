//Update the file exercise-G.js script in the folder week-1/InClass
//Using the variables provided in the exercise calculate the percentage of mentors and students 
//in the group (percentages must be a rounded to the nearest integer)
//Using online documentation, what other things can you do with the Math library?
//Pick one thing on your table that you can do other than Math.round and 
//prepare an explanation for the rest of the class
//const preciseAge = 30.612437;
//const roughAge = Math.round(preciseAge); // 31

const numberOfStudents = 48;
const numberOfMentors = 12;
const sumTotal = 48 + 12;
const percentStudents = (numberOfStudents/sumTotal) * 100;
const percentMentors = (numberOfMentors/sumTotal) * 100;

console.log("The percentage of students is " + percentStudents + "%");
console.log("The percentage of mentors is " + percentMentors + "%");