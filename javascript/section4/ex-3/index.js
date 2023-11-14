class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  

    addBook(book) {
      this.books.push(book);
      console.log(`Book :"${book.title}" by ${book.author} `);
    }
  
    
}
  

  const myLib = new Library();
  
  const book1 = new Book("The Great Gatsby","F.Scott Fitzgerald");
  const book2 = new Book("To Kill a Mockingbird","Harper Lee");
  
  myLib.addBook(book1);
  myLib.addBook(book2);
  

  