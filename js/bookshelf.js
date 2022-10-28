export default class Bookshelf {
    constructor(){
        this.books = [];
        this.favorites = [];
        // this.alpah = [];
        // this.topicsNum = [];
    }
    addBook(book){
        this.books.push(book);
    }

    addFav(book) {
        this.favorites.push(book);
    }

    renderAlpha(){
       //console.log('alpha', this.books)
        this.books.sort((a, b) => {
            if(a.title > b.title) return 1;
            return -1;
        })
        // console.log('after sort', this.books)
        this.render()
    }

    renderTopics(){
        console.log(this.books)
        this.books.sort((a, b) => {
            if(a.subject.length > b.subject.length) return 1
            return -1;
        })
        this.render()
    }

    render(){
        const shelfUl = document.querySelector('#book_shelf'); //ul
        shelfUl.innerHTML = '';
        shelfUl.style.display = 'flex';
        shelfUl.style.flexWrap = 'wrap';
        shelfUl.style.listStyle = 'none';
        
       
       this.books.map((book) => {
        const bookIns = book.render(); //li, btn

        //grabbing button, adding functionality 
        const favBtn = bookIns.querySelector('button');
        favBtn.addEventListener('click', ()=> {
              if(!this.favorites.includes(book)) this.addFav(book);
            console.log(book)
        })
        shelfUl.append(bookIns)
       })
       const footer = document.querySelector('footer');
       footer.innerHTML = `We have: ${this.books.reduce((a, c) => a + 1, 0)} books in stock`
    }

    renderFavorites() {
        const shelfUl = document.querySelector('#book_shelf');
        shelfUl.innerHTML = '';

        shelfUl.style.display = 'flex';
        shelfUl.style.flexWrap = 'wrap';
        shelfUl.style.listStyle = 'none';

        this.favorites.map((book) => {
            const bookIns = book.render();
            // const favBtn = bookIns.querySelector('button');
            // favBtn.addEventListener('click', ()=> {
            //     this.addFav(book);
            //     console.log(this.favorites)
            // })
            shelfUl.append(bookIns)
           })

           const footer = document.querySelector('footer');
           const count = this.favorites.length === 1 ? 'book' : 'books';
           footer.innerHTML = `You have: ${this.favorites.reduce((a, c) => a + 1, 0)} favorite ${count}`
    }

//alphabetical render
//topics render
}
