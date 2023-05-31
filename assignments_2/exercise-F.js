//In pairs, write a function that checks a username is of an acceptable format for a user type. 
//The function must:
//take two parameters: one for the username and one for the user type
//if the username starts with a capital letter and has length between 5 and 10 characters long, 
//it must return "Username valid"; otherwise, it must return "Username invalid"
//if the user type is an admin or a manager, all usernames must return "Username valid"

function checkUserName(userName, userType){

    if (/^[A-Z][a-zA-Z]{4,9}$/.test(username)){
        return "Username invalid";
    }

    if (userName == "admin" || userType === "manager"){
        return "Username valid";
    } 
    
    return "Username invalid";
}