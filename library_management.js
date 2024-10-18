// Coding Challenge: Library Management System

// Task 1: Create a Book Class
class Book {
    #_isAvailable;
    constructor (title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.#_isAvailable = true;
    };

    // get and return details
    getDetails() {
        return `Book: ${this.title}\nAuthor: ${this.author}\nISBN: ${this.ISBN}\nAvailable: ${this.#_isAvailable}`;
    };

    // use getter to return availability
    get _isAvailable() {
        return this.#_isAvailable;
    };

    // use setter to change availability
    set _isAvailable(availability) {
        this.#_isAvailable = availability;
    };
};

// Task 2: Create a Section Class
class Section {
    constructor(name, books) {
        this.name = name;
        this.books = books;
    };

    addBook(book) {
        this.books.push(book);
    };

    getAvailableBooks() {
        const totalAvailable = this.books.reduce((sum, book) => {
            if (book._isAvailable) {
                return sum += 1;
            };
        },0);
        return totalAvailable;
    };

    listBooks() {
        for (let book of this.books) {
            console.log(`${book.title}: Author: ${book.author}\nAvailable: ${book.availability}`)
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
    constructor(name, borrowedBooks) {
        this.name = name;
        this.borrowedBooks = borrowedBooks;
    };

    borrowBook(book) {
        if (book._isAvailable) {
            this.borrowedBooks.push(book);
            book._isAvailable = false;
        }; 
    };

    returnBook(book) {
        const updateBooks = this.borrowedBooks.filter((borrowedBook) => borrowedBook === book)
        this.borrowedBooks = updateBooks;
        book._isAvailable = true;
    };
};
