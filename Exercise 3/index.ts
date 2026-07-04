function fullName(first: string, last: string): string {
  return first + " " + last;
}

console.log(fullName("Mahdi", "Ali"));

// Optional and Default Parameters

function registerUser(
  username: string,
  isAdmin?: boolean,
  language: string = "en"
): void {
  console.log("Username:", username);
  console.log("Admin:", isAdmin);
  console.log("Language:", language);
}


registerUser("Mahdi");
registerUser("Ahmed", true);
registerUser("Fatima", false, "fr");

// Safe Rest Function

function average(...scores: number[]): number {
  let total = 0;

  for (const score of scores) {
    total += score;
  }

  return total / scores.length;
}

console.log(average(80, 90, 100));
console.log(average(75, 85, 95, 90));
console.log(average(60, 70, 80, 90, 100));