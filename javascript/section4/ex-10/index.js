
const Logger = {
    log(message) {
      console.log(`[${new Date().toLocaleString()}] ${message}`);
    },
  };
  
  
  class Book {
    constructor(title, author, publicationDate) {
      this.title = title;
      this.author = author;
      this.publicationDate = publicationDate;
  this.log(`New book created: ${this.title} by ${this.author}, published on ${this.publicationDate}`);
    }
  
    log(message) {
      Logger.log(message);
    }
  }
   class Library {
    constructor() {
      this.books = [];
    }
  addBook(book, borrower) {
      this.books.push(book);
  this.log(`Book added to the library: ${book.title} by ${book.author}. Borrower: ${borrower}`);
    }
   borrowBook(book, borrower) {
      this.log(`Book borrowed: ${book.title} by ${book.author}. Borrower: ${borrower}`);
    }
  
    
    log(message) {
      Logger.log(message);
    }
  }
  const myBook = new Book("The Alchemist", "paulo coelho", "2023");
  const myLib= new Library();
  myLib.addBook(myBook, "gitesh");
  myLib.borrowBook(myBook, "Smith");
  