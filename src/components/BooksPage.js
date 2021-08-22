import { useEffect, useState } from "react";

import BookCard from "./BookCard";

const BooksPage = ({ books }) => {
  const [filteredBooks, setFilteredBooks] = useState([]);

  const filter = (e) => {
    const booksArray = books.filter((book) => {
      if (e.target.name === "all") {
        return book;
      } else {
        return book[e.target.className] === e.target.name;
      }
    });
    setFilteredBooks(booksArray);
  };

  const orderBy = (e) => {
    if (e.target.value === "alphabetically") {
      const booksByOrder = [...books].sort((a, b) => {
        if (a.book_name > b.book_name) return 1;
        if (b.book_name > a.book_name) return -1;
        return 0;
      });
      setFilteredBooks(booksByOrder);
    } else if (e.target.value === "last") {
      const booksByOrder = [...books].sort(
        (a, b) => new Date(b.date_added) - new Date(a.date_added)
      );
      setFilteredBooks(booksByOrder);
    }
  };

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  return (
    <div className='books-page'>
      <div>Find your book!</div>
      <div className='filter-container'>
        <div className='left-filter'>
          <div className='categories'>
            <button className='category' name='all' onClick={filter}>
              All Categories
            </button>
            <button className='category' name='fiction' onClick={filter}>
              Fiction
            </button>
            <button className='category' name='comedy' onClick={filter}>
              Comedy
            </button>
          </div>
          <div className='colors'>
            <button className='color' name='all' onClick={filter}>
              All Colors
            </button>
            <button className='color' name='red' onClick={filter}>
              Red
            </button>
            <button className='color' name='blue' onClick={filter}>
              Blue
            </button>
          </div>
        </div>
        <div className='right-filter'>
          <select onChange={orderBy} name='filter' id='dropdown'>
            <option value=''>Order By:</option>
            <option value='last'>Last Added</option>
            <option value='alphabetically'>A - Z</option>
          </select>
        </div>
      </div>
      <div className='books-container'>
        {filteredBooks.map((book) => (
          <BookCard bookInfo={book} key={book.idbooks} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
