let books = [];
const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const ul = document.getElementById('ul');



const removeBook = (event) => {
    event.preventDefault();
    //const b = document.getElementsByClassName('book');
    const divBook = event.currentTarget.parentElement;
    const liBook = divBook.parentElement;
    
    ul.removeChild(liBook);
    books = books.filter(b => {
        b.name != divBook.children[0].innerText &&
        b.author != divBook.children[1].innerText;
    });

    localStorage.removeItem(divBook.children[0].innerText);

}
const addBook = () => {
        const book = {
            name: title.value,
            author: author.value
        };
        books.push(book);

        const bookTest = JSON.stringify(book)
        localStorage.setItem(title.value, bookTest);
        
        const titleLi = document.createElement('div');
        titleLi.classList.add('text-uppercase','fs-1');
        const authorLi = document.createElement('div');
        authorLi.classList.add('text-capitalize');
        const removeBtn = document.createElement("button");
        const container = document.createElement("div");
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        books.forEach(b => {
            removeBtn.innerText = "Remove";
            removeBtn.classList.add('btn','btn-danger')
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
    form.reset();
});



