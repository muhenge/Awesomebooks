/* eslint-disable */
const { DateTime } = luxon;
/* eslint-enable */

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
    window.addEventListener('load', BookCatalog.loadBooks);
    window.addEventListener('unload', BookCatalog.saveBooks);
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

    BookCatalog.saveBooks();
    BookCatalog.loadBooks();
  }

  // eslint-disable-next-line class-methods-use-this
  static loadBooks() {
    const strBooks = window.localStorage.getItem('books');
    if (strBooks !== null) {
      documentVariables.listOfBooks.innerHTML = '';
      const h1Header = document.createElement('h1');
      h1Header.textContent = 'Awesome Books';
      h1Header.classList.add('text-center');
      documentVariables.listOfBooks.appendChild(h1Header);
      documentVariables.booksCatalog = JSON.parse(strBooks);
      /* eslint-disable */

      for (const book of documentVariables.booksCatalog) {
        const bookCont = document.createElement('div');

        const titleAuth = document.createElement('div');
        const titleAuthClasses = 'd-flex flex-column justify-content-around'.split(' ');
        titleAuth.classList.add(...titleAuthClasses);

        const bookName = document.createElement('span');
        bookName.classList.add('show-no-bootstrap', 'text-uppercase', 'fs-2');

        const authorName = document.createElement('span');
        authorName.classList.add('show-no-bootstrap');

        bookName.innerText = book.title;
        authorName.innerText = book.author;

        titleAuth.appendChild(bookName);
        titleAuth.appendChild(authorName);

        const bookContClasses = 'col-12 d-flex justify-content-between border p-3'.split(' ');
        bookCont.classList.add(...bookContClasses);

        const rmvBookBtn = document.createElement('button');
        rmvBookBtn.innerText = 'Remove Book';
        rmvBookBtn.classList.add('btn', 'btn-danger')
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
  static saveBooks() {
    const svBooks = JSON.stringify(documentVariables.booksCatalog);
    window.localStorage.setItem('books', svBooks);
  }
}

// eslint-disable-next-line no-unused-vars
const b = new BookCatalog();

const timeP = document.createElement('p');
timeP.classList.add('align-self-end');

timeP.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

document.getElementById('date-time').appendChild(timeP);

document.getElementById('input-form').classList.add('hide-no-bootstrap');
document.getElementById('contact').classList.add('hide-no-bootstrap');
document.getElementById('book-list').classList.add('show-no-bootstrap');

document.getElementById('add-nav').addEventListener('click', () => {
  document.getElementById('input-form').classList.add('show-no-bootstrap');
  document.getElementById('input-form').classList.remove('hide-no-bootstrap');
  document.getElementById('contact').classList.add('hide-no-bootstrap');
  document.getElementById('contact').classList.remove('show-no-bootstrap');
  document.getElementById('book-list').classList.add('hide-no-bootstrap');
  document.getElementById('book-list').classList.remove('show-no-bootstrap');
});

document.getElementById('list').addEventListener('click', () => {
  document.getElementById('book-list').classList.add('show-no-bootstrap');
  document.getElementById('book-list').classList.remove('hide-no-bootstrap');
  document.getElementById('contact').classList.add('hide-no-bootstrap');
  document.getElementById('contact').classList.remove('show-no-bootstrap');
  document.getElementById('input-form').classList.add('hide-no-bootstrap');
  document.getElementById('input-form').classList.remove('show-no-bootstrap');
});

document.getElementById('contact-nav').addEventListener('click', () => {
  document.getElementById('contact').classList.add('show-no-bootstrap');
  document.getElementById('contact').classList.remove('hide-no-bootstrap');
  document.getElementById('book-list').classList.add('hide-no-bootstrap');
  document.getElementById('book-list').classList.remove('show-no-bootstrap');
  document.getElementById('input-form').classList.add('hide-no-bootstrap');
  document.getElementById('input-form').classList.remove('show-no-bootstrap');
});