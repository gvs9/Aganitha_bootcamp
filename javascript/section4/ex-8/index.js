
class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  
  
  class FictionBook extends Book {
    constructor(title, author, genre) {
      super(title, author);
      this.genre = genre;
    }
  
    
    moreBook() {
      console.log(`You might also like other ${this.genre} novels!`);
    }
  }
  
  
  class NonFictionBook extends Book {
    constructor(title, author, topic) {
      super(title, author);
      this.topic = topic;
    }
  
    
    newTopic() {
      console.log(`Explore more ${this.topic} topic.`);
    }
  }
  
  
  const fictionBook = new FictionBook("The Alchemist", "paulo coelho", "Self-help");
  const nonFictionBook = new NonFictionBook("Harry potter", "J.K. Rowling", "Entertainment");
  
  console.log("Fiction Book:", fictionBook);
  console.log("\nNon-Fiction Book:", nonFictionBook);
  
  fictionBook.moreBook();
  nonFictionBook.newTopic(); 
  