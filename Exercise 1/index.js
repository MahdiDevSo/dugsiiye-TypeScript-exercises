"use strict";
// 1. Declare Variables with Explicit Types
let productName = "Smart Phone";
let price = 400;
let discountAvailable = true;
console.log("Product Name     : ", productName);
console.log("Price            :", price);
console.log("discountAvailable:", discountAvailable);
// 2. Fix this Broken JavaScript
// let username = "Mahdi";
// username = 100;
// console.log(username.toUpperCase());
// TypeScript solution
let username = "Mahdi";
// username = 100;  Error
console.log(username.toLocaleUpperCase());
// 3.Dangerous any
let data = "Hello";
data = 100;
data = true;
data = {};
data = [];
console.log(data.toLocaleUpperCase());
