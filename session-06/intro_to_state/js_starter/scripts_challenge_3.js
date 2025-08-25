// Challenge 3 Book constructor

// Creating instances using the Book constructor
function displayInfo(author, title, price) {
    this.author = author;
    this.title = title;
    this.price = price;
}

const book1 = new displayInfo (
    'J.K. Rowling',
    'Harry Potter I',
    '$19.95',
);
const book2 = new displayInfo (
    'Jane Doe',
    'Jane Austin',
    '$20.00',
);
// Displaying book information
book1.displayInfo();
book2.displayInfo();
