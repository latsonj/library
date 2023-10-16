const dune = new Book('Dune', 'Frank Herbert', 896, true);
const gameOfThrones = new Book('A Game of Thrones', 'George R. R. Martin', 694, false);
const animalFarm = new Book('Animal Farm', 'George Orwell', 140, false);

const myLibrary = [gameOfThrones, dune, animalFarm];

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
    let bookStatus = document.createElement('input');
    bookStatus.setAttribute('type', 'checkbox');

    libraryContainer.appendChild(cardContainer);
    cardContainer.appendChild(bookTitle);
    cardContainer.appendChild(bookAuthor);   
    cardContainer.appendChild(bookPages);
    cardContainer.appendChild(bookStatus);

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;
    
    if (book.haveRead === true) {
      bookStatus.checked = true;
    }

  })
}

displayBooks();
