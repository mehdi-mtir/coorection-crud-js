var books = [
    {id : 1, title : "Atomic Habits", author : "James Clear", price : 35},
    {id : 2, title : "Atomic Habits 2", author : "James Clear", price : 35},
    {id : 3, title : "Atomic Habits 3", author : "James Clear", price : 35}
]
var addForm;
var editForm;

const showListOfBooks = ()=>{
    let RowsList = "";
    books.forEach(
        book=>{
            RowsList += "<tr>";
                //RowsList += "<td>" + book.id + "</td>";
                RowsList += `<td>${book.id}</td>`;
                RowsList += `<td>${book.title}</td>`;
                RowsList += `<td>${book.author}</td>`;
                RowsList += `<td>${book.price} DTN</td>`;
                RowsList += `<td><button class="btn btn-success" onclick="showEditForm(${book.id})">Editer </button> </td>`;
                RowsList += `<td><button class="btn btn-danger" onclick="deleteBook(${book.id})">Supprimer </button></td>`;
            RowsList += "</tr>"
        }
    );
    document.querySelector('tbody').innerHTML = RowsList;
}

const showAddForm = ()=>{
    addForm.classList.remove('hide');
}

const validateAddForm = (evt)=>{
    evt.preventDefault();
    const newBook = {
        id : books[books.length - 1].id + 1,
        title : document.getElementById('title').value,
        author : document.getElementById('author').value,
        price : document.getElementById('price').value,
    }
    books.push(newBook);
    addForm.classList.add('hide');
    showListOfBooks();
}

const deleteBook = (id)=>{
    if(confirm("Etes-vous sûre de vouloir supprimer le livre?")){
        books = books.filter(book => book.id !== +id);
        showListOfBooks();
    }
}

const showEditForm = (id)=>{
    const book = books.find(book => book.id == id)
    editForm.classList.remove('hide');
    document.getElementById('titleEd').value = book.title;
    document.getElementById('authorEd').value = book.author
    document.getElementById('priceEd').value = book.price;
    document.getElementById('bookId').value = book.id;
}

const validateEditForm = (evt)=>{
    console.log(evt);
    evt.preventDefault();
    const editedBook = {
        id : document.getElementById('bookId').value,
        title : document.getElementById('titleEd').value,
        author : document.getElementById('authorEd').value,
        price : document.getElementById('priceEd').value,
    }
    books = books.map(
        book=>book.id === +editedBook.id ? editedBook : book
    );
    addForm.classList.add('hide');
    showListOfBooks();
}

//function init(){}
//const init = function(){}
const init = ()=>{
    showListOfBooks();
    const btnAdd = document.getElementById("btnAdd");
    btnAdd.addEventListener('click', showAddForm)
    addForm = document.getElementById("addForm");
    editForm = document.getElementById("editForm");
    addForm.addEventListener('submit', validateAddForm);
    editForm.addEventListener('submit', validateEditForm);

}

window.addEventListener('load', init);