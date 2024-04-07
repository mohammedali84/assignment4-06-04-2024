"use strict";
// Instructions: Declare a variable named greeting with the string value "Hello, World!" and print it.//
let greeting = ("Hello, World !");
console.log(greeting);
//Instructions: Define two variables with integer values and calculate their sum, difference, product, and quotient.//
let num1 = 10;
let num2 = 3;
console.log("Addition", num1 + num2);
console.log("Subtraction", num1 - num2);
console.log("Multiplication", num1 * num2);
console.log("Division", num1 / num2);
console.log("Exponentiation", num1 ** num2);
console.log("Exponentiation", num1 ** num2);
console.log("Modulus", num1 % num2);
//Instructions: Swap the values of two variables without using a third variable.//
let a = 1;
let b = 2;
console.log("before SWAPING");
console.log("A=", a);
console.log("B", b);
console.log("After SWAPING");
[a, b] = [b, a];
console.log("A", a);
console.log("B", b);
//Instructions: This applies to TypeScript. Create a string variable and try changing its type.
let message = "hello";
/* message = 10;
//Type 'number' is not assignable to type 'string'.ts(2322)
let message: string*/
console.log(message);
//Instructions: Use the modulus operator to find the remainder of two numbers.//
let num3 = 6;
let num4 = 3;
console.log(num3 % num4);
//Instructions: Increment a variable's value by 1 using two different methods.//
let counter = 5;
counter++;
console.log(counter);
counter += 10;
console.log(counter);
// Instructions: Given three boolean variables, write expressions for AND, OR, and NOT gates.
let aa = true;
let bb = false;
let cc = true;
console.log("AND", aa && bb);
console.log("OR", aa || bb);
console.log("NOT", !cc);
/*8. Compound Assignment
Instructions: Show examples of using compound assignment operators.*/
let D = 10;
console.log(D);
D += 2;
console.log("+=", D);
D -= 6;
console.log("-=", D);
D *= 2;
console.log("*=", D);
D /= 2;
console.log("/*=", D);
//Instructions: Write a program to check if a number is even or odd.
let number = 1;
if (number % 2 == 0) {
    console.log("Number is even");
}
else {
    console.log("Number is ODD");
}
;
// Instructions: Check if a person is eligible to vote//
let age = 43;
if (age >= 18) {
    console.log("Eligible for voting");
}
else {
    console.log("Not Eligible for votting");
}
//Instructions: Assign a grade based on a numerical score.//
let student = 32;
if (student >= 85 && student <= 100) {
    console.log("Student achieved A grade");
}
else if (student >= 80 && student <= 84) {
    console.log("Studend achieved B grade");
}
else if (student >= 70 && student <= 79) {
    console.log("Student achieved C grade");
}
else if (student >= 60 && student <= 69) {
    console.log("Student achieved D grade");
}
else if (student >= 33 && student <= 59) {
    console.log("Student achieved E grade");
}
else if (student >= 1 && student <= 32) {
    console.log("Student is Fail");
}
else {
    console.log("Invalid Marks, Please Enter correct Marks");
}
;
// Instructions: Find the maximum of three numbers//
let a1 = 6;
let b2 = 8;
let c2 = 10;
let maximum = Math.max(a1, b2, c2);
console.log("Maximum Digit is", maximum);
//Instructions: Check if a given year is a leap year.//
let leap_year = 2001;
if (leap_year % 4 == 0) {
    console.log("It's Leap Year", leap_year);
}
else {
    console.log("non-leap year", leap_year);
}
//Instructions: Write a program that converts temperature from Fahrenheit to Celsius.//
let Fahrenheit = 120;
let celsius = (Fahrenheit - 32) * 5 / 9;
console.log("Temperature in Celsius", celsius);
//Instructions: Check if a number is positive, negative, or zero.//
let number1 = 0;
if (number1 > 0) {
    console.log("Number is Positive", number1);
}
else if (number1 < 0) {
    console.log("Number is Negitive", number1);
}
else {
    console.log("Nunber is Zero", number1);
}
//Instructions: Write a program that prints the multiplication table of a given number up to 10.//
let table_10 = 10;
console.log("10*1=", table_10 * 1);
console.log("10*2=", table_10 * 2);
console.log("10*3=", table_10 * 3);
console.log("10*4=", table_10 * 4);
console.log("10*5=", table_10 * 5);
console.log("10*6=", table_10 * 6);
console.log("10*7=", table_10 * 7);
console.log("10*8=", table_10 * 8);
console.log("10*9=", table_10 * 9);
console.log("10*10=", table_10 * 10);
