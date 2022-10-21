// const book = require('book.js');
// const data = require('bookData.js');

export default class Bookshelf {
    constructor(books){
        this.books = books;
    }
    addBook(book){
        this.books.push(book);
    }
    render(){
        const shelfUl = document.createElement('ul');
        shelfUl.style.display = 'flex';
        shelfUl.style.flexWrap = 'wrap';
        shelfUl.style.listStyle = 'none';
        
        for(const book of this.books){
          shelfUl.appendChild(book.render());
        } 
        return shelfUl;
    }
}

// module.exports = Bookshelf;