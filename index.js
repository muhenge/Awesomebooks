let books = [];


const form = document.getElementsByTagName('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const ul = document.getElementById('ul');
;
const addBook = ()=>{
    // const makeBook = ()=>{
        const book = {
            name: title.value,
            author: author.value
        };
        books.push(book);
        
        books.forEach(b => {
            const titleLi = document.createElement('li');
            const authorLi = document.createElement('li')
            titleLi.innerText = b.name
            authorLi.innerText = b.author
            ul.appendChild(titleLi);
            ul.appendChild(authorLi);
        });

    // const display = ()=>{
        
    // }

    // return {makeBook,display}
}

// const test = addBook();

const removeBook = () => {

}

document.getElementById('btn').addEventListener('click', (event)=>{
    event.preventDefault();
    addBook();
});



