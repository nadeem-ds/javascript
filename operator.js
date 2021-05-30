// Types of operator

// Arithmetic Operators (
// +	Adds two numeric operands.
// -	Subtract right operand from left operand
// *	Multiply two numeric operands.
// /	Divide left operand by right operand.
// %	Modulus operator. Returns remainder of two operands.
// ++	Increment operator. Increase operand value by one.
// --	Decrement operator. Decrease value by one.
// )
// Comparison Operators(
//     ==	Compares the equality of two operands without considering type.
// ===	Compares equality of two operands with type.
// !=	Compares inequality of two operands.
// >	Checks whether left side value is greater than right side value. If yes then returns true otherwise false.
// <	Checks whether left operand is less than right operand. If yes then returns true otherwise false.
// >=	Checks whether left operand is greater than or equal to right operand. If yes then returns true otherwise false.
// <=	Checks whether left operand is less than or equal to right operand. If yes then returns true otherwise false.
// )
// Logical Operators (
//     &&	&& is known as AND operator. It checks whether two operands are non-zero (0, false, undefined, null or "" are considered as zero), if yes then returns 1 otherwise 0.
// ||	|| is known as OR operator. It checks whether any one of the two operands is non-zero (0, false, undefined, null or "" is considered as zero).
// !	! is known as NOT operator. It reverses the boolean result of the operand (or condition)
// )
// Assignment Operators(
//     =	Assigns right operand value to left operand.
// +=	Sums up left and right operand values and assign the result to the left operand.
// -=	Subtract right operand value from left operand value and assign the result to the left operand.
// *=	Multiply left and right operand values and assign the result to the left operand.
// /=	Divide left operand value by right operand value and assign the result to the left operand.
// %=	Get the modulus of left operand divide by right operand and assign resulted modu
// )
// Conditional Operators(


// )

// Ternary Operators (
//     <condition> ? <value1> : <value2>;
// )

//(==)Compares the equality of two operands without considering type.
var a = 6;   //interger
var b = '6';   //string

console.log(a==b);  // true
//(===)Compares equality of two operands with type.

console.log(a===b);   //false


//variable declare without var keyword become global variable
age = 20   // this is global variable
console.log(age);