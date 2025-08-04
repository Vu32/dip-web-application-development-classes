// Challenge 2 Starter
const userObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe",
  },
  isEmployed: true,
};

// Clone the complexObject three times using the spread operator to clone.
function deepClone(userObject){ return JSON.parse(JSON.stringify(userObject));

}
const newAge1 = {age: 31};
const newAge2 = {age: 2};

let userObject1 = deepClone(userObject);
let userObject2 = {...userObject, ...newAge1};
let userObject3 = {...userObject, ...newAge2};
// Store the cloned objects in an array
const storedObject = [userObject1, userObject2, userObject3];

// Sort the array of cloned objects based on the 'age' property in ascending order
storedObject.sort((a,b) => a.age > b.age);
// Log the sorted array to the console
console.log(storedObject);