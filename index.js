/*let arrayOfBooks = [];

const addButton = document.getElementById("add");
const bookList = document.getElementById("book-list");
const titleInput = document.getElementById("title-name");
const authorInput = document.getElementById("author-name");

// function addBook() {
//   const newBook = {
//     title: titleInput.value,
//     author: authorInput.value,
//   };

//   if (newBook.title !== "" && newBook.author !== "") {
//     arrayOfBooks.push(newBook);
//   }
// }

function removeBook(event) {
  const bookKey = event.currentTarget.parentElement;
  const bookContainer = bookKey.parentElement;

  const filteredArray = arrayOfBooks.filter(
    (book) =>
      book.title !== bookKey.children[0].innerText ||
      book.author !== bookKey.children[1].innerText
  );

  arrayOfBooks = filteredArray;

  bookContainer.removeChild(bookKey);
}

function loadBooks() {
  const strBooks = window.localStorage.getItem("books");

  if (strBooks !== null) {
    arrayOfBooks = JSON.parse(strBooks);
    

    for (const book of arrayOfBooks) {
      const bookCont = document.createElement("div");
      const bookName = document.createElement("p");
      const authorName = document.createElement("p");

      bookName.innerText = book.title;
      authorName.innerText = book.author;

      const rmvBookBtn = document.createElement("button");
      rmvBookBtn.innerText = "Remove Book";
      rmvBookBtn.addEventListener("click", removeBook);

      bookCont.appendChild(bookName);
      bookCont.appendChild(authorName);
      bookCont.appendChild(rmvBookBtn);
      bookList.appendChild(bookCont);
    }
  }

}

function saveBooks() {
  const svBooks = JSON.stringify(arrayOfBooks);
  window.localStorage.setItem('books', svBooks);
}*/

// window.addEventListener('load', loadBooks);
// window.addEventListener('unload', saveBooks);
// addButton.addEventListener('click', addBook);

class BookCatalog {
  constructor() {}
  booksCatalog = [];
  addBookButton;
  listOfBooks;
  inputTitle;
  inputAuthor;

  addBook() {
    const newBook = {
      title: this.inputTitle.value,
      author: this.inputAuthor.value,
    };
    console.log(newBook);
    console.log(this.booksCatalog);
    if (newBook.title !== "" && newBook.author !== "") {
      this.booksCatalog.push(newBook);
    }
  }

  removeBook(event) {
    const bookKey = event.currentTarget.parentElement;
    const bookContainer = bookKey.parentElement;

    const filteredArray = this.booksCatalog.filter(
    (book) =>
      book.title !== bookKey.children[0].innerText ||
      book.author !== bookKey.children[1].innerText
    );

    arrayOfBooks = filteredArray;

    bookContainer.removeChild(bookKey);
  }

  loadBooks() {
    const strBooks = window.localStorage.getItem("books");

    if (strBooks !== null) {
      this.booksCatalog = JSON.parse(strBooks);
      /* eslint-disable */
  
      for (const book of this.booksCatalog) {
        const bookCont = document.createElement("div");
        const bookName = document.createElement("p");
        const authorName = document.createElement("p");
  
        bookName.innerText = book.title;
        authorName.innerText = book.author;
  
        const rmvBookBtn = document.createElement("button");
        rmvBookBtn.innerText = "Remove Book";
        rmvBookBtn.addEventListener("click", removeBook);
  
        bookCont.appendChild(bookName);
        bookCont.appendChild(authorName);
        bookCont.appendChild(rmvBookBtn);
        bookList.appendChild(bookCont);
      }
    }
    /* eslint-enable */
  }
  saveBooks() {
    const svBooks = JSON.stringify(this.booksCatalog);
    window.localStorage.setItem('books', svBooks);
  }

  initialize() {
    //this.loadBooks();
    this.addBookButton = document.getElementById("add");
    this.listOfBooks = document.getElementById("book-list");
    this.inputTitle = document.getElementById("title-name");
    this.inputAuthor = document.getElementById("author-name");
    this.listOfBooks = document.getElementById("book-list");
    this.inputTitle = document.getElementById("title-name");
    this.inputAuthor = document.getElementById("author-name");
    document.getElementById('add').addEventListener('click', this.addBook);
    window.addEventListener('load', this.loadBooks);
    window.addEventListener('unload', this.saveBooks);
  }
};

const b = new BookCatalog();

b.initialize();
/*document.getElementById('add').addEventListener('click', b.addBook());
window.addEventListener('load', b.loadBooks());
window.addEventListener('unload', b.saveBooks());/*

/*
  initialize (){
    loadBooks();
    addEventListener(*);
  }
*/