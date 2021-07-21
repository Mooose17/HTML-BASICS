const password = prompt("Please enter a new password.");

if (password.length >=6){
    console.log("PASSWORD LENGTH ACCEPTED")
    if (password.indexOf(' ')=== -1){
        console.log("VALID PASSWORD")
    } else{
        console.log("Password cannot contain spaces.")
    };
} else {
    console.log("PASSWORD LENGTH REJECTED")
};

// if (password.indexOf(' ')=== -1){
//     console.log("Zero spaces found.")
// } else{
//     console.log("Password cannot contain spaces.")
// };