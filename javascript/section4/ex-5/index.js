class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
     }
  }
  
  class SpecializedBook extends Book {
    constructor(title, author,topic = "General") {
      super(title, author);
 this.topic = topic;
    }
  }
  
 const book1 = new SpecializedBook("Intro to java", "David");
 const book2 = new SpecializedBook("Data Science for Beginners", "John","Data Science");
  //book1
  console.log("Specialized Book 1:");
  console.log(`Title: ${book1.title}`);
  console.log(`Author: ${book1.author}`);
  console.log(`Topic: ${book1.topic}`);
  //book2
console.log("\nSpecialized Book 2:");
console.log(`Title: ${book2.title}`);
console.log(`Author: ${book2.author}`);
console.log(`Topic: ${book2.topic}`);
  