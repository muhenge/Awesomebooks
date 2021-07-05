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
        const titleLi = document.createElement('li');
        const authorLi = document.createElement('li');
        const removeBtn = document.createElement("button");
        books.forEach(b => {
            removeBtn.innerText = "Remove";
            titleLi.innerText = b.name
            authorLi.innerText = b.author
            if(titleLi.innerText === '' && authorLi.innerText === '') {
                console.log('empty');
            }
            else {
                ul.appendChild(titleLi);
                ul.appendChild(authorLi);
                ul.appendChild(removeBtn);
            }

        });

}



const removeBook = () => {

}

document.getElementById('btn').addEventListener('click', (event)=>{
    event.preventDefault();
    addBook();
});



