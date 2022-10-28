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
const select = document.querySelector('#dropdown')


all.addEventListener('click', () => {
    shelfIns.render();
})

favs.addEventListener('click', () =>{
    shelfIns.renderFavorites();
})

select.addEventListener('change', ()=> {
// console.log('select', select.value)
if(select.value === 'alphabetical'){
    console.log('select', select.value)
    shelfIns.renderAlpha();
}
if(select.value === 'topics'){
    console.log('select', select.value)
    shelfIns.renderTopics();
}
})
//querySelectorAll the rendered books, then sort and re-render --> this works for favs and all


