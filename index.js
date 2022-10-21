import Book from './js/book.js';
import BookShelf from './js/bookshelf.js';
import data from './js/bookData.js';

console.log('hello from index.js')

function renderBookShelf(books){
    const shelfIns = new BookShelf([]);
    for(const book of books){
        const bookIns = new Book(book.author, book.language, book.subject, book.title);
        shelfIns.addBook(bookIns);
    }
    const shelfElm = shelfIns.render();
    document.querySelector('#book_shelf').appendChild(shelfElm);
}

renderBookShelf(data);
/*
 {
      author: ["Deihl, Edna Groff"],
      language: "en",
      subject: [
        "Boys -- Juvenile fiction",
        "Puppies -- Juvenile fiction",
        "PZ",
        "Pets -- Juvenile fiction",
        "Circus -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
        "Children and animals -- Juvenile fiction",
        "Dogs -- Juvenile fiction",
      ],
      title: "My twin puppies",
    },
    */