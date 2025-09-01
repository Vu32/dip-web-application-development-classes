// Challenge - Stage 1
<<<<<<< HEAD
let addBook = function(book) {
// If there's no book to do, do nothing
// data
if (!book || book.length < 1) return;
// Get the list
var list = document.querySelector('#list');
// Create a new list item
var listItem = document.createElement('li');
// template
listItem.textContent = book;
// Append the item to the list
list.appendChild(listItem);
// render
}
let book = "Harry Potter IV";
let book1 = "Harry Potter III"

addBook(book);
addBook(book1)
=======
let addBook = function (book) {
  // If there's no book to do, do nothing
  // data
  if (!book || book.length < 1) return;

  // Get the list
  // Create a new list item
  let list = document.querySelector("#list");

  // template
  let listItem = document.createElement("li");
  // Append the item to the list
  listItem.textContent = book;
  // render
  list.appendChild(listItem);
};

let book = "Harry Potter IV";
let book1 = "Harry Potter III";

addBook(book);
addBook(book1);
>>>>>>> upstream/2025S2
