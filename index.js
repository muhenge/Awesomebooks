let books = [];

const form = document.getElementsByTagName('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const ul = document.getElementById('ul');

const removeBook = (event) => {
    event.preventDefault();
    const b = document.getElementsByClassName('book');
    console.log(b);
    // const rmv = document.getElementsByClassName('btnn');
    // books.filter(e => {
    //     if(event) {
    //         console.log(e)
    //     }
    // })
}

const addBook = ()=>{
    // const makeBook = ()=>{
        const book = {
            name: title.value,
            author: author.value
        };
        books.push(book);

        const titleLi = document.createElement('span');
        const authorLi = document.createElement('span');
        const removeBtn = document.createElement("button");
        removeBtn.setAttribute('class','btnn');
        console.log(removeBook)
        const container = document.createElement("div");
        const li = document.createElement('li');
        books.forEach(b => {
            removeBtn.innerText = "Remove";
            titleLi.innerText = b.name
            authorLi.innerText = b.author
            if(titleLi.innerText === '' && authorLi.innerText === '') {
                console.log('empty');
            }
            else {
                container.appendChild(titleLi);
                container.appendChild(authorLi);
                li.appendChild(container);
                ul.appendChild(li);
                container.appendChild(removeBtn);
            }

            removeBtn.addEventListener('click',removeBook)
        });
}



document.getElementById('btn').addEventListener('click', (event)=>{
    event.preventDefault();
    addBook();
});



