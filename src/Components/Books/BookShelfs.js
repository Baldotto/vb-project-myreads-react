import React, { Component } from 'react'
import BookShelfBooks from './BookShelfBooks'
import PropTypes from 'prop-types'

class BookSelfs extends Component {


  static propTypes = {
    books: PropTypes.array.isRequired,
    OnChangeBookShelf: PropTypes.func.isRequired
  }

  state = {

    bookShelfs: [

      { title: 'Currently reading', type: 'currentlyReading' },
      { title: 'Want to Read', type: 'wantToRead' },
      { title: 'Read', type: 'read' }


    ]

  }



  render() {

    const { books } = this.props


    return (
      <div>
        {this.state.bookShelfs.map((bookShelf) => (
          <div className="bookshelf" key={bookShelf.type}>
            <h2 className="bookshelf-title">{bookShelf.title}</h2>
            <BookShelfBooks OnChangeBookShelf={this.props.OnChangeBookShelf} books={books.filter((book) => book.shelf === bookShelf.type)} />
          </div>
        ))}
      </div>
    )
  }
}

export default BookSelfs