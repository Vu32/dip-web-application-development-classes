// Challenge 2 Starter
// Initialise the arrays
let array1 = [1, 2, 3, 2];
let array2 = [4, 5, 6, 4];

// Use the spread operator to merge the two arrays
let mergedArray = [...array1, ...array2];

// Use the Set object to remove duplicates
let newUniqueArrary = [...new Set(mergedArray)];

// Use array destructuring to assign the first three elements to variables
const [elementOne, elementTwo, elementThree] = newUniqueArrary;

// Set the value of the output filed to be the second element of the unique array
outputField = document.getElementById('OutputField');
outputField.innerHTML = elementTwo;