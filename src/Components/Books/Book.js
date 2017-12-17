import React from 'react'
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types'

const Book = ({ book, OnChangeBookShelf }) => (
  <div className="book" >
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')' }}></div>
      <BookShelfChanger OnChangeBookShelf={OnChangeBookShelf} book={book} />
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors}</div>
  </div>
)

Book.propTypes = {
  book: PropTypes.object.isRequired,
  OnChangeBookShelf: PropTypes.func.isRequired
}

export default Book