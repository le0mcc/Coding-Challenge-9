// Coding Challenge: Library Management System

// Task 1: Create a Book Class
class Book {
    constructor (title, author, ISBN, _isAvailable) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = _isAvailable;
    };

    // get and log details into the console
    getDetails() {
        console.log(`Book: ${this.title}\nAuthor: ${this.author}\nISBN: ${this.ISBN}\nAvailable: ${this._isAvailable}`)
        return this._isAvailable
    };

    // update availability using setter method
    setAvailability(availability) {
        if (this._isAvailable != null) {
            this._isAvailable = availability;
        }
        else {
            console.log("Please enter a value.")
        };
    };
}

// example data
const cmbyn = new Book ("Call Me By Your Name", "Andre Aciman", 1, "true");
console.log(cmbyn);

