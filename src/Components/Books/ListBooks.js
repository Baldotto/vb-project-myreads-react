import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListBooksContent from './ListBooksContent'
import { Link } from 'react-router-dom'

class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    OnChangeBookShelf: PropTypes.func.isRequired
  }


  render() {

    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <ListBooksContent
          books={this.props.books}
          OnChangeBookShelf={this.props.OnChangeBookShelf}
        />
        <div className="open-search">
          <Link to='/search' >Add a book</Link>
        </div>
      </div>

    )

  }

}

export default ListBooks