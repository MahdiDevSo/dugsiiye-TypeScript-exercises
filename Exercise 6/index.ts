// UserRole Enum Usage

enum UserRole {
  SuperAdmin = "superadmin",
  Moderator = "moderator",
  Viewer = "viewer",
}

function canEdit(role: UserRole): boolean {
  return role !== UserRole.Viewer;
}

// Test each role
console.log(canEdit(UserRole.SuperAdmin)); 
console.log(canEdit(UserRole.Moderator));  
console.log(canEdit(UserRole.Viewer));    


// Type Assertion with as
const button = document.querySelector("button") as HTMLButtonElement;

button.disabled = true;