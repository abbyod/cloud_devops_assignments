//Update the file exercise-I.js script in the folder week-1/InClass
//Write a function that returns the year someone is born given their age as input
//Using the answer from step 1, write a function that takes someone's name and age 
//as input and returns a string that states the person's name and year they were born in a sentence

function birthYear(year) {
    return 2023 - year;
  }
  
  function nameYear(name, year) {
    const yearBirth = birthYear(year);
    const message =
      "Your name is " + name + " and you were born in  " + yearBirth;
    return message;
  }