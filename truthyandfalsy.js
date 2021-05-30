//falsy value
/*
1.undefind
2.null
3.0
4.''
5.Nan
*/

var user = 2;
if (2==user) {       
    //run the code
    // match only value without check data types
    console.log("check the value without check data types ")
}
if (2===user) {
    console.log("check the value with datatypes")
}

//console.log(2+"2")  // to avoid this use ===