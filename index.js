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
const addForm = document.querySelector('#add_form');
// const searchBtn = document.querySelector('#search_btn')
const searchInput = document.querySelector('#search_input')

searchInput.addEventListener('input', ()=> {
    shelfIns.search(searchInput.value);
})

// searchBtn.addEventListener('click', () => {
//     // console.log(searchInput)
//     shelfIns.search(searchInput.value);
// })

//form handler function 
addForm.addEventListener('submit', (e) => {
e.preventDefault();
console.log('e', e)
const title = e.target[0].value;
const author = e.target[1].value;
const language = e.target[2].value;
const subjects = e.target[3].value.split(', ');
// console.log(subjects)
const bookToAdd = new Book(author, language, subjects, title);
// console.log(bookToAdd)
shelfIns.addBook(bookToAdd)
shelfIns.render();
addForm.reset()
})

all.addEventListener('click', () => {
    shelfIns.render();
})

favs.addEventListener('click', () =>{
    shelfIns.renderFavorites();
})

select.addEventListener('change', ()=> {
// console.log('select', select.value)
if(select.value === 'alphabetical'){
    // console.log('select', select.value)
    shelfIns.renderAlpha();
}
if(select.value === 'reverse'){
    // console.log('select', select.value)
    shelfIns.renderReverse();
}
if(select.value === 'topics'){
    // console.log('select', select.value)
    shelfIns.renderTopics();
}
})




//querySelectorAll the rendered books, then sort and re-render --> this works for favs and all


