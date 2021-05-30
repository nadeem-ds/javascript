/* Primitive Data Types
String
Number
Boolean
Null
Undefined
*/

var str = "Nad";

//with the help of new kwyword you can create new object
var str2 = new String('Hello World')

var age = 20;
var instalogin = true;
var dob = null;
var job;


// check the data types
console.log(typeof(str));
console.log(typeof(str2))
console.log(typeof(age));
console.log(typeof(instalogin));
console.log(typeof(dob));
console.log(typeof(job));


/* Non-primitive Data Type  
Object
Date
Array
*/

/* An object is a collection of properties,
and a property is an association between a name (or key) and a value. */


var cityInMP={
    city1 : "Bhopal",
    city2 : "Indore",
    city3 : "jabalpur",
    city4 : "ujjain",

}

console.log(cityInMP.city1);