import PropTypes from 'prop-types';


const Book = ({book}) => {
    
    const {bookId, bookName, author, image, review, totalPages, rating, category, publisher, yearOfPublishing} = book;

    return (
        <div className=''>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title flex flex-col justify-start items-start">
      {bookName}
      <div className="badge badge-primary">{author}</div>
    </h2>
    <hr className='border-dashed my-2' />
   
        <div className='flex justify-between items-center'>
         <div className="card-actions justify-start">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
         </div>
         <div>
                    <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked />
            <input type="radio" name="rating-2" className="mask mask-star-2 rating-half bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 rating-hidden bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 rating-hidden bg-orange-400" />
            </div>
         </div>
        </div>
  </div>
</div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.shape({
        bookId: PropTypes.number.isRequired, // Assuming bookId is a number
    }).isRequired
};


export default Book;