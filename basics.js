// ----------- Convert string to number
let num1 = 10;
let num2 = "2"; // num1 + +num2 = 12

// ----------- String length / String replace
let language = "I love JavaScript";
let len = language.length;
let replace = language.replace("I", "You");

// ----------- toString
const number = 42.5;
number.toString();
number.toLocaleString();
number.toFixed(3);

// ----------- JavaScript Numbers
let pi = 3.141;

pi.toFixed(0); //3
pi.toPrecision(2); //3.1
pi.valueOf(); //3.141

Number(true); //converts to number
Number(new Date); //number of milliseconds since 1970

parseInt("3 months");
parseFloat("3.5 days");

Number.MAX_VALUE;
Number.MIN_VALUE;
Number.NEGATIVE_INFINITY;
Number.POSITIVE_INFINITY;

// ----------- JavaScript Math
Math.PI;
Math.round(4.4)//
Math.pow(2, 8);
Math.sqrt(49); //7
Math.abs(-3.14); //3.14
Math.ceil(3.14); //4
Math.floor(3.99); //3
Math.sin(0);
