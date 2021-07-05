let books = [];


const form = document.getElementsByTagName('form');
const title = document.getElementById('title');
const author = document.getElementById('author');

const addBook = (event)=>{
    event.preventDefault();
    const book = {
        name: title.value,
        author: author.value
    };
    books.push(book);
}

document.getElementById('btn').addEventListener('click', (addBook));



