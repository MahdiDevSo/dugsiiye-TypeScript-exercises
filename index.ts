// 1. Declare Variables with Explicit Types

let productName: string = "Smart Phone";
let price: number = 400;
let discountAvailable: boolean = true;

console.log("Product Name     : ", productName);
console.log("Price            :", price);
console.log("discountAvailable:", discountAvailable);

// 2. Fix this Broken JavaScript

// let username = "Mahdi";
// username = 100;

// console.log(username.toUpperCase());

// TypeScript solution

let username: string = "Mahdi";

// username = 100;  Error

console.log(username.toLocaleUpperCase());

// 3.Dangerous any

let data: any = "Hello";

// data = 100;
// data = true;
// data = {};
// data = [];


console.log(data.toLocaleUpperCase());
