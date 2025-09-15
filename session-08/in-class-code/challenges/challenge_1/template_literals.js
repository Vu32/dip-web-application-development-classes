// file: templateLiterals.js
const userObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Perth",
    zipCode: "6000",
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe",
  },
  isEmployed: true,
};

// The following greeting message uses template literals incorrectly.
const getUserInfo = () => {
  return `Name: ${userObject.firstName} ${userObject.lastName} Age: ${userObject.age}`;
};

// Fix the template literal syntax.
console.log(getUserInfo(userObject));
