//fill
//filter
//spice
//slice

var testArray  = [2,3,5,6,7,8,9,4];

//it fill the all value with 0 as we have given
//console.log(testArray.fill(0));
//console.log(testArray.fill("N"));
// here 2 is start range it means apart form 2 index fill all the value with given 

//console.log(testArray.fill("H" , 2));
// here 5 is end index it is also exclusive

//console.log( testArray.fill("Nad" , 2, 5 ));


//2.filter

//const myNumber = [23,45,67,11,22,56];
//console.log(myNumber.indexOf(22));

// here we are using the call back
//we perform any logical operation n=on array
//var mynum = myNumber.filter((num) => (num>=45));
//console.log(mynum);


//3.slice

//takig element form array
const myNumber = [23,45,67,11,22,56];

//we are taking element from start with 1 index and last is 4
//console.log(myNumber.slice(1,4));

//4.splice
//myNumber.splice(1,3,"Hi")
//console.log(myNumber);
// it add the value of index when you given no is less than the index it will delete the number
//like here we have given only 2 element and 4 index it will delete 2 index
myNumber.splice(1,5, "Hi","By");
console.log(myNumber);
