"use strict";
// Define and Use an Interface
function login(user) {
    console.log(`${user.username} logged in successfully.`);
}
// Users
const user_1 = {
    username: "Mahdi",
    password: "00Mahdi27",
};
console.log(user_1);
const user_2 = {
    username: "OmarTodo",
    password: "00Omar27",
};
console.log(user_2);
const user_3 = {
    username: "Mc",
    password: "1235489",
};
console.log(user_3);
function Login(user) {
    console.log("Username:", user.username);
    if (user.email) {
        console.log("Email:", user.email);
    }
}
const user1 = {
    id: 1010,
    username: "mahdi",
    password: "0000000",
};
const user2 = {
    id: 1010,
    username: "mc hamouda",
    password: "1234567",
    email: "mc@dugsiiye.com",
};
login(user1);
login(user2);
// Readonly in Action
// interface User {
//   readonly id: number;
//   username: string;
//   password: string;
//   email?: string;
// }
const user = {
    id: 101,
    username: "mahdi",
    password: "123456",
};
user.username = "admin";
user.password = "newPassword";
// user.id = 5;
