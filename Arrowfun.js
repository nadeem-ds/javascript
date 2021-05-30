//function isEven(element){
    // if (element%2==0) {
    //     return true
    // }
    // return false
    //return element%2==0
//}

// var isEven = function(element){
//     return element%2==0
// };
// you can remove the function predifind keyword like this you shoi
//you will give => sign
var isEven = (element) => {
    return element%2==0
};

//console.log(isEven(5));
//console.log(isEven(6));
//console.log(isEven(5));


//every method in array
//call back function
//it return true when all is true

// var result = [2,3,4,5].every(isEven);
// console.log(result);

// var result = [2,3,4,5].every((e) => {
//     return e%2 === 0;
// });

// console.log(result);

var result = [2,2,4,6].every((e) => e%2 === 0);

console.log(result);