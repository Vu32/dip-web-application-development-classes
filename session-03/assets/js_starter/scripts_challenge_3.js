// Challenge 3 Starter
// Create the class and use the constructor method
class UserObject {
    constructor(
    firstName,
    lastName,
    age, 
    isStudent,
    isEmployed,
    address, 
     skills,
     socialProfile
    ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.Age = age;
    this.isStudent = isStudent;
    this.address = address;
    this.skills = skills;
    this.socialProfile = socialProfile;
    this.isEmployed = isEmployed;
    }
}

// Create an instance of the ComplexObject class (hint: add the properties)
const userObjectInstance = new UserObject(
    "John",
   "Doe",
   30,
   false,
   {
    street: "123 Main St",
    city: "Perth",
    zipCode: "6000"
  },
 ["JavaScript", "HTML", "CSS"],
   {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe"
  },
  true
)

// Log the new instance of the object
console.log(userObjectInstance);