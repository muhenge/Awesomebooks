const documentVariables = {
  booksCatalog: [],
  listOfBooks: document.getElementById('book-list'),
  inputTitle: document.getElementById('title-name'),
  inputAuthor: document.getElementById('author-name'),
  addBookButton: document.getElementById('add'),
};

class BookCatalog {
  constructor() {
    documentVariables.addBookButton.addEventListener('click', this.addBook);
    window.addEventListener('load', this.loadBooks);
    window.addEventListener('unload', this.saveBooks);
  }

  // eslint-disable-next-line class-methods-use-this
  addBook() {
    if (documentVariables.inputTitle.value !== '' && documentVariables.inputAuthor.value !== '') {
      const newBook = {
        title: documentVariables.inputTitle.value,
        author: documentVariables.inputAuthor.value,
      };
      documentVariables.booksCatalog.push(newBook);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  loadBooks() {
    const strBooks = window.localStorage.getItem('books');
    if (strBooks !== null) {
      documentVariables.booksCatalog = JSON.parse(strBooks);
      /* eslint-disable */
  
      for (const book of documentVariables.booksCatalog) {
        const bookCont = document.createElement('div');
        const bookName = document.createElement('p');
        const authorName = document.createElement('p');
  
        bookName.innerText = book.title;
        authorName.innerText = book.author;
  
        const rmvBookBtn = document.createElement('button');
        rmvBookBtn.innerText = 'Remove Book';
        rmvBookBtn.addEventListener('click', BookCatalog.removeBook)
  
        bookCont.appendChild(bookName);
        bookCont.appendChild(authorName);
        bookCont.appendChild(rmvBookBtn);
        documentVariables.listOfBooks.appendChild(bookCont);
      }

    }
    /* eslint-enable */
  }

  static removeBook(event) {
    const bookKey = event.currentTarget.parentElement;
    const bookContainer = bookKey.parentElement;
    const filteredArray = documentVariables.booksCatalog.filter(
      (book) => book.title !== bookKey.children[0].innerText
      || book.author !== bookKey.children[1].innerText,
    );

    documentVariables.booksCatalog = filteredArray;

    bookContainer.removeChild(bookKey);
  }

  // eslint-disable-next-line class-methods-use-this
  saveBooks() {
    if (documentVariables.booksCatalog !== undefined) {
      const svBooks = JSON.stringify(documentVariables.booksCatalog);
      window.localStorage.setItem('books', svBooks);
    }
  }
}

// eslint-disable-next-line no-unused-vars
const b = new BookCatalog();