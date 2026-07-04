// Typed Arrays

let names: string[] = ["Ali", "Amina", "Mohamed", "Mahir", "Samira"];

let grades: number[] = [85, 90, 78, 89, 100, 75];

let statusNumber: boolean[] = [true, false, true];

names.push("Hassan");
grades.push(95);
statusNumber.push(false);

// Incorrect

names.push(100);
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.

grades.push("A+");
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.

statusNumber.push("yes");
// Error: Argument of type 'string' is not assignable to parameter of type 'boolean'.

// Convert JavaScript to TypeScript

let product = ["Phone", "Laptop", 99];

let products: string[] = ["Phone", "Laptop"];

products.push("Keyboard");
products.push("Mouse");
products.push("Monitor");

console.log("Products ", products);
