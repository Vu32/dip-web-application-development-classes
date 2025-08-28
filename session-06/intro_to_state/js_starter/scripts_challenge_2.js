<<<<<<< HEAD
// Challenge - Stage 1
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
// -------------------------------------------------------------------------------------------------------------


// Challenge - Stage 2
// The data
let data = {
    books: ['Harry Potter I', 'Harry Pooter II', 'Harry Potter III']
};
// The template
let template = function(props){
    let html =
    '<ul>' +
    // Loop through the props array wrapping each item in a <li>
    props.books.map(function(book){
        return '<li>' + book + '</li>';
    }).join('') +
    '</ul>';
    return html;
};
// Render the template into the UI
let app = document.querySelector('#list');
app.innerHTML = template(data);
=======
let data = {
  books: ["Harry Potter I", "Harry Potter II", "Harry Potter III"],
};

// The template
let template = function (props) {
  let html =
    "<ul>" +
    props.books
      .map(function (book) {
        return "<li>" + book + "</li>";
      })
      .join("") +
    "</ul>";

  return html;
};
// Render the template into the UI
let app = document.querySelector("#list");

>>>>>>> upstream/2025S2
// Update the UI
data.books.push("Harry Potter IV");
data.books.push("Harry Potter V");
// data.books.pop();
// data.books[1] = "Harry Potter V";
app.innerHTML = template(data);
