import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'


class BooksGrid extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        OnChangeBookShelf: PropTypes.func
    }

    render() {
        return (
            <ol className="books-grid">
                {this.props.books.map((book) => (
                    <li key={book.id}>
                        <Book book={book} OnChangeBookShelf={this.props.OnChangeBookShelf} />
                    </li>
                ))}
            </ol>
        )
    }
}

export default BooksGrid