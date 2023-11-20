// class Author{
//     constructor(name,birthyear,nationality){
// this.name=name;
// this.birthYear=birthYear;
// this.nationality=nationality;

//     }

// }

// class Book {
//     constructor(title,author){
//         this.title=title;
//         this.author=author;
//     }
// }
class Author {
    constructor(name, birthYear, nationality) {
      this.name = name;
      this.birthYear = birthYear;
      this.nationality = nationality;
    }
  }
  
  class Book {
    constructor(title,authors) {
      this.title = title;
this.authors = authors ? (Array.isArray(authors) ? authors : [authors]) : [];
    }
  }
  
  
  const author1 = new Author("David", 1942, "American");
  const author2 = new Author("John", 1980, "British");
  
  const book1 = new Book("Intro to java", author1);
  const book2 = new Book("Data Science for Beginners", [author2]);
  
  console.log("Book 1:");
  console.log(`Title: ${book1.title}`);
  
  console.log("Authors:");
  book1.authors.forEach(author => {
    console.log(`- ${author.name}`);
  });
  
  console.log("\nBook 2:");
  console.log(`Title: ${book2.title}`);
  
  console.log("Authors:");
  book2.authors.forEach(author => {
    console.log(`- ${author.name}`);
  });
  
