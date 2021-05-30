var myArray = [1,2,3,4,5,6,7,8]

//old way to declare array
var myArray1 = ["apple","banana","lichi","watermalob"]

//new way to delcare array

var myArray2 = new Array("India","pakistan","Afganistan","Bangladesh")

//Access the value from array
console.log(myArray2);
console.log(myArray1);

console.log(myArray1[0]);

//length of array
console.log(myArray2.length);


//replce the array value
//suppose i am replacing the first value
myArray1[0] = "cherry"
console.log(myArray1);

// indexing start with 0 in array
//console.log(myArray2[0:2]); //not support in js

//you can store multiple types of data in array like this

var user = ["Nadeem" , "js course" , 20 , true , 23]

console.log(user);

//remove last index value of aray
user.pop();
console.log(user);
user.pop()
console.log(user);

//add elemt in array in last index
user.push("Sam")
console.log(user);

//add value in ist index
user.unshift("New value")
console.log(user);

//remove the ist elememnt
user.shift()
console.log(user);

//know the index of element
console.log(user.indexOf(20));
console.log(user.indexOf("Nadeem"));

// what happen when element not present in array it return -1
console.log(user.indexOf("Age"));

//convert string to array
console.log(Array.from("Nadeem"));







