class Library {
    constructor() {
      this.books = [
        { title: "Book1", status: "available" },
        { title: "Book2", status: "available" },
        { title: "Book3", status: "available" },
      ];
    }
  
    borrowBook = (title) => {
    const bookIndex = this.books.findIndex((book) => book.title === title);
  if (bookIndex !== -1 && this.books[bookIndex].status === "available") {
        this.books[bookIndex].status = "borrowed";
   return this.books[bookIndex];
      } else {
        
        return null;
      }
    };
  }
   const library = new Library();
  const borrowedBook = library.borrowBook("Book2");
  
  if (borrowedBook) {
    console.log(`Successfully borrowed ${borrowedBook.title}`);
  } else {
    console.log("Book not available ");
  }
  