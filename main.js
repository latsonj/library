const dune = new Book('Dune', 'Frank Herbert', 896, true);
const gameOfThrones = new Book('A Game of Thrones', 'George R. R. Martin', 694, false);
const animalFarm = new Book('Animal Farm', 'George Orwell', 140, false);

const myLibrary = [gameOfThrones, dune, animalFarm];

const addBookButton = document.querySelector('.add-book-button');
const closeButton = document.querySelector('.close-dialog-button');
const submitButton = document.querySelector('.submit-button');
const dialog = document.querySelector('dialog');
let libraryContainer = document.querySelector('.library-container');

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

function addBookToLibrary() {

}

function displayBooks() {
  myLibrary.forEach((book) => {
    
    let cardContainer = document.createElement('div');
    cardContainer.classList.add("book-card");
    let bookTitle = document.createElement('h2');
    let bookAuthor = document.createElement('p');
    let bookPages = document.createElement('p');
    let readLabel = document.createElement('label');
    let readStatus = document.createElement('input');
    readStatus.setAttribute('type', 'checkbox');

    libraryContainer.appendChild(cardContainer);
    cardContainer.appendChild(bookTitle);
    cardContainer.appendChild(bookAuthor);   
    cardContainer.appendChild(bookPages);
    cardContainer.appendChild(readLabel);
    cardContainer.appendChild(readStatus);

    bookTitle.textContent = book.title;
    bookAuthor.textContent = 'Author: ' + book.author;
    bookPages.textContent = 'Pages: ' + book.pages;
    readStatus.setAttribute('id', bookTitle.textContent.toLowerCase().replaceAll(' ', '-'));
    readLabel.textContent = 'Read: ';
    readLabel.htmlFor = bookTitle.textContent.toLowerCase().replaceAll(' ', '-');
    
    if (book.haveRead === true) {
      readStatus.checked = true;
    }

  })
}

function showModal() {
  dialog.showModal();
}

function closeModal() {
  dialog.close();
}

submitButton.addEventListener('click', (event) => event.preventDefault());
addBookButton.addEventListener('click', showModal);
closeButton.addEventListener('click', closeModal);
displayBooks();
