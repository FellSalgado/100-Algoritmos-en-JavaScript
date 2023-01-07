// ----------- Convert string to number
let num1 = 10;
let num2 = '2'; // num1 + +num2 = 12

// ----------- String length / String replace
let language = 'I love JavaScript';
let len = language.length;
let replace = language.replace('I', 'You');

// ----------- toString
const number = 42.5;
number.toString();
number.toLocaleString();
number.toFixed(3);

// ----------- JavaScript Numbers -------
let pi = 3.141;

pi.toFixed(0); //3
pi.toPrecision(2); //3.1
pi.valueOf(); //3.141

Number(true); //converts to number
Number(new Date()); //number of milliseconds since 1970

parseInt('3 months');
parseFloat('3.5 days');

Number.MAX_VALUE;
Number.MIN_VALUE;
Number.NEGATIVE_INFINITY;
Number.POSITIVE_INFINITY;

// ----------- JavaScript Math ---------
Math.PI;
Math.round(4.4); //4- rounded
Math.pow(2, 8); //256 - 2 to the power of 8
Math.sqrt(49); //7 - square root
Math.abs(-3.14); //3.14 - absolute, positive value
Math.ceil(3.14); //4 - rounted up
Math.floor(3.99); //3 - rounted down
Math.sin(0); //0 -sine
Math.cos(Math.PI); //Others: tan, atan, asin, acos
Math.min(0, 3, -2, 2); //-2 <-
Math.max(0, 3, -2, 2); //3 <-
Math.log(1); //0 natural logarithm
Math.exp(1); //2.7182pow(E,x)
Math.random(); //random number between 0 and 1
Math.floor(Math.random() * 5) + 1; //random integer, from 1 to 5
