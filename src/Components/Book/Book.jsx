import PropTypes from 'prop-types';


const Book = ({book}) => {
    
    const {bookId, bookName, author, image, review, totalPages, rating, category, publisher, yearOfPublishing} = book;

    return (
        <div>
            <img src="url" alt="" />
            <h3>Hi {bookId}</h3>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.shape({
        bookId: PropTypes.number.isRequired, // Assuming bookId is a number
    }).isRequired
};


export default Book;