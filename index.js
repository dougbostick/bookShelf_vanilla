import Book from './js/book.js';
import BookShelf from './js/bookshelf.js';
import data from './js/bookData.js';

console.log('hello from index.js')
const shelfIns = new BookShelf();

//seed functionality
    for(const book of data){
        const bookIns = new Book(book.author, book.language, book.subject, book.title);
        // console.log('book ins', bookIns);
        shelfIns.addBook(bookIns);
    } 


const all = document.querySelector('#all')
const favs = document.querySelector('#favs')

all.addEventListener('click', () => {
    shelfIns.render();
})

favs.addEventListener('click', () =>{
    shelfIns.renderFavorites();
})

//querySelectorAll the rendered books, then sort and re-render --> this works for favs and all


