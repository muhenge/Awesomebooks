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
    document.getElementById('input-form').reset();
  }

  // eslint-disable-next-line class-methods-use-this
  loadBooks() {
    const strBooks = window.localStorage.getItem('books');
    if (strBooks !== null) {
      documentVariables.booksCatalog = JSON.parse(strBooks);
      /* eslint-disable */
  
      for (const book of documentVariables.booksCatalog) {
        const bookCont = document.createElement('div');
        const titleAuth = document.createElement('div');
        const titleAuthClasses = 'd-flex flex-column justify-content-around'.split(' ');
        titleAuth.classList.add(...titleAuthClasses);
        const bookName = document.createElement('span');
        bookName.classList.add('d-block','text-uppercase','fs-2');
        const authorName = document.createElement('span');
        authorName.classList.add('d-block');
        titleAuth.appendChild(bookName);
        titleAuth.appendChild(authorName);        
        const bookContClasses = 'col-12 d-flex justify-content-between border p-3'.split(' ');
        bookCont.classList.add(...bookContClasses);
        bookName.innerText = book.title;
        authorName.innerText = book.author;
        
        const rmvBookBtn = document.createElement('button');
        rmvBookBtn.innerText = 'Remove Book';
        rmvBookBtn.classList.add('btn','btn-danger')
        rmvBookBtn.addEventListener('click', BookCatalog.removeBook)
  
        bookCont.appendChild(titleAuth);
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

document.getElementById('add-book').classList.add('d-none');
document.getElementById('contact').classList.add('d-none');
document.getElementById('book-list').classList.add('d-block');

document.getElementById('add-nav').addEventListener('click', () => {
  document.getElementById('add-book').classList.add('d-block');
  document.getElementById('add-book').classList.remove('d-none');
  document.getElementById('contact').classList.add('d-none');
  document.getElementById('contact').classList.remove('d-block');
  document.getElementById('book-list').classList.add('d-none');
  document.getElementById('book-list').classList.remove('d-block');
});

document.getElementById('list').addEventListener('click', () => {
  document.getElementById('book-list').classList.add('d-block');
  document.getElementById('book-list').classList.remove('d-none');
  document.getElementById('contact').classList.add('d-none');
  document.getElementById('contact').classList.remove('d-block');
  document.getElementById('add-book').classList.add('d-none');
  document.getElementById('add-book').classList.remove('d-block');
});

document.getElementById('contact-nav').addEventListener('click', () => {
  document.getElementById('contact').classList.add('d-block');
  document.getElementById('contact').classList.remove('d-none');
  document.getElementById('book-list').classList.add('d-none');
  document.getElementById('book-list').classList.remove('d-block');
  document.getElementById('add-book').classList.add('d-none');
  document.getElementById('add-book').classList.remove('d-block');
});