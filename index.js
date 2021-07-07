let books = [];
const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const ul = document.getElementById('ul');

const removeBook = (event) => {
  event.preventDefault();
  const divBook = event.currentTarget.parentElement;
  const liBook = divBook.parentElement;

  ul.removeChild(liBook);
  // eslint-disable-next-line array-callback-return
  books = books.filter((b) => {
    // eslint-disable-next-line no-unused-expressions
    b.name !== divBook.children[0].innerText && b.author !== divBook.children[1].innerText;
  });

  localStorage.removeItem(divBook.children[0].innerText);
};
const addBook = () => {
  const book = {
    name: title.value,
    author: author.value,
  };
  books.push(book);

  const bookTest = JSON.stringify(book);
  localStorage.setItem(title.value, bookTest);
  const data = localStorage.getItem(title.value);
  const parsed = JSON.parse(data);

  const titleLi = document.createElement('div');
  titleLi.classList.add('text-uppercase', 'fs-1');
  const authorLi = document.createElement('div');
  authorLi.classList.add('text-capitalize');
  const removeBtn = document.createElement('button');
  const container = document.createElement('div');
  const li = document.createElement('li');
  li.classList.add('list-group-item');
  books.forEach(() => {
    removeBtn.innerText = 'Remove';
    removeBtn.classList.add('btn', 'btn-danger');
    titleLi.innerText = parsed.name;
    authorLi.innerText = parsed.author;
    if (titleLi.innerText === '' && authorLi.innerText === '') {
      const alert = document.createElement('div');
      alert.classList.add('alert', 'alert-danger');
      alert.setAttribute('role', 'alert');
      alert.innerText = 'Please, add a title and author';
      document.getElementById('alert').appendChild(alert);
    } else {
      container.appendChild(titleLi);
      container.appendChild(authorLi);
      li.appendChild(container);
      ul.appendChild(li);
      container.appendChild(removeBtn);
    }
    removeBtn.addEventListener('click', removeBook);
  });
};

document.getElementById('btn').addEventListener('click', (event) => {
  event.preventDefault();
  addBook();
  form.reset();
});
