// Sample Book Data
let bookList = [];

// Function to render books
function renderBooks() {
    const toReadContainer = document.querySelector('.toRead');
    const finishedReadContainer = document.querySelector('.finishedRead');

    toReadContainer.innerHTML = '';
    finishedReadContainer.innerHTML = '';

    bookList.forEach((book, index) => {
        // Create book card element
        const bookCard = document.createElement('div');
        bookCard.classList.add('col-md-3', 'mb-4');
        bookCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
                    <p class="card-text">Genre: ${book.genre}</p>
                    <button class="btn btn-success markFinished" data-index="${index}">Mark as Finished</button>
                    <button class="btn btn-danger delete-btn" data-index="${index}">Delete</button>
                </div>
            </div>
        `;
        
        // Add the book card to the correct section
        if (book.status === 'toRead') {
            toReadContainer.appendChild(bookCard);
        } else {
            finishedReadContainer.appendChild(bookCard);
        }
    });
}

// Function to handle adding new books
document.getElementById('bookForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const genre = document.getElementById('bookGenre').value;
    const status = document.getElementById('bookStatus').value;

    if (title && author && genre && status) {
        // Add new book to bookList array
        bookList.push({
            title,
            author,
            genre,
            status,
        });

        // Render the updated book list
        renderBooks();

        // Close the modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('addBookModal'));
        modal.hide();

        // Reset form fields
        document.getElementById('bookForm').reset();
    }
});


document.querySelector('.toRead').addEventListener('click', function (e) {
    if (e.target.classList.contains('markFinished')) {
        const bookIndex = e.target.getAttribute('data-index');
     
        bookList[bookIndex].status = 'finished';
        renderBooks();
    }
});


document.querySelector('.toRead').addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        const bookIndex = e.target.getAttribute('data-index');
        
        bookList.splice(bookIndex, 1);
        renderBooks();
    }
});

document.querySelector('.finishedRead').addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        const bookIndex = e.target.getAttribute('data-index');
        
        bookList.splice(bookIndex, 1);
        renderBooks();
    }
});


renderBooks();
