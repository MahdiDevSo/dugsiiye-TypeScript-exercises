"use strict";
// UserRole Enum Usage
var UserRole;
(function (UserRole) {
    UserRole["SuperAdmin"] = "superadmin";
    UserRole["Moderator"] = "moderator";
    UserRole["Viewer"] = "viewer";
})(UserRole || (UserRole = {}));
function canEdit(role) {
    return role !== UserRole.Viewer;
}
// Test each role
console.log(canEdit(UserRole.SuperAdmin));
console.log(canEdit(UserRole.Moderator));
console.log(canEdit(UserRole.Viewer));
// Type Assertion with as
const button = document.querySelector("button");
button.disabled = true;
