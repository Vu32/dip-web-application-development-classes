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

// Destructure the entire userObject correctly spo that all values in the structure have a variable
const {
  firstName,
  lastName,
  age: yearsOld,
  isStudent,
  address,
  skills,
  socialProfiles: {},
  isEmployed,
} = userObject;

// This doesnt look right!
const street = userObject.address.street;
const twitterHandle = userObject.socialProfiles.twitter;

const greeting =
  "Hello, my name is " +
  firstName +
  " " +
  lastName +
  ". I am " +
  yearsOld +
  " years old, living on " +
  street +
  ". You can find me on Twitter as " +
  twitterHandle +
  ".";

console.log(greeting);
