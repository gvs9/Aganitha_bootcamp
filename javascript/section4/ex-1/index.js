class Book {
    constructor(title, author, pages = 0) {
    
      if (!title || !author) {
        throw new Error('Title and author are mandatory.');
      }
  
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
  }
  
  
  const ans = new Book('The Alchemist', 'Paulo Coelho');
  console.log(ans); 