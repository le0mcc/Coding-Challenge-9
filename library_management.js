// Coding Challenge: Library Management System
// Task 1: Create a Book Class
class Book {
    // Initialize private property
    #_isAvailable;
    // Initialize the rest of the properties
    constructor (title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.#_isAvailable = true;
    };

    // Get and return details
    getDetails() {
        return `Book: ${this.title}\nAuthor: ${this.author}\nISBN: ${this.ISBN}\nAvailable: ${this.#_isAvailable}`;
    };

    // Use getter to return availability
    get _isAvailable() {
        return this.#_isAvailable;
    };

    // Use setter to change availability
    set _isAvailable(availability) {
        if (typeof availability === 'boolean') {
            this.#_isAvailable = availability;
        }
        else {
            console.log("Invalid availability. Must be true or false.")
        };
    };
};

// Task 2: Create a Section Class
class Section {
    // Initialize properties
    constructor(name, books, availability) {
        this.name = name;
        this.books = books;
        this.availability = availability;
    };

    // Add book to section array
    addBook(book) {
        this.books.push(book);
    };

    // Return available books in the section into the console
    getAvailableBooks() {
        const totalAvailable = this.books.reduce((sum, book) => {
            if (book._isAvailable) {
                return sum += 1;
            };
        },0);
        return totalAvailable;
    };

    // Return details for all books in the section
    listBooks() {
        for (let book of this.books) {
            return`${book.title}: Author: ${book.author}\nAvailable: ${book.availability}`
        }
    };

    // Task 5: Handle Books Borrowing and Returning
    calculateTotalBooksAvailable() {
        const totalBooksAvailable = this.books.reduce((sum, book) => {
            if (book._isAvailable) {
                return sum += 1;
            };
        },0);
        return totalBooksAvailable;
    };
};

// Task 3: Create a Patron Class
class Patron {
    // Initialize properties
    constructor(name, borrowedBooks) {
        this.name = name;
        this.borrowedBooks = borrowedBooks;
    };

    // Patron borrows a book by adding it to their borrowed books and adjusting the availability to false
    borrowBook(book) {
        if (book._isAvailable) {
            this.borrowedBooks.push(book);
            book._isAvailable = false;
        }; 
    };

    // Patron returns a book by removing it from their borrowed books and adjusting the availability to true
    returnBook(book) {
        const updateBooks = this.borrowedBooks.filter((borrowedBook) => borrowedBook === book)
        this.borrowedBooks = updateBooks;
        book._isAvailable = true;
    };
};

// Task 4: Create a VIPPatron Class that Inherits from Patron
class VIPPatron extends Patron {
    // Initialize properties
    constructor(name, borrowedBooks) {
        super(name,borrowedBooks);
        this.priority = true;
    };

    // Patron borrows a book with priority 
    borrowBook(book) {
        if (book._isAvailable) {
            this.borrowedBooks.push(book);
            book._isAvailable = false;
        }
    };
};

// Task 6: Create and Manage Sections and Patrons
// Create Sections
const romance = new Section("Romance", []);
const rf = new Section("Realistic Fiction", []);

// Create Books
const heartstopper = new Book("Heartstopper", "Alice Oseman", "143143143");
const cmbyn = new Book ("Call Me By Your Name", "Andre Aciman", "19831983");
const outOfMyMind = new Book("Out of My Mind", "Sharon M. Draper", "00330033");

// Add books to sections and log details
romance.addBook(heartstopper);
romance.addBook(cmbyn);
rf.addBook(outOfMyMind);
console.log(cmbyn.getDetails());
console.log(heartstopper.getDetails());
console.log(outOfMyMind.getDetails());

// Create Patrons
const normalPatron = new Patron("Charlie Spring", []);
const vipPatron = new VIPPatron("Isaac Henderson", []);

// Normal parton tries to borrow a book
normalPatron.borrowBook(cmbyn);

// VIP patron tried to borrow a book with priority
vipPatron.borrowBook(cmbyn);

// Return the book
normalPatron.returnBook(cmbyn);

// List books and availability
romance.listBooks();

// Calculate total available books in each section
console.log(`Total available books in Romance: ${romance.getAvailableBooks()}`);
console.log(`Total available books in Realistic Fiction: ${rf.getAvailableBooks()}`);