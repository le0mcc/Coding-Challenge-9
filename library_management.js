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
