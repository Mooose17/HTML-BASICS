const age = 23;

if(age >=0 && age < 5 || age >= 65) {
    console.log("Free.")
} else if(age >= 6 || age < 10){
    console.log("$10")
} else if(age >=11 || age < 65){
    console.log("$20")
} else{
    console.log("INVALID AGE")
};