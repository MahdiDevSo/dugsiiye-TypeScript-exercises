"use strict";
// Echo Function with Generics
function echo(input) {
    return input;
}
// String
const message = echo("Good Morning Jale");
console.log(message);
// Number
const age = echo(26);
console.log(age);
// Array
const numbers = echo([10, 20, 30, 40, 50]);
console.log(numbers);
// Object
const user = echo({
    id: 1,
    name: "Mahdi",
});
console.log(user);
const messageResult = {
    status: "success",
    data: "User created successfully",
};
console.log(messageResult);
// First Element Function
function first(items) {
    return items[0];
}
const firstNumber = first([10, 20, 30]);
console.log(firstNumber);
const firstUser = first([
    { id: 1, name: "Ali" },
    { id: 2, name: "Sara" },
]);
console.log(firstUser);
