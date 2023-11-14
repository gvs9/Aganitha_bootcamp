class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    
    }
  }
  
  class SpecializedBook extends Book {
    constructor(title, author, topic) {
    super(title, author);
  this.topic = topic;
    }
  }
   const book = new SpecializedBook(" Circular Motion", "David","Learn Physics");
  console.log("Specialized Book:");
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);
console.log(`Topic: ${book.topic}`);
  