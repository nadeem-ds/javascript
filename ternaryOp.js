// show user a signout button if he is authenticated,
// other wise show him option to signin/singup


var authenticated = false;


// check the data types
console.log(typeof(authenticated))

// if(authenticated){
//     console.log("Show signout button");
// }
// else{
//     console.log("Show login button");
// }


authenticated ? console.log("Show signout buttonn") : console.log("Sign in option"); 