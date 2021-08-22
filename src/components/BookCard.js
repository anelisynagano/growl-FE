const BookCard = ({ bookInfo }) => {
  return (
    <div className='book-card'>
      <img src={bookInfo.img_url} alt='book cover' />
      <p>{bookInfo.book_name}</p>
      <p>{bookInfo.category}</p>
      <p>written by {bookInfo.author_name}</p>
    </div>
  );
};

export default BookCard;
