class Book {
    constructor(title, author, topic) {
      this.title = title;
      this.author = author;
    this.topic = topic;
    }
  }
  
  class Author {
    constructor(name, birthYear, nationality) {
      this.name = name;
      this.birthYear = birthYear;
      this.nationality = nationality;
    }
  }
  
  class Catalog {
    constructor() {
      this.catalogMap = new Map();
    }
  
    
    catalogBook(book) {
      if (!this.catalogMap.has(book.topic)) {
        this.catalogMap.set(book.topic, []);
      }
      this.catalogMap.get(book.topic).push(book);
    }
  

    bookTopic(topic) {
      return this.catalogMap.get(topic) || [];
    }
  }
  
  class Library {
    constructor() {
      this.catalog = new Catalog();
    }
  
    
    addBook(book) {
      this.catalog.catalogBook(book);
      console.log(`Book "${book.title}" by ${book.author.name} added to the library.`);
    }
  
 
  }
  

  const myLib = new Library();
  
  const author1 = new Author("David ", 1942, "American");
  const author2 = new Author("John ", 1980, "British");
  
  const book1 = new Book("Intro to java", author1, "Physics");
  const book2 = new Book("Data Science for Beginners", author2, "Data Science");
  
  myLib.addBook(book1);
  myLib.addBook(book2);
  
 
  