// Echo Function with Generics

function echo<T>(input: T): T {
  return input;
}

// String
const message = echo("Good Morning Jale");
console.log(message);

// Number
const age = echo(26);
console.log(age);

// Array
const numbers = echo([10, 20, 30, 40,50]);
console.log(numbers);

// Object
const user = echo({
  id: 1,
  name: "Mahdi",
});
console.log(user);

// Generic Interface

interface ApiResult<T> {
  status: string;
  data: T;
}

const messageResult: ApiResult<string> = {
  status: "success",
  data: "User created successfully",
};

console.log(messageResult);

// First Element Function

function first<T>(items: T[]): T {
  return items[0];
}


const firstNumber = first([10, 20, 30]);

console.log(firstNumber);


const firstUser = first([
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
]);

console.log(firstUser);