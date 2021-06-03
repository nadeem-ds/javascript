console.log(this);

//i am creating a object

const user = {
    firstName : "Nadeem",
    lastName  : "Anwar",
    year      : 2021,
    role      : "Developer",
    detail : function(){
        //return `His role is ${this.role} and his Name is ${this.firstName}`;
        console.log("line 12",this); 
        function sayhello(){
            console.log("Hello");
            console.log("Line no 15" ,this);   // give window object
        }
        
        sayhello()    //this is a regular function
    },
}

console.log(user.firstName);
console.log(user.role);
console.log(user.detail());


//regular function give wiow object with this keyword
//example
// function sayhello(){
//     console.log("Hello");
//     console.log(this);
// }

// sayhello()
