export default class Bookshelf {
    constructor(){
        this.books = [];
        this.favorites = [];
        this.filtered = [];
    }

    addBook(book){
        this.books.push(book);
    }

    addFav(book) {
        this.favorites.push(book);
    }

    removeFav(book){
       this.favorites = this.favorites.filter((favBook) => favBook !== book)
       this.renderFavorites(); 
    }

    renderAlpha(){
      // console.log('alpha', this.books)
        this.books.sort((a, b) => { 
            if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            return -1;
        })
       // console.log('after sort', this.books)
        this.render()
    }

    renderReverse(){
        // console.log('alpha', this.books)
          this.books.sort((a, b) => { 
              if(a.title < b.title) return 1;
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

    search(input){
      console.log(this.filtered)
      this.filtered = this.books.filter((book) => book.title.includes(input))
      console.log(this.filtered)
      this.renderFiltered()
    }

    removeBook(book){
        this.books = this.books.filter((currBook) => currBook !== book);
        this.render();
    }

    render(){
        const shelfUl = document.querySelector('#book_shelf'); //ul
        //clear dom
        shelfUl.innerHTML = '';
        shelfUl.style.display = 'flex';
        shelfUl.style.flexWrap = 'wrap';
        shelfUl.style.listStyle = 'none';
        
       
       this.books.map((book) => { //jungle book, tarzan, 142....
        let bookIns = book.render(); //li, btn

        //grabbing button, adding functionality 
        const favBtn = bookIns.querySelector('.favBtn');
        favBtn.addEventListener('click', ()=> {
              if(!this.favorites.includes(book)) {
                this.addFav(book)
            } else {
                this.removeFav(book)
            }
            console.log(book)
        })

        const showComments = bookIns.querySelector('.showCommentsBtn');
        showComments.addEventListener('click', () => {
            book.showComments = !book.showComments;
            this.render()
        })
        if(book.showComments){
            const commentForm = bookIns.querySelector('.commentForm');
            commentForm.addEventListener('submit', (e) => {
                console.log('comment form')
                e.preventDefault();
                console.log(e.target[0].value);
                book.addComment(e.target[0].value);
                // bookIns = book.render();
                this.render()
            })
        }
      
        const deleteBtn = bookIns.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', () => {
            // console.log('DELETE', book)
            this.removeBook(book);
        })

        shelfUl.append(bookIns)
       })
       //end of map

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
            const favBtn = bookIns.querySelector('button');
            favBtn.addEventListener('click', ()=> {
                if(!this.favorites.includes(book)) {
                  this.addFav(book)
              } else {
                  this.removeFav(book)
              }
              console.log(book)
          })
            shelfUl.append(bookIns)
           })

           const footer = document.querySelector('footer');
           const count = this.favorites.length === 1 ? 'book' : 'books';
           footer.innerHTML = `You have: ${this.favorites.reduce((a, c) => a + 1, 0)} favorite ${count}`
    }

    renderFiltered(){
        const shelfUl = document.querySelector('#book_shelf'); //ul
        //clear dom
        shelfUl.innerHTML = '';
        shelfUl.style.display = 'flex';
        shelfUl.style.flexWrap = 'wrap';
        shelfUl.style.listStyle = 'none';
        
       
       this.filtered.map((book) => { //jungle book, tarzan, 142....
        let bookIns = book.render(); //li, btn

        //grabbing button, adding functionality 
        const favBtn = bookIns.querySelector('.favBtn');
        favBtn.addEventListener('click', ()=> {
              if(!this.favorites.includes(book)) {
                this.addFav(book)
            } else {
                this.removeFav(book)
            }
            console.log(book)
        })

        const showComments = bookIns.querySelector('.showCommentsBtn');
        showComments.addEventListener('click', () => {
            book.showComments = !book.showComments;
            this.render()
        })
        if(book.showComments){
            const commentForm = bookIns.querySelector('.commentForm');
            commentForm.addEventListener('submit', (e) => {
                console.log('comment form')
                e.preventDefault();
                console.log(e.target[0].value);
                book.addComment(e.target[0].value);
                // bookIns = book.render();
                this.render()
            })
        }
      
        shelfUl.append(bookIns)
       })
       //end of map

       const footer = document.querySelector('footer');
       footer.innerHTML = `We have: ${this.filtered.reduce((a, c) => a + 1, 0)} books in stock`
    }

}
