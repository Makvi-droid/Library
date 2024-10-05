// script.js

$(document).ready(function () {
    $('#bookForm').on('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the book details from the form
        const title = $('#bookTitle').val();
        const author = $('#bookAuthor').val();
        const genre = $('#bookGenre').val();
        const status = $('#bookStatus').val();

        // Create a new book card element
        const bookCard = `
            <div class="col-md-4 mb-3"> <!-- This ensures cards stack correctly -->
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Book Title: ${title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Book Author: ${author}</h6>
                        <p class="card-text">Genre:Book Genre: ${genre}</p>
                        <button class="btn btn-danger delete-btn">Delete</button>
                    </div>
                </div>
            </div>
        `;

        // Append the book card to the appropriate section based on status
        if (status === 'toRead') {
            $('.toRead').append(bookCard);
        } else if (status === 'finished') {
            $('.finishedRead').append(bookCard);
        }

        // Reset the form and close the modal
        $('#bookForm')[0].reset();
        $('#addBookModal').modal('hide');
    });

    // Event delegation for delete buttons
    $(document).on('click', '.delete-btn', function () {
        // Remove the card associated with the clicked delete button
        $(this).closest('.col-md-4').remove();
    });
});
