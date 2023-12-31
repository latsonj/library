// Library array to loop books from
const myLibrary = [];

const addBookButton = document.querySelector('.add-book-button');
const closeButton = document.querySelector('.close-dialog-button');
const submitButton = document.querySelector('.submit-button');
const dialog = document.querySelector('dialog');
let libraryContainer = document.querySelector('.library-container');

let input = document.querySelector('input');

// Book constructor
function Book(title, author, pages, haveRead) {
  this.title = title.value;
  this.author = author.value;
  this.pages = pages.value;
  this.haveRead = haveRead.checked;
}

// Submit button magic
function addBookToLibrary() {
  let userTitle = document.querySelector('#book-title');
  let userAuthor = document.querySelector('#book-author');
  let userPages = document.querySelector('#book-pages'); 
  let userReadStatus = document.querySelector('#read-status');

  myLibrary.push(new Book(userTitle, userAuthor, userPages, userReadStatus));
  console.log(myLibrary);
  console.log(libraryContainer);
  displayBooks();
  dialog.close();
}

// Loops through array and displays book objects on webpage
function displayBooks() {

  deleteLibraryItems();

  myLibrary.forEach((book) => {
    
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('book-card');
    cardContainer.setAttribute('data-index', myLibrary.indexOf(book) + 1);
    let bookTitle = document.createElement('h2');
    let bookAuthor = document.createElement('p');
    let bookPages = document.createElement('p');
    let readLabel = document.createElement('label');
    let readStatus = document.createElement('input');
    readStatus.setAttribute('type', 'checkbox');
    let deleteBookButton = document.createElement('button');
    deleteBookButton.classList.add('delete-button');
    deleteBookButton.addEventListener('click', deleteBook);


    readStatus.addEventListener('click', tester);

    libraryContainer.appendChild(cardContainer);
    cardContainer.appendChild(bookTitle);
    cardContainer.appendChild(bookAuthor);   
    cardContainer.appendChild(bookPages);
    cardContainer.appendChild(readLabel);
    cardContainer.appendChild(readStatus);
    cardContainer.appendChild(deleteBookButton);

    bookTitle.textContent = book.title;
    bookAuthor.textContent = 'Author: ' + book.author;
    bookPages.textContent = 'Pages: ' + book.pages;
    readStatus.setAttribute('id', bookTitle.textContent.toLowerCase().replaceAll(' ', '-'));
    readLabel.textContent = 'Read: ';
    readLabel.htmlFor = bookTitle.textContent.toLowerCase().replaceAll(' ', '-');
    deleteBookButton.textContent = 'Remove';
    
    if (book.haveRead === true) {
      readStatus.checked = true;
    }
  })
}

function deleteBook(event) {
  myLibrary.splice(event.target.parentNode.dataset.index - 1, 1);
  event.target.parentNode.remove();
  displayBooks();
}

// Delete book items so displayBooks() can re-loop
function deleteLibraryItems() {
  libraryContainer.querySelectorAll('*').forEach(element => element.remove());
}

// Modal functions
function showModal() {
  dialog.showModal();
}

function closeModal() {
  dialog.close();
}

function tester(event) {
  console.log(myLibrary);
  console.log(event.target.parentNode.dataset.index);
}

submitButton.addEventListener('click', (event) => event.preventDefault());
addBookButton.addEventListener('click', showModal);
closeButton.addEventListener('click', closeModal);
displayBooks();

submitButton.addEventListener('click', addBookToLibrary);

// Close button remove from array
// Check index
// Find data-index on DOM
// Wipe DOM