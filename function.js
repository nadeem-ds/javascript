//define with function keyword

// function hello(){
//     console.log("Hii everyone, I'm Nadeem")
//     console.log("I'm learning js")
// }

//hello()               //calling the function

//giving argument in functio

// function sayHello(name){
//     console.log("Hello Everyone my name is" ,name )
// }

// sayHello("Nadeem")    //calling the function


// function sayHello(name) {
//     console.log("Hello Everyone!!");
//     //Another fancy way to get argument
//     //This is old way 
//     console.log("My name is ",name)
//     //this is a fancy way 
//     console.log(`Hello it me, ${name}.How are you!!`);
//     //` this is backtik in escape buttuon
    
// }


// var n1 = "Nadeem";
// sayHello(n1)

// function namastay(){
//     return 'hello in India'
// }

// //it will nothing print 
// //Because you are not printing the value 
// // this function is returinig the value but you are not capturing
// // so we have to use console.log to take/capture value
// // var greeting = namastay()


// console.log(greeting)
// console.log(namastay())   //it will print



// var myObject = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//     return this.firstName + " " + this.lastName;
//     }
// }
// myObject.fullName(); 

//There is a way that you can give instead of calling a variable name
// you can create a variable name and store it
//like this
// var getUserRole = function(name,role){}
//this will also work
function getUserRole(name,role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break;    //this is not necessary
        case "subadmin":
            return `${name} is subadmin with create and delete courses`
            break;
        case "testuser":
            return `${name} is  testuser with  access crete and delete test`
            break;
        case "user":
            return `${name} is user to consume content`
            break;
    
        default:
            retun `${name} is a trial user`
            break;
    }
}

console.log(getUserRole("Nadeem", "admin"));

var getRole = getUserRole("Sam","testuser");
console.log(getRole);