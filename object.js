var user={
    fname : "Nadeem",
    lname : "Anwar",
    DOB    : "20/10/1999",
    Age    : 20 ,
    facebookLoginIn : "Yes",
}

/*
console.log(user.fname);
console.log(user.lname);
console.log(user.Age);
console.log(user.DOB);
console.log(user.facebookLoginIn);
*/
// you can access the object with key value pair
console.log(user["fname"]);
console.log(user["Age"]);


//change the  value easily
//we have to change user age

user.Age = 23;
console.log(user.Age); // it will print 23

user.facebookLoginIn = 10;
console.log(user.facebookLoginIn);

// if you want user information in table then you can use table method

console.table(user);
