

$(document).ready(function () {
    $('#bookForm').on('submit', function (event) {
        event.preventDefault(); 

        
        const title = $('#bookTitle').val();
        const author = $('#bookAuthor').val();
        const genre = $('#bookGenre').val();
        const status = $('#bookStatus').val();

       
        const bookCard = `
            <div class="col-md-4 mb-3"> <!-- This ensures cards stack correctly -->
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Title: ${title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Author: ${author}</h6>
                        <p class="card-text">Genre: ${genre}</p>
                        <button class="btn btn-danger delete-btn">Delete</button>
                    </div>
                </div>
            </div>
        `;

        
        if (status === 'toRead') {
            $('.toRead').append(bookCard);
        } else if (status === 'finished') {
            $('.finishedRead').append(bookCard);
        }

        
        $('#bookForm')[0].reset();
        $('#addBookModal').modal('hide');
    });

    
    $(document).on('click', '.delete-btn', function () {
        
        $(this).closest('.col-md-4').remove();
    });
});
